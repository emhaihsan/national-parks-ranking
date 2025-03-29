import React from 'react';

export default function Footer() {
  const currentYear = new Date().getFullYear();
  
  return (
    <footer className="bg-gray-800 text-gray-300 p-6 mt-12" role="contentinfo">
      <div className="container mx-auto">
        <div className="flex flex-col md:flex-row justify-between items-center">
          <div className="mb-4 md:mb-0">
            <p className="text-sm">
              {currentYear} Indonesian National Parks Ranking
            </p>
            <p className="text-xs text-gray-400 mt-1">
              All park information is for educational purposes only.
            </p>
          </div>
          
          <nav aria-label="Footer navigation">
            <ul className="flex space-x-4">
              <li>
                <a 
                  href="https://id.wikipedia.org/wiki/Daftar_taman_nasional_di_Indonesia" 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="text-sm hover:text-white transition-colors focus:outline-none focus:underline"
                  aria-label="View Indonesian National Parks on Wikipedia"
                >
                  Wikipedia Source
                </a>
              </li>
              <li>
                <a 
                  href="https://en.wikipedia.org/wiki/Elo_rating_system" 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="text-sm hover:text-white transition-colors focus:outline-none focus:underline"
                  aria-label="Learn about the ELO Rating System"
                >
                  About ELO Rating
                </a>
              </li>
              <li>
                <a 
                  href="https://github.com/emhaihsan/national-parks-ranking" 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="text-sm hover:text-white transition-colors focus:outline-none focus:underline"
                  aria-label="View source code on GitHub"
                >
                  GitHub
                </a>
              </li>
            </ul>
          </nav>
        </div>
        
        <div className="mt-6 pt-6 border-t border-gray-700 text-xs text-gray-500 text-center">
          <p>
            Taman Nasional Indonesia - Melestarikan keanekaragaman hayati dan keindahan alam Indonesia untuk generasi mendatang.
          </p>
        </div>
      </div>
    </footer>
  );
}
