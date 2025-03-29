/**
 * ELO Rating System for National Parks Voting
 * 
 * This implementation is based on the chess ELO rating system
 * but adapted for the purpose of ranking national parks based on user votes.
 */

// K-factor determines how much impact each match has on the ratings
const K_FACTOR = 32;

/**
 * Calculate the expected score (win probability) for a player
 * @param ratingA - Rating of player A
 * @param ratingB - Rating of player B
 * @returns Expected score for player A (between 0 and 1)
 */
export function getExpectedScore(ratingA: number, ratingB: number): number {
  return 1 / (1 + Math.pow(10, (ratingB - ratingA) / 400));
}

/**
 * Calculate the new ELO rating after a match
 * @param currentRating - Current rating of the player
 * @param expectedScore - Expected score for the player
 * @param actualScore - Actual score (1 for win, 0 for loss, 0.5 for draw)
 * @returns New rating for the player
 */
export function calculateNewRating(
  currentRating: number,
  expectedScore: number,
  actualScore: number
): number {
  return Math.round(currentRating + K_FACTOR * (actualScore - expectedScore));
}

/**
 * Update ratings for two parks after a head-to-head vote
 * @param winnerRating - Current rating of the winner
 * @param loserRating - Current rating of the loser
 * @returns Object containing the new ratings for both parks
 */
export function updateRatings(winnerRating: number, loserRating: number): { winnerNewRating: number; loserNewRating: number } {
  const winnerExpectedScore = getExpectedScore(winnerRating, loserRating);
  const loserExpectedScore = getExpectedScore(loserRating, winnerRating);
  
  const winnerNewRating = calculateNewRating(winnerRating, winnerExpectedScore, 1);
  const loserNewRating = calculateNewRating(loserRating, loserExpectedScore, 0);
  
  return { winnerNewRating, loserNewRating };
}
