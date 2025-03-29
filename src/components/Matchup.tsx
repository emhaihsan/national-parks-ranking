import React from 'react';
import ParkCard from './ParkCard';
import { useParks } from '@/context/ParkContext';

export default function Matchup() {
  const { currentMatchup, voteForPark, generateNewMatchup, isLoading } = useParks();

  if (isLoading) {
    return (
      <div className="flex flex-col items-center justify-center p-8">
        <div className="animate-spin rounded-full h-12 w-12 border-t-2 border-b-2 border-green-500 mb-4"></div>
        <p className="text-gray-600 dark:text-gray-300">Loading parks...</p>
      </div>
    );
  }

  if (!currentMatchup) {
    return (
      <div className="flex flex-col items-center justify-center p-8">
        <p className="text-gray-600 dark:text-gray-300 mb-4">No matchup available</p>
        <button
          onClick={generateNewMatchup}
          className="bg-blue-500 hover:bg-blue-600 text-white px-4 py-2 rounded-md transition-colors"
        >
          Generate Matchup
        </button>
      </div>
    );
  }

  const [park1, park2] = currentMatchup;

  return (
    <div className="flex flex-col items-center">
      <h2 className="text-2xl font-bold mb-6 text-center text-gray-800 dark:text-white">
        Which national park do you prefer?
      </h2>
      
      <div className="grid grid-cols-1 md:grid-cols-2 gap-8 w-full max-w-6xl">
        <div className="flex flex-col">
          <ParkCard 
            park={park1} 
            onVote={() => voteForPark(park1.id)} 
            showVoteButton={true} 
          />
        </div>
        
        <div className="flex flex-col">
          <ParkCard 
            park={park2} 
            onVote={() => voteForPark(park2.id)} 
            showVoteButton={true} 
          />
        </div>
      </div>
      
      <div className="mt-8">
        <button
          onClick={generateNewMatchup}
          className="bg-gray-200 hover:bg-gray-300 dark:bg-gray-700 dark:hover:bg-gray-600 text-gray-800 dark:text-white px-4 py-2 rounded-md transition-colors"
        >
          Skip this matchup
        </button>
      </div>
    </div>
  );
}
