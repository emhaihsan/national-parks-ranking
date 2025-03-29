import { NextRequest, NextResponse } from 'next/server';
import { connectToDatabase } from '@/lib/db/mongoose';
import Vote from '@/models/Vote';
import Park from '@/models/Park';

// GET /api/votes - Get recent votes
export async function GET(req: NextRequest) {
  try {
    await connectToDatabase();
    
    // Get recent votes, limited to 10
    const votes = await Vote.find()
      .sort({ createdAt: -1 })
      .limit(10);
    
    return NextResponse.json({ votes }, { status: 200 });
  } catch (error) {
    console.error('Error fetching votes:', error);
    return NextResponse.json(
      { error: 'Failed to fetch votes' },
      { status: 500 }
    );
  }
}

// POST /api/votes - Create a new vote
export async function POST(req: NextRequest) {
  try {
    await connectToDatabase();
    
    const body = await req.json();
    const { winnerId, loserId } = body;
    
    if (!winnerId || !loserId) {
      return NextResponse.json(
        { error: 'Winner ID and loser ID are required' },
        { status: 400 }
      );
    }
    
    // Get the parks
    const winner = await Park.findOne({ id: winnerId });
    const loser = await Park.findOne({ id: loserId });
    
    if (!winner || !loser) {
      return NextResponse.json(
        { error: 'Winner or loser park not found' },
        { status: 404 }
      );
    }
    
    // Calculate new ELO ratings
    const K = 32; // K-factor
    const expectedWinnerScore = 1 / (1 + Math.pow(10, (loser.elo - winner.elo) / 400));
    const expectedLoserScore = 1 / (1 + Math.pow(10, (winner.elo - loser.elo) / 400));
    
    const winnerNewElo = Math.round(winner.elo + K * (1 - expectedWinnerScore));
    const loserNewElo = Math.round(loser.elo + K * (0 - expectedLoserScore));
    
    const eloChange = winnerNewElo - winner.elo;
    
    // Create the vote
    const vote = await Vote.create({
      winnerId,
      loserId,
      winnerElo: winner.elo,
      loserElo: loser.elo,
      eloChange
    });
    
    // Update the parks' ELO ratings
    await Park.findOneAndUpdate(
      { id: winnerId },
      { $set: { elo: winnerNewElo } }
    );
    
    await Park.findOneAndUpdate(
      { id: loserId },
      { $set: { elo: loserNewElo } }
    );
    
    return NextResponse.json({
      vote,
      winner: {
        ...winner.toObject(),
        elo: winnerNewElo
      },
      loser: {
        ...loser.toObject(),
        elo: loserNewElo
      }
    }, { status: 201 });
  } catch (error) {
    console.error('Error creating vote:', error);
    return NextResponse.json(
      { error: 'Failed to create vote' },
      { status: 500 }
    );
  }
}
