import { NextRequest, NextResponse } from 'next/server';
import { connectToDatabase } from '@/lib/db/mongoose';
import Park from '@/models/Park';
import { parks as initialParks } from '@/data/parks';

// GET /api/parks - Get all parks
export async function GET(req: NextRequest) {
  try {
    await connectToDatabase();
    
    // Check if parks exist in the database
    const count = await Park.countDocuments();
    
    let parks;
    if (count === 0) {
      // If no parks in database, initialize with data from parks.ts
      parks = await Park.insertMany(initialParks);
    } else {
      // Get parks from database
      parks = await Park.find().sort({ elo: -1 });
    }
    
    return NextResponse.json({ parks }, { status: 200 });
  } catch (error) {
    console.error('Error fetching parks:', error);
    return NextResponse.json(
      { error: 'Failed to fetch parks' },
      { status: 500 }
    );
  }
}
