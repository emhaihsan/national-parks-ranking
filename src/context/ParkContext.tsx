import React, { createContext, useContext, useState, useEffect, ReactNode } from 'react';
import { Park } from '@/data/parks';
import { fetchParks } from '@/lib/api/parks';
import { fetchRecentVotes, submitVote, Vote } from '@/lib/api/votes';

interface ParkContextType {
  parks: Park[];
  currentMatchup: [Park, Park] | null;
  votes: Vote[];
  isLoading: boolean;
  voteForPark: (winnerId: string) => void;
  generateNewMatchup: () => void;
}

const ParkContext = createContext<ParkContextType | undefined>(undefined);

export function ParkProvider({ children }: { children: ReactNode }) {
  const [parks, setParks] = useState<Park[]>([]);
  const [currentMatchup, setCurrentMatchup] = useState<[Park, Park] | null>(null);
  const [votes, setVotes] = useState<Vote[]>([]);
  const [isLoading, setIsLoading] = useState(true);

  // Initialize data from API
  useEffect(() => {
    const loadData = async () => {
      try {
        setIsLoading(true);
        
        // Fetch parks from API
        const parksData = await fetchParks();
        setParks(parksData);
        
        // Fetch recent votes from API
        const votesData = await fetchRecentVotes();
        setVotes(votesData);
        
        setIsLoading(false);
      } catch (error) {
        console.error('Error loading data:', error);
        setIsLoading(false);
      }
    };
    
    loadData();
  }, []);

  // Generate a random matchup of two parks
  const generateNewMatchup = () => {
    if (parks.length < 2) return;
    
    // Create a copy of the parks array to avoid modifying the original
    const parksCopy = [...parks];
    
    // Randomly select first park
    const randomIndex1 = Math.floor(Math.random() * parksCopy.length);
    const park1 = parksCopy[randomIndex1];
    
    // Remove the first park to avoid duplicates
    parksCopy.splice(randomIndex1, 1);
    
    // Randomly select second park
    const randomIndex2 = Math.floor(Math.random() * parksCopy.length);
    const park2 = parksCopy[randomIndex2];
    
    setCurrentMatchup([park1, park2]);
  };

  // Generate initial matchup when parks are loaded
  useEffect(() => {
    if (parks.length >= 2 && !currentMatchup) {
      generateNewMatchup();
    }
  }, [parks, currentMatchup]);

  // Handle voting for a park
  const voteForPark = async (winnerId: string) => {
    if (!currentMatchup) return;
    
    const [park1, park2] = currentMatchup;
    const loserId = park1.id === winnerId ? park2.id : park1.id;
    
    try {
      // Submit vote to API
      const response = await submitVote(winnerId, loserId);
      
      // Update parks with new ratings
      const updatedParks = parks.map(park => {
        if (park.id === winnerId) {
          return { ...park, elo: response.winner.elo };
        }
        if (park.id === loserId) {
          return { ...park, elo: response.loser.elo };
        }
        return park;
      });
      
      // Update state
      setParks(updatedParks);
      
      // Add new vote to votes list
      setVotes(prevVotes => [response.vote, ...prevVotes].slice(0, 10));
      
      // Generate a new matchup
      generateNewMatchup();
    } catch (error) {
      console.error('Error submitting vote:', error);
    }
  };

  const value = {
    parks,
    currentMatchup,
    votes,
    isLoading,
    voteForPark,
    generateNewMatchup
  };

  return <ParkContext.Provider value={value}>{children}</ParkContext.Provider>;
}

export function useParks() {
  const context = useContext(ParkContext);
  if (context === undefined) {
    throw new Error('useParks must be used within a ParkProvider');
  }
  return context;
}
