import React from 'react';
import Image from 'next/image';
import { Park } from '@/data/parks';

interface ParkCardProps {
  park: Park;
  onVote?: () => void;
  showVoteButton?: boolean;
}

export default function ParkCard({ park, onVote, showVoteButton = false }: ParkCardProps) {
  return (
    <div className="bg-white dark:bg-gray-800 rounded-lg overflow-hidden shadow-lg transition-all hover:shadow-xl">
      <div className="relative h-48 w-full">
        <Image
          src={park.imageUrl}
          alt={park.name}
          fill
          className="object-cover"
          sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
          priority
        />
      </div>
      <div className="p-4">
        <h3 className="text-xl font-bold mb-1 text-gray-900 dark:text-white">{park.name}</h3>
        <p className="text-sm text-gray-600 dark:text-gray-300 mb-2">{park.location}</p>
        <div className="flex justify-between text-xs text-gray-500 dark:text-gray-400 mb-3">
          <span>Est. {park.established}</span>
          <span>{park.area}</span>
        </div>
        <p className="text-sm text-gray-700 dark:text-gray-300 mb-4 line-clamp-3">{park.description}</p>
        
        <div className="flex justify-between items-center">
          <div className="bg-blue-100 dark:bg-blue-900 px-2 py-1 rounded text-blue-800 dark:text-blue-200">
            ELO: {park.elo}
          </div>
          
          {showVoteButton && onVote && (
            <button
              onClick={onVote}
              className="bg-green-500 hover:bg-green-600 text-white px-4 py-2 rounded-md transition-colors"
            >
              Vote for this park
            </button>
          )}
        </div>
      </div>
    </div>
  );
}
