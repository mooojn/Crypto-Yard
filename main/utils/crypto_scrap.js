// loading modules
const axios = require('axios');
const cheerio = require('cheerio');
const { Console } = require('console');
const fs = require('fs');
let prices = [];
// scraping function
async function get_info(url) 
{
    const response = await axios.get(url);
    const $ = cheerio.load(response.data);

    const name = $("span.sc-f70bb44c-0.jltoa").text();
    const price = $("span.sc-f70bb44c-0.jxpCgO.base-text").text();

    prices.push(price);
}
// urls to scrape
const urls =
[
    "https://coinmarketcap.com/currencies/bitcoin/",
    "https://coinmarketcap.com/currencies/ethereum/",
    "https://coinmarketcap.com/currencies/tether/",
    "https://coinmarketcap.com/currencies/dogecoin/"
];
// Export a function that returns a Promise
module.exports = async function() {
    for (const url of urls) {
        await get_info(url);
    }
    return prices;
};