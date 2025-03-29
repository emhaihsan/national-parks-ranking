import React from 'react';
import { useParks } from '@/context/ParkContext';
import { resetData } from '@/utils/storage';

export default function Header() {
  const { generateNewMatchup } = useParks();
  
  const handleReset = () => {
    if (window.confirm('Are you sure you want to reset all rankings and votes? This cannot be undone.')) {
      resetData();
      window.location.reload();
    }
  };

  return (
    <header className="bg-gradient-to-r from-green-600 to-blue-600 text-white p-6 shadow-md">
      <div className="container mx-auto flex flex-col md:flex-row justify-between items-center">
        <div>
          <h1 className="text-3xl font-bold">Indonesian National Parks</h1>
          <p className="text-green-100">Vote for your favorites and see how they rank!</p>
        </div>
        
        <div className="flex mt-4 md:mt-0 space-x-4">
          <button
            onClick={generateNewMatchup}
            className="bg-white text-green-700 hover:bg-green-100 px-4 py-2 rounded-md transition-colors"
          >
            New Matchup
          </button>
          
          <button
            onClick={handleReset}
            className="bg-red-600 hover:bg-red-700 text-white px-4 py-2 rounded-md transition-colors"
          >
            Reset Data
          </button>
        </div>
      </div>
    </header>
  );
}
