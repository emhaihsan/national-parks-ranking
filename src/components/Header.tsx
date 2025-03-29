import React from 'react';
import { useParks } from '@/context/ParkContext';
import { resetData } from '@/utils/storage';
import Image from 'next/image';

export default function Header() {
  const { generateNewMatchup } = useParks();
  
  const handleReset = () => {
    if (window.confirm('Are you sure you want to reset all rankings and votes? This cannot be undone.')) {
      resetData();
      window.location.reload();
    }
  };

  return (
    <header className="bg-gradient-to-r from-green-600 to-blue-600 text-white p-6 shadow-md" role="banner">
      <div className="container mx-auto flex flex-col md:flex-row justify-between items-center">
        <div className="flex items-center">
          <Image 
            src="/globe.svg" 
            alt="Indonesian National Parks Logo" 
            width={48} 
            height={48} 
            className="mr-3"
            priority
          />
          <div>
            <h1 className="text-3xl font-bold">
              <span className="sr-only">Indonesian National Parks Ranking</span>
              <span aria-hidden="true">Indonesian National Parks</span>
            </h1>
            <p className="text-green-100">Vote for your favorites and see how they rank!</p>
          </div>
        </div>
        
        <nav className="flex mt-4 md:mt-0 space-x-4" aria-label="Main navigation">
          <button
            onClick={generateNewMatchup}
            className="bg-white text-green-700 hover:bg-green-100 px-4 py-2 rounded-md transition-colors focus:outline-none focus:ring-2 focus:ring-white focus:ring-offset-2 focus:ring-offset-green-600"
            aria-label="Generate new matchup"
          >
            New Matchup
          </button>
          
          <button
            onClick={handleReset}
            className="bg-red-600 hover:bg-red-700 text-white px-4 py-2 rounded-md transition-colors focus:outline-none focus:ring-2 focus:ring-white focus:ring-offset-2 focus:ring-offset-red-600"
            aria-label="Reset all data"
          >
            Reset Data
          </button>
        </nav>
      </div>
    </header>
  );
}
