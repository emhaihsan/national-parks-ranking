import mongoose, { Schema, Document } from 'mongoose';

// Interface for Park document
export interface IPark extends Document {
  id: string;
  name: string;
  location: string;
  description: string;
  imageUrl: string;
  established: string;
  area: string;
  elo: number;
  updatedAt: Date;
}

// Schema for Park
const ParkSchema: Schema = new Schema({
  id: { type: String, required: true, unique: true },
  name: { type: String, required: true },
  location: { type: String, required: true },
  description: { type: String, required: true },
  imageUrl: { type: String, required: true },
  established: { type: String, required: true },
  area: { type: String, required: true },
  elo: { type: Number, required: true, default: 1500 },
  updatedAt: { type: Date, default: Date.now }
}, {
  timestamps: true
});

// Create or get the Park model
export default mongoose.models.Park || mongoose.model<IPark>('Park', ParkSchema);
