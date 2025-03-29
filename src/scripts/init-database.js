/**
 * Script to initialize the database with park data
 */

require('dotenv').config();
const mongoose = require('mongoose');
const fs = require('fs');
const path = require('path');

// MongoDB connection string
const MONGODB_URI = process.env.MONGODB_URI || 'mongodb://localhost:27017/national-parks-ranking';

// Park schema
const ParkSchema = new mongoose.Schema({
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

// Create Park model
const Park = mongoose.model('Park', ParkSchema);

// Function to initialize the database
async function initDatabase() {
  try {
    console.log('Connecting to MongoDB...');
    await mongoose.connect(MONGODB_URI);
    console.log('Connected to MongoDB');
    
    // Read park data from the TypeScript file
    const parksFilePath = path.join(__dirname, '..', 'data', 'parks.ts');
    const parksFileContent = fs.readFileSync(parksFilePath, 'utf8');
    
    // Extract the parks array using regex
    const parksMatch = parksFileContent.match(/export const parks: Park\[\] = (\[[\s\S]*\]);/);
    if (!parksMatch) {
      throw new Error('Could not find parks array in the file');
    }
    
    // Parse the parks array
    const parksJson = parksMatch[1];
    const parks = JSON.parse(parksJson);
    
    console.log(`Found ${parks.length} parks in the data file`);
    
    // Check if parks collection is empty
    const existingParksCount = await Park.countDocuments();
    
    if (existingParksCount > 0) {
      console.log(`Database already contains ${existingParksCount} parks`);
      
      // Update existing parks
      console.log('Updating existing parks...');
      
      for (const park of parks) {
        await Park.findOneAndUpdate(
          { id: park.id },
          park,
          { upsert: true, new: true }
        );
      }
      
      console.log('Parks updated successfully');
    } else {
      // Insert all parks
      console.log('Inserting parks into database...');
      await Park.insertMany(parks);
      console.log('Parks inserted successfully');
    }
    
    // Verify the data
    const dbParksCount = await Park.countDocuments();
    console.log(`Database now contains ${dbParksCount} parks`);
    
    // Disconnect from MongoDB
    await mongoose.disconnect();
    console.log('Disconnected from MongoDB');
    
  } catch (error) {
    console.error('Error initializing database:', error);
    
    // Ensure we disconnect even if there's an error
    if (mongoose.connection.readyState !== 0) {
      await mongoose.disconnect();
      console.log('Disconnected from MongoDB due to error');
    }
  }
}

// Run the script
initDatabase();
