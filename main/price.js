const fs = require('fs');

// Read the file
let btc;
const data = fs.readFileSync('crypto_prices.txt', 'utf8');

// Split the file into lines
const lines = data.split('\n');

// Regular expression to match everything after the dollar symbol
const regex = /\$(.*)/;

// Loop over each line
for (const line of lines) {
    // Find the match
    const match = line.match(regex);

    // If a match was found, log it
    // if (match) {
    //     console.log(match[1]); // Outputs: 52216.37, 2899.38, 0.9999, 0.08631, etc.
    // }
    if (match)
    {

        btc = match[1];
        break;
    }
}
module.exports = btc;