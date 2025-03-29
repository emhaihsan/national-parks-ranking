/**
 * Script to fix park images based on the Wikipedia data
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

// Map of park names to their correct image URLs
const parkImageMap = {
  // Bali dan Nusa Tenggara
  "Bali Barat": "https://upload.wikimedia.org/wikipedia/commons/thumb/2/24/Bali_Barat_NP_2009.jpg/330px-Bali_Barat_NP_2009.jpg",
  "Gunung Rinjani": "https://upload.wikimedia.org/wikipedia/commons/thumb/c/cb/Rinjani_Caldera.jpg/330px-Rinjani_Caldera.jpg",
  "Kelimutu": "https://upload.wikimedia.org/wikipedia/commons/thumb/8/83/Kelimutu_2008-08-08.jpg/330px-Kelimutu_2008-08-08.jpg",
  "Komodo": "https://upload.wikimedia.org/wikipedia/commons/thumb/0/09/Pulau_Padar_adalah_pulau_ketiga_terbesar_di_kawasan_Taman_Nasional_Komodo%2C_setelah_Pulau_Komodo_dan_Pulau_Rinca.jpg/330px-Pulau_Padar_adalah_pulau_ketiga_terbesar_di_kawasan_Taman_Nasional_Komodo%2C_setelah_Pulau_Komodo_dan_Pulau_Rinca.jpg",
  "Laiwangi-Wanggameti": "https://upload.wikimedia.org/wikipedia/commons/thumb/f/f0/Paragomphus_tachyerges_Endemik_Pulau_Sumba.jpg/300px-Paragomphus_tachyerges_Endemik_Pulau_Sumba.jpg",
  "Manupeu-Tanah Daru": "https://upload.wikimedia.org/wikipedia/commons/thumb/8/83/Keindahan-air-terjun-Lapopu-krd-TN-Manupeu-Tanah-Daru.jpg/300px-Keindahan-air-terjun-Lapopu-krd-TN-Manupeu-Tanah-Daru.jpg",
  "Tambora": "https://upload.wikimedia.org/wikipedia/commons/thumb/b/bd/Caldera_Mt_Tambora_Sumbawa_Indonesia.jpg/330px-Caldera_Mt_Tambora_Sumbawa_Indonesia.jpg",
  "Moyo Satonda": "https://upload.wikimedia.org/wikipedia/commons/thumb/d/d3/Salt_Lake_Satonda.jpg/300px-Salt_Lake_Satonda.jpg",
  
  // Jawa
  "Alas Purwo": "https://upload.wikimedia.org/wikipedia/commons/thumb/7/78/Alas_Purwo_2005.jpg/330px-Alas_Purwo_2005.jpg",
  "Baluran": "https://upload.wikimedia.org/wikipedia/commons/thumb/1/19/Wild_Deers_near_Bama_Point%2C_Baluran.jpg/330px-Wild_Deers_near_Bama_Point%2C_Baluran.jpg",
  "Bromo Tengger Semeru": "https://upload.wikimedia.org/wikipedia/commons/thumb/a/a1/Semeru_Bromo_Temple.JPG/300px-Semeru_Bromo_Temple.JPG",
  "Gunung Ciremai": "https://upload.wikimedia.org/wikipedia/commons/thumb/8/8a/COLLECTIE_TROPENMUSEUM_Gezicht_op_een_meer_en_de_vulkaan_Cereme_oftewel_Ciremai_TMnr_60005195.jpg/330px-COLLECTIE_TROPENMUSEUM_Gezicht_op_een_meer_en_de_vulkaan_Cereme_oftewel_Ciremai_TMnr_60005195.jpg",
  "Gunung Gede Pangrango": "https://upload.wikimedia.org/wikipedia/commons/thumb/8/8a/Gunung_Gede_in_The_Clouds.jpg/300px-Gunung_Gede_in_The_Clouds.jpg",
  "Gunung Halimun-Salak": "https://upload.wikimedia.org/wikipedia/commons/thumb/4/45/COLLECTIE_TROPENMUSEUM_Gezicht_vanuit_een_droge_rotsachtige_rivierbedding_op_de_vulkaan_Salak_TMnr_60016669.jpg/330px-COLLECTIE_TROPENMUSEUM_Gezicht_vanuit_een_droge_rotsachtige_rivierbedding_op_de_vulkaan_Salak_TMnr_60016669.jpg",
  "Gunung Merapi": "https://upload.wikimedia.org/wikipedia/commons/thumb/e/ea/Blethrow_merapi1.jpg/330px-Blethrow_merapi1.jpg",
  "Gunung Merbabu": "https://upload.wikimedia.org/wikipedia/commons/thumb/f/f6/Pemandangan_Merbabu_dari_Kota_Salatiga_%281%29.jpg/330px-Pemandangan_Merbabu_dari_Kota_Salatiga_%281%29.jpg",
  "Karimunjawa": "https://upload.wikimedia.org/wikipedia/commons/thumb/d/d4/Tanjung_Gelam_-_Karimunjawa.jpg/330px-Tanjung_Gelam_-_Karimunjawa.jpg",
  "Kepulauan Seribu": "https://upload.wikimedia.org/wikipedia/commons/thumb/d/d4/Pulau_seribu.jpg/330px-Pulau_seribu.jpg",
  "Meru Betiri": "https://upload.wikimedia.org/wikipedia/commons/thumb/8/86/Beach_Bande_Alit_A.JPG/300px-Beach_Bande_Alit_A.JPG",
  "Ujung Kulon": "https://upload.wikimedia.org/wikipedia/commons/thumb/0/01/Dead_Javan_Rhino.jpg/300px-Dead_Javan_Rhino.jpg",
  
  // Kalimantan
  "Betung Kerihun": "https://upload.wikimedia.org/wikipedia/commons/thumb/a/a6/Orangutan_Pongo_pygmeus_pygmeus.jpg/330px-Orangutan_Pongo_pygmeus_pygmeus.jpg",
  "Bukit Baka Bukit Raya": "https://upload.wikimedia.org/wikipedia/id/thumb/d/dc/Pegunungan_schwaner.jpg/330px-Pegunungan_schwaner.jpg",
  "Danau Sentarum": "https://upload.wikimedia.org/wikipedia/commons/thumb/d/de/Danau_Sentarum_2006.jpg/300px-Danau_Sentarum_2006.jpg",
  "Gunung Palung": "https://upload.wikimedia.org/wikipedia/commons/thumb/8/8e/Gunung_Palung_Jungle.jpg/330px-Gunung_Palung_Jungle.jpg",
  "Kayan Mentarang": "https://upload.wikimedia.org/wikipedia/commons/thumb/0/03/Gas_Station_A.JPG/300px-Gas_Station_A.JPG",
  "Kutai": "https://upload.wikimedia.org/wikipedia/commons/thumb/e/ee/Kutai_Orangutan_2008.jpg/330px-Kutai_Orangutan_2008.jpg",
  "Sebangau": "https://upload.wikimedia.org/wikipedia/commons/thumb/c/ce/Sabangau_River.jpg/300px-Sabangau_River.jpg",
  "Tanjung Puting": "https://upload.wikimedia.org/wikipedia/commons/thumb/2/28/Win_the_Orangutang_in_Tanjung_Puting_National_Park_2005.jpg/330px-Win_the_Orangutang_in_Tanjung_Puting_National_Park_2005.jpg",
  
  // Maluku dan Papua
  "Aketajawe-Lolobata": "https://upload.wikimedia.org/wikipedia/commons/thumb/8/85/Edge_of_Aketajawe-Lolobata_National_Park.jpg/330px-Edge_of_Aketajawe-Lolobata_National_Park.jpg",
  "Lorentz": "https://upload.wikimedia.org/wikipedia/commons/thumb/3/3f/Puncakjaya.jpg/300px-Puncakjaya.jpg",
  "Manusela": "https://upload.wikimedia.org/wikipedia/commons/thumb/2/21/Taman_Nasional_Manusela.jpg/300px-Taman_Nasional_Manusela.jpg",
  "Teluk Cenderawasih": "https://upload.wikimedia.org/wikipedia/commons/thumb/1/12/Aku_dan_Alamku.jpg/300px-Aku_dan_Alamku.jpg",
  "Wasur": "https://upload.wikimedia.org/wikipedia/commons/thumb/c/c4/Wasur_Rainbow_1994.jpg/330px-Wasur_Rainbow_1994.jpg",
  
  // Sulawesi
  "Bantimurung-Bulusaraung": "https://upload.wikimedia.org/wikipedia/id/thumb/d/dd/TN_Bantimurung_Bulusaraung_nama.jpg/330px-TN_Bantimurung_Bulusaraung_nama.jpg",
  "Bogani Nani Wartabone": "https://upload.wikimedia.org/wikipedia/commons/thumb/c/ca/Hutan_Hungayono.jpg/300px-Hutan_Hungayono.jpg",
  "Bunaken": "https://upload.wikimedia.org/wikipedia/commons/thumb/6/6b/Bunaken01.JPG/300px-Bunaken01.JPG",
  "Kepulauan Togean": "https://upload.wikimedia.org/wikipedia/commons/thumb/0/02/Kadidiri%2C_morning_view_%286972093459%29.jpg/330px-Kadidiri%2C_morning_view_%286972093459%29.jpg",
  "Lore Lindu": "https://upload.wikimedia.org/wikipedia/commons/thumb/e/ee/Danau_Lindu_w_bird_2007.jpg/330px-Danau_Lindu_w_bird_2007.jpg",
  "Rawa Aopa Watumohai": "https://upload.wikimedia.org/wikipedia/commons/thumb/3/3b/Taman_Nasional_Rawa_Aopa_Watumohai.jpg/300px-Taman_Nasional_Rawa_Aopa_Watumohai.jpg",
  "Taka Bonerate": "https://upload.wikimedia.org/wikipedia/commons/thumb/d/d3/Keindahan_Taman_Nasional_Takabonerate.jpg/300px-Keindahan_Taman_Nasional_Takabonerate.jpg",
  "Wakatobi": "https://upload.wikimedia.org/wikipedia/commons/thumb/d/d9/Wakatobi_beach_2006.jpg/330px-Wakatobi_beach_2006.jpg",
  
  // Sumatra
  "Batang Gadis": "https://upload.wikimedia.org/wikipedia/commons/thumb/0/03/Sorikmarapi.jpg/300px-Sorikmarapi.jpg",
  "Berbak": "https://upload.wikimedia.org/wikipedia/commons/thumb/6/68/Berbak_National_Park_2012.jpg/300px-Berbak_National_Park_2012.jpg",
  "Bukit Barisan Selatan": "https://upload.wikimedia.org/wikipedia/commons/thumb/a/af/Bukit_barisan.jpg/330px-Bukit_barisan.jpg",
  "Bukit Duabelas": "https://upload.wikimedia.org/wikipedia/commons/thumb/a/a5/A_taxonomist_at_work.JPG/330px-A_taxonomist_at_work.JPG",
  "Bukit Tiga Puluh": "https://upload.wikimedia.org/wikipedia/commons/thumb/a/a4/FZS_Programm_Director_Peter_Pratje_working_with_orangutans_in_Bukit_Tigapulu%2C_Indonesia.jpg/300px-FZS_Programm_Director_Peter_Pratje_working_with_orangutans_in_Bukit_Tigapulu%2C_Indonesia.jpg",
  "Gunung Leuser": "https://upload.wikimedia.org/wikipedia/commons/thumb/3/3d/Gunung_Leuser_National_Park_Jungle_Life.jpg/300px-Gunung_Leuser_National_Park_Jungle_Life.jpg",
  "Kerinci Seblat": "https://upload.wikimedia.org/wikipedia/commons/thumb/6/64/Kerinci_Seblat_river.jpg/300px-Kerinci_Seblat_river.jpg"
};

// Function to normalize park name by removing "Taman Nasional" prefix
function normalizeParkName(parkName) {
  // Remove "Taman Nasional" prefix if it exists
  return parkName.replace(/^Taman Nasional /i, '');
}

// Function to fix park images
async function fixParkImages() {
  try {
    console.log('Connecting to MongoDB...');
    await mongoose.connect(MONGODB_URI);
    console.log('Connected to MongoDB');
    
    // Get all parks from the database
    const parks = await Park.find({});
    console.log(`Found ${parks.length} parks in the database`);
    
    let updatedCount = 0;
    
    // Update each park's image URL if it exists in the map
    for (const park of parks) {
      const normalizedName = normalizeParkName(park.name);
      
      if (parkImageMap[normalizedName]) {
        console.log(`Updating image for ${park.name} (normalized: ${normalizedName})`);
        park.imageUrl = parkImageMap[normalizedName];
        await park.save();
        updatedCount++;
      } else {
        console.log(`No image found for ${park.name} (normalized: ${normalizedName})`);
      }
    }
    
    console.log(`Updated images for ${updatedCount} parks`);
    
    // Disconnect from MongoDB
    await mongoose.disconnect();
    console.log('Disconnected from MongoDB');
    
  } catch (error) {
    console.error('Error fixing park images:', error);
    
    // Ensure we disconnect even if there's an error
    if (mongoose.connection.readyState !== 0) {
      await mongoose.disconnect();
      console.log('Disconnected from MongoDB due to error');
    }
  }
}

// Run the script
fixParkImages();
