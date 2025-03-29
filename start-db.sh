#!/bin/bash

# Start MongoDB with Docker Compose
echo "Starting MongoDB with Docker Compose..."
docker-compose up -d

# Wait for MongoDB to start
echo "Waiting for MongoDB to start..."
sleep 5

# Create .env.local file with MongoDB connection string
echo "Creating .env.local file..."
echo "MONGODB_URI=mongodb://localhost:27017/national-parks-ranking" > .env.local

# Initialize the database with park data
echo "Initializing database with park data..."
node src/scripts/init-database.js

echo "Database setup complete!"
echo "You can now start the application with 'npm run dev'"
