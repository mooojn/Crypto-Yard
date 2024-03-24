const express = require("express");
const hbs = require('hbs');
const getPricesOfCoins = require('./utils/crypto_scrap.js');
const app = express();

app.set('view engine', 'hbs');
app.use('/public', express.static('public'));

/// -------------------------------------------------- ROUTING  ---------------------------------------------- ///
// main page
app.get('/', async (req, res) => {
    res.render('index');
});
// asset page
app.get('/assets', async (req, res) => {
    res.render('assets');
});
// createOffer page
app.get('/offer', async (req, res) => {
    res.render('createOffer');
});
// fast trade page
app.get('/fast-trade', async (req, res) => {
    res.render('fasttrade');
});
// loan page
app.get('/loan', async (req, res) => {
    res.render('loan');
});
// login and signup page
app.get('/login-signup', async (req, res) => {
    res.render('loginsignup');
});
// market page
app.get('/market', async (req, res) => {
    res.render('market');
});
// market detail page
app.get('/market-detail', async (req, res) => {
    res.render('marketdetail');
});
// p2p page
app.get('/p2p', async (req, res) => {
    res.render('p2p');
});
// trading page
app.get('/trading', async (req, res) => {
    const prices = await getPricesOfCoins();
    res.render('trading', { btc: prices[0] });
});
// 404 page (invalid url)
app.get('*', async (req, res) => {
    // res.status(404).send("<h1>404 page not found</h1>");
    res.render('404');
});

/// ----------------------------------------------- ROUTING END ------------------------------------------------ ///
// server port
app.listen(4500, () => console.log("Server is running..."));