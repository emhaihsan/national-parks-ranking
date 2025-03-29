/**
 * Script to fix park locations based on the Wikipedia data
 */

const fs = require('fs');
const path = require('path');
const https = require('https');
const { JSDOM } = require('jsdom');

// Function to fetch data from a URL
function fetchData(url) {
  return new Promise((resolve, reject) => {
    https.get(url, (res) => {
      let data = '';
      
      res.on('data', (chunk) => {
        data += chunk;
      });
      
      res.on('end', () => {
        resolve(data);
      });
      
    }).on('error', (err) => {
      reject(err);
    });
  });
}

// Function to fix park locations
async function fixParkLocations() {
  try {
    console.log('Fetching Indonesian National Parks data from Wikipedia...');
    
    // Read the current parks data
    const parksFilePath = path.join(__dirname, '..', 'data', 'parks.ts');
    const parksFileContent = fs.readFileSync(parksFilePath, 'utf8');
    
    // Extract the parks array using regex (simple approach)
    const parksMatch = parksFileContent.match(/export const parks: Park\[\] = (\[[\s\S]*\]);/);
    if (!parksMatch) {
      throw new Error('Could not find parks array in the file');
    }
    
    // Parse the parks array
    const parksJson = parksMatch[1];
    const parks = JSON.parse(parksJson);
    
    // Fetch the Wikipedia page
    const idWikiUrl = 'https://id.wikipedia.org/wiki/Daftar_taman_nasional_di_Indonesia';
    const idWikiData = await fetchData(idWikiUrl);
    
    // Use JSDOM to parse the HTML
    const dom = new JSDOM(idWikiData);
    const document = dom.window.document;
    
    // Find the main table containing the parks
    const tables = document.querySelectorAll('table.wikitable');
    let parksTable;
    
    // Find the table with the most rows (likely the main parks table)
    let maxRows = 0;
    tables.forEach(table => {
      const rows = table.querySelectorAll('tr');
      if (rows.length > maxRows) {
        maxRows = rows.length;
        parksTable = table;
      }
    });
    
    if (!parksTable) {
      throw new Error('Could not find the parks table on the Wikipedia page');
    }
    
    // Create a map of Wikipedia park data
    const wikiParksMap = {};
    const rows = parksTable.querySelectorAll('tr');
    
    // Skip the header row
    for (let i = 1; i < rows.length; i++) {
      const row = rows[i];
      const cells = row.querySelectorAll('td');
      
      // Skip rows with insufficient cells
      if (cells.length < 4) continue;
      
      // Extract park name and link
      const nameCell = cells[1];
      const nameLink = nameCell.querySelector('a');
      
      if (!nameLink) continue;
      
      const parkName = nameLink.textContent.trim();
      const simpleName = parkName.replace(/Taman Nasional /i, '');
      
      // Extract location (province)
      const locationCell = cells[2];
      const location = locationCell.textContent.trim();
      
      // Extract area
      const areaCell = cells[3];
      const area = areaCell.textContent.trim();
      
      // Extract established date if available
      let established = '';
      if (cells.length > 4) {
        established = cells[4].textContent.trim();
      }
      
      // Add to wiki parks map
      wikiParksMap[simpleName.toLowerCase()] = {
        name: parkName,
        location,
        area,
        established
      };
    }
    
    // Update the parks with correct location data
    const updatedParks = parks.map(park => {
      const parkName = park.name.replace(/Taman Nasional /i, '');
      const wikiPark = wikiParksMap[parkName.toLowerCase()];
      
      if (wikiPark) {
        // Check if location is a year (which indicates it's incorrect)
        const isLocationYear = /^\d{4}$/.test(park.location);
        
        if (isLocationYear || park.location === wikiPark.established) {
          // Location is incorrect, use the one from Wikipedia
          park.location = wikiPark.location;
        }
        
        // Check if established is a number without "km²" (which indicates it might be incorrect)
        const isEstablishedNumber = /^\d+$/.test(park.established);
        
        if (isEstablishedNumber && !park.established.includes('km')) {
          // Established date is incorrect, use the one from Wikipedia
          park.established = wikiPark.established;
        }
        
        // Fix area format if needed
        if (!park.area.includes('km') && !park.area.includes('ha')) {
          park.area = `${park.area} km²`;
        }
        
        // Fix description if it mentions the location as a year
        if (park.description.includes(`terletak di ${park.established}, Indonesia`)) {
          park.description = `${park.name} adalah taman nasional yang terletak di ${park.location}, Indonesia.`;
        }
      }
      
      return park;
    });
    
    // Write the updated parks data back to the file
    const updatedContent = parksFileContent.replace(
      /export const parks: Park\[\] = (\[[\s\S]*\]);/,
      `export const parks: Park[] = ${JSON.stringify(updatedParks, null, 2)};`
    );
    
    fs.writeFileSync(parksFilePath, updatedContent);
    console.log(`Successfully updated park locations and saved to ${parksFilePath}`);
    
  } catch (error) {
    console.error('Error fixing park locations:', error);
  }
}

// Run the script
fixParkLocations();
