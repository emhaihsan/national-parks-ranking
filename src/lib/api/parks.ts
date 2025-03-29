/**
 * API client functions for parks
 */

import { Park } from '@/data/parks';

/**
 * Fetch all parks from the API
 */
export async function fetchParks(): Promise<Park[]> {
  try {
    const response = await fetch('/api/parks', {
      method: 'GET',
      headers: {
        'Content-Type': 'application/json',
      },
      cache: 'no-store'
    });

    if (!response.ok) {
      throw new Error(`Error fetching parks: ${response.status}`);
    }

    const data = await response.json();
    return data.parks;
  } catch (error) {
    console.error('Error fetching parks:', error);
    throw error;
  }
}

/**
 * Fetch a park by ID
 */
export async function fetchParkById(id: string): Promise<Park> {
  try {
    const response = await fetch(`/api/parks/${id}`, {
      method: 'GET',
      headers: {
        'Content-Type': 'application/json',
      },
      cache: 'no-store'
    });

    if (!response.ok) {
      throw new Error(`Error fetching park: ${response.status}`);
    }

    const data = await response.json();
    return data.park;
  } catch (error) {
    console.error(`Error fetching park ${id}:`, error);
    throw error;
  }
}

/**
 * Update a park by ID
 */
export async function updatePark(id: string, parkData: Partial<Park>): Promise<Park> {
  try {
    const response = await fetch(`/api/parks/${id}`, {
      method: 'PATCH',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(parkData),
    });

    if (!response.ok) {
      throw new Error(`Error updating park: ${response.status}`);
    }

    const data = await response.json();
    return data.park;
  } catch (error) {
    console.error(`Error updating park ${id}:`, error);
    throw error;
  }
}
