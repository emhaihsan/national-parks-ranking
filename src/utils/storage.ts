import { Park, parks as initialParks } from '@/data/parks';

export interface Vote {
  winnerId: string;
  loserId: string;
  timestamp: number;
}

/**
 * Load parks data from localStorage or use initial data if not available
 */
export function loadParks(): Park[] {
  if (typeof window === 'undefined') {
    return initialParks;
  }
  
  const storedParks = localStorage.getItem('parks');
  if (!storedParks) {
    return initialParks;
  }
  
  try {
    return JSON.parse(storedParks);
  } catch (error) {
    console.error('Error parsing stored parks:', error);
    return initialParks;
  }
}

/**
 * Save parks data to localStorage
 */
export function saveParks(parks: Park[]): void {
  if (typeof window === 'undefined') {
    return;
  }
  
  localStorage.setItem('parks', JSON.stringify(parks));
}

/**
 * Load vote history from localStorage
 */
export function loadVotes(): Vote[] {
  if (typeof window === 'undefined') {
    return [];
  }
  
  const storedVotes = localStorage.getItem('votes');
  if (!storedVotes) {
    return [];
  }
  
  try {
    return JSON.parse(storedVotes);
  } catch (error) {
    console.error('Error parsing stored votes:', error);
    return [];
  }
}

/**
 * Save vote to localStorage
 */
export function saveVote(vote: Vote): void {
  if (typeof window === 'undefined') {
    return;
  }
  
  const votes = loadVotes();
  votes.push(vote);
  
  // Keep only the last 50 votes to prevent localStorage from growing too large
  const recentVotes = votes.slice(-50);
  
  localStorage.setItem('votes', JSON.stringify(recentVotes));
}

/**
 * Reset all data to initial values
 */
export function resetData(): void {
  if (typeof window === 'undefined') {
    return;
  }
  
  localStorage.removeItem('parks');
  localStorage.removeItem('votes');
}
