# Indonesian National Parks Ranking

![Indonesian National Parks](https://upload.wikimedia.org/wikipedia/commons/thumb/0/09/Pulau_Padar_adalah_pulau_ketiga_terbesar_di_kawasan_Taman_Nasional_Komodo%2C_setelah_Pulau_Komodo_dan_Pulau_Rinca.jpg/330px-Pulau_Padar_adalah_pulau_ketiga_terbesar_di_kawasan_Taman_Nasional_Komodo%2C_setelah_Pulau_Komodo_dan_Pulau_Rinca.jpg)

## About This Project

This project is an implementation of the [Vibe Coding 101 with Replit](https://learn.deeplearning.ai/courses/vibe-coding-101-with-replit/) course by DeepLearning.AI. It showcases the integration of MongoDB with a Next.js application, demonstrating how to build a full-stack web application with persistent data storage.

The Indonesian National Parks Ranking application allows users to:

- Vote on their favorite Indonesian National Parks in head-to-head matchups
- View rankings of parks based on the ELO rating system (similar to chess rankings)
- See recent voting history
- Learn about Indonesia's diverse national parks and their unique features

## Features

- **MongoDB Integration**: Persistent data storage for park information and voting history
- **ELO Rating System**: Fair ranking algorithm that adjusts based on voting outcomes
- **Responsive Design**: Works on desktop and mobile devices
- **Indonesian National Parks Database**: Contains information on 57 national parks in Indonesia
- **Real-time Updates**: Rankings update immediately after voting

## Technologies Used

- **Frontend**: Next.js, React, TailwindCSS
- **Backend**: Next.js API Routes
- **Database**: MongoDB with Mongoose
- **Deployment**: Vercel
- **Data Sourcing**: Wikipedia data on Indonesian National Parks

## Getting Started

### Prerequisites

- Node.js 18.x or later
- MongoDB (local installation or MongoDB Atlas)
- Docker and Docker Compose (optional, for local MongoDB setup)

### Installation

1. Clone the repository:

   ```bash
   git clone https://github.com/emhaihsan/national-parks-ranking.git
   cd national-parks-ranking
   ```

2. Install dependencies:

   ```bash
   npm install
   ```

3. Set up the database:

   ```bash
   # Option 1: Using Docker
   ./start-db.sh

   # Option 2: Using your own MongoDB instance
   # Create a .env.local file with your MongoDB connection string:
   # MONGODB_URI=mongodb://your-connection-string
   ```

4. Run the development server:

   ```bash
   npm run dev
   ```

5. Open [http://localhost:3000](http://localhost:3000) with your browser to see the application.

## Learn More

This project was created as part of the [Vibe Coding 101 with Replit](https://learn.deeplearning.ai/courses/vibe-coding-101-with-replit/) course by DeepLearning.AI. The course teaches how to build applications with AI assistance using Replit's Vibe Coding feature.

To learn more about the technologies used:

- [Next.js Documentation](https://nextjs.org/docs)
- [MongoDB Documentation](https://docs.mongodb.com/)
- [Mongoose Documentation](https://mongoosejs.com/docs/)
- [TailwindCSS Documentation](https://tailwindcss.com/docs)

## Acknowledgements

- Data sourced from [Wikipedia's List of National Parks of Indonesia](https://id.wikipedia.org/wiki/Daftar_taman_nasional_di_Indonesia)
- ELO Rating System based on [Wikipedia's ELO Rating System](https://en.wikipedia.org/wiki/Elo_rating_system)
- Course materials from [DeepLearning.AI](https://www.deeplearning.ai/) and [Replit](https://replit.com/)

## License

This project is open source and available under the [MIT License](LICENSE).
