// loading modules
const axios = require('axios');
const cheerio = require('cheerio');
// scraping function
async function get_info(url) 
{
    const response = await axios.get(url);
    const $ = cheerio.load(response.data);

    const name = $("span.sc-f70bb44c-0.jltoa").text();
    const price = $("span.sc-f70bb44c-0.jxpCgO.base-text").text();

    console.log(`${name}: ${price}`);
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
})();