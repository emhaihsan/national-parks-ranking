/**
 * API client functions for votes
 */

import { Park } from '@/data/parks';

export interface Vote {
  _id: string;
  winnerId: string;
  loserId: string;
  winnerElo: number;
  loserElo: number;
  eloChange: number;
  createdAt: string;
}

export interface VoteResponse {
  vote: Vote;
  winner: Park;
  loser: Park;
}

/**
 * Fetch recent votes from the API
 */
export async function fetchRecentVotes(): Promise<Vote[]> {
  try {
    const response = await fetch('/api/votes', {
      method: 'GET',
      headers: {
        'Content-Type': 'application/json',
      },
      cache: 'no-store'
    });

    if (!response.ok) {
      throw new Error(`Error fetching votes: ${response.status}`);
    }

    const data = await response.json();
    return data.votes;
  } catch (error) {
    console.error('Error fetching votes:', error);
    throw error;
  }
}

/**
 * Submit a vote
 */
export async function submitVote(winnerId: string, loserId: string): Promise<VoteResponse> {
  try {
    const response = await fetch('/api/votes', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({ winnerId, loserId }),
    });

    if (!response.ok) {
      throw new Error(`Error submitting vote: ${response.status}`);
    }

    const data = await response.json();
    return data;
  } catch (error) {
    console.error('Error submitting vote:', error);
    throw error;
  }
}
