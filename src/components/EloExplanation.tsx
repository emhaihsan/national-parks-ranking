import React, { useState } from 'react';

export default function EloExplanation() {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <div className="bg-white dark:bg-gray-800 rounded-lg shadow-md overflow-hidden">
      <div 
        className="bg-blue-600 dark:bg-blue-700 p-4 cursor-pointer flex justify-between items-center"
        onClick={() => setIsOpen(!isOpen)}
      >
        <h2 className="text-xl font-bold text-white">How Does the Rating Work?</h2>
        <span className="text-white text-xl">
          {isOpen ? '−' : '+'}
        </span>
      </div>
      
      {isOpen && (
        <div className="p-6 text-gray-700 dark:text-gray-300">
          <h3 className="font-bold text-lg mb-2 text-gray-900 dark:text-white">The ELO Rating System</h3>
          <p className="mb-4">
            This app uses the ELO rating system, originally developed for chess, to rank national parks based on your votes.
          </p>
          
          <h4 className="font-semibold text-md mb-2 text-gray-900 dark:text-white">How it works:</h4>
          <ol className="list-decimal list-inside mb-4 space-y-2">
            <li>Each park starts with an initial rating of 1500 points.</li>
            <li>When you vote between two parks, the winner gains points and the loser loses points.</li>
            <li>The number of points exchanged depends on the current ratings of both parks.</li>
            <li>If a lower-rated park defeats a higher-rated one, it gains more points than if the higher-rated park wins.</li>
          </ol>
          
          <h4 className="font-semibold text-md mb-2 text-gray-900 dark:text-white">The formula:</h4>
          <div className="bg-gray-100 dark:bg-gray-700 p-4 rounded-md mb-4 font-mono text-sm">
            <p>Expected Score = 1 / (1 + 10^((Rating B - Rating A) / 400))</p>
            <p className="mt-2">New Rating = Old Rating + K * (Actual Score - Expected Score)</p>
            <p className="mt-2 text-xs text-gray-500 dark:text-gray-400">Where K is a constant (32 in our system) that determines how much ratings change after each vote.</p>
          </div>
          
          <p className="text-sm text-gray-500 dark:text-gray-400 italic">
            The more you vote, the more accurate the rankings become!
          </p>
        </div>
      )}
    </div>
  );
}
