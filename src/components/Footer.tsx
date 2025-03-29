import React from 'react';

export default function Footer() {
  return (
    <footer className="bg-gray-800 text-gray-300 p-6 mt-12">
      <div className="container mx-auto">
        <div className="flex flex-col md:flex-row justify-between items-center">
          <div className="mb-4 md:mb-0">
            <p className="text-sm">
              © {new Date().getFullYear()} Indonesian National Parks Ranking
            </p>
            <p className="text-xs text-gray-400 mt-1">
              All park information is for educational purposes only.
            </p>
          </div>
          
          <div className="flex space-x-4">
            <a 
              href="https://en.wikipedia.org/wiki/List_of_national_parks_of_Indonesia" 
              target="_blank" 
              rel="noopener noreferrer"
              className="text-sm hover:text-white transition-colors"
            >
              Wikipedia Source
            </a>
            <a 
              href="https://en.wikipedia.org/wiki/Elo_rating_system" 
              target="_blank" 
              rel="noopener noreferrer"
              className="text-sm hover:text-white transition-colors"
            >
              About ELO Rating
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
}
