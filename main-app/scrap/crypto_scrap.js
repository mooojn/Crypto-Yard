const express = require('express');
const axios = require('axios');
const cheerio = require('cheerio');
const opn = require('opn'); // Use opn instead of open

const app = express();
const PORT = process.env.PORT || 3000;

// Scraping function
async function get_info(url) {
    try {
        const response = await axios.get(url);
        const $ = cheerio.load(response.data);

        const name = $("span.sc-f70bb44c-0.jltoa").text().replace(" price", "").trim();

        const price = $("span.sc-f70bb44c-0.jxpCgO.base-text").map(function() {
            const priceWithSymbols = $(this).text(); // Get the text containing symbols
            const priceWithoutSymbols = priceWithSymbols.replace(/[$,]/g, ''); // Remove commas and dollar symbols
            return priceWithoutSymbols.toString(); // Convert the number back to a string
        }).get()[0]; // Get the first element directly since we're expecting only one price

        console.log(`${name}: ${price}`);

        return { name, price }; // Return name and price as an object
    } catch (error) {
        console.error("Error scraping:", error);
        return null; // Return null if scraping fails
    }
}

// URLs to scrape
const urls = [
    "https://coinmarketcap.com/currencies/bitcoin/",
    "https://coinmarketcap.com/currencies/ethereum/",
    "https://coinmarketcap.com/currencies/xrp/",
    "https://coinmarketcap.com/currencies/tether/",
    "https://coinmarketcap.com/currencies/dogecoin/"
];

// Route to handle scraping and sending data
app.get('/scrape', async (req, res) => {
    try {
        const prices = [];

        for (const url of urls) {
            const info = await get_info(url);
            if (info) {
                prices.push(info);
            }
        }

        res.json(prices);
    } catch (error) {
        console.error("Error handling scrape request:", error);
        res.status(500).json({ error: "Internal Server Error" });
    }
});

// Start the server and open default browser
app.listen(PORT, async () => {
    console.log(`Server is running on port ${PORT}`);
    await opn(`http://localhost:${PORT}/scrape`); // Use opn instead of open
});
