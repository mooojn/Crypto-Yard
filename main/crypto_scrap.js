// loading modules
const axios = require('axios');
const cheerio = require('cheerio');
const fs = require('fs');
let data = "";
// scraping function
async function get_info(url) 
{
    const response = await axios.get(url);
    const $ = cheerio.load(response.data);

    const name = $("span.sc-f70bb44c-0.jltoa").text();
    const price = $("span.sc-f70bb44c-0.jxpCgO.base-text").text();

    data += `${name},${price}\n`;
}
// urls to scrape
const urls =
[
    "https://coinmarketcap.com/currencies/bitcoin/",
    "https://coinmarketcap.com/currencies/ethereum/",
    "https://coinmarketcap.com/currencies/tether/",
    "https://coinmarketcap.com/currencies/dogecoin/"
];
// loop through urls and getting info
(async function() 
{
    for (const url of urls) 
    {
        await get_info(url);
    }
    fs.writeFileSync("crypto_prices.txt", data);
})();