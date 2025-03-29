import mongoose, { Schema, Document } from 'mongoose';

// Interface for Vote document
export interface IVote extends Document {
  winnerId: string;
  loserId: string;
  winnerElo: number;
  loserElo: number;
  eloChange: number;
  createdAt: Date;
}

// Schema for Vote
const VoteSchema: Schema = new Schema({
  winnerId: { type: String, required: true, index: true },
  loserId: { type: String, required: true, index: true },
  winnerElo: { type: Number, required: true },
  loserElo: { type: Number, required: true },
  eloChange: { type: Number, required: true },
  createdAt: { type: Date, default: Date.now }
}, {
  timestamps: true
});

// Create or get the Vote model
export default mongoose.models.Vote || mongoose.model<IVote>('Vote', VoteSchema);
