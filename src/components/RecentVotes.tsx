import React from 'react';
import { useParks } from '@/context/ParkContext';

export default function RecentVotes() {
  const { votes, parks, isLoading } = useParks();
  
  // Helper function to get park name by ID
  const getParkName = (id: string) => {
    const park = parks.find(p => p.id === id);
    return park ? park.name : 'Unknown Park';
  };
  
  // Format timestamp
  const formatTime = (timestamp: string) => {
    const date = new Date(timestamp);
    return date.toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' });
  };

  if (isLoading) {
    return (
      <div className="flex justify-center items-center p-8">
        <div className="animate-spin rounded-full h-8 w-8 border-t-2 border-b-2 border-green-500"></div>
      </div>
    );
  }

  if (votes.length === 0) {
    return (
      <div className="bg-white dark:bg-gray-800 rounded-lg shadow-md p-6">
        <h2 className="text-xl font-bold mb-4 text-gray-900 dark:text-white">Recent Votes</h2>
        <p className="text-gray-500 dark:text-gray-400 text-center py-4">No votes yet. Start voting to see results here!</p>
      </div>
    );
  }

  return (
    <div className="bg-white dark:bg-gray-800 rounded-lg shadow-md overflow-hidden">
      <div className="bg-purple-600 dark:bg-purple-700 p-4">
        <h2 className="text-xl font-bold text-white">Recent Votes</h2>
        <p className="text-purple-100 text-sm">Last {votes.length} votes</p>
      </div>
      
      <ul className="divide-y divide-gray-200 dark:divide-gray-700">
        {votes.map((vote, index) => (
          <li key={vote._id || index} className="p-4 hover:bg-gray-50 dark:hover:bg-gray-700">
            <div className="flex justify-between">
              <div className="flex-1">
                <p className="text-sm font-medium text-gray-900 dark:text-white">
                  {getParkName(vote.winnerId)} <span className="text-green-600 dark:text-green-400">won</span> against {getParkName(vote.loserId)}
                </p>
                <p className="text-xs text-gray-500 dark:text-gray-400">
                  ELO change: +{vote.eloChange} points
                </p>
              </div>
              <div className="text-xs text-gray-500 dark:text-gray-400">
                {vote.createdAt ? formatTime(vote.createdAt) : 'Just now'}
              </div>
            </div>
          </li>
        ))}
      </ul>
    </div>
  );
}
