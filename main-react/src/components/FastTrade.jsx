import logo from './assets/logo_only.png';
import logoText from './assets/logo_text.png';
import jazzCashPng from './assets/Jazzcash.png';
import jazzPng from './assets/jazz.jpeg';
import img1 from './assets/img-1.png';

import Preloader from './small_components/PreLoader';
import Header from './small_components/Header';


import './styles/FastTrade.css';
function FastTrade() {
    return (
        <body>
            <Preloader />
            <Header />
            
                <div className="link5">
                    <div className="fasttade5">Fast Trade</div>
                    <div className="p2p5">P2P</div>
                    <div className="p2p5">Create Offer</div>
                </div>
                <div className="main5">
                    <div className="textside5">
                        <div id="headong" className="fasthead5">Buy Crytpo Instantly</div>
                        <div className="p5"><span id="buy">Buy</span> Bitcoin and other 4 currenices on CryptoYard with the help of Jazzcash payment transfer</div>
                        <div className="acceptedmethods5">
                            Accepted payment methods:
                        </div>
                        <div className="imagespay5">
                            <img src={jazzCashPng} alt="" />
                        </div>
                    </div>
                    <div className="table5">
                        <div className="buysellsection5">
                            <div className="buysell5">
                                <div id="buyButton" className="buy5">
                                    <div>Buy</div>
                                </div>
                                <div id="sellButton" className="sell5">
                                    <div>Sell</div>
                                </div>
                            </div>
                            <div className="avail5">
                                <div>I want to spend</div>
                            </div>
                            <div className="input5-sep">
                                <span className="custom5-placeholder">USDT</span>
                                <input className="inputss5" placeholder="Price" type="number" name="" id="priceInput" maxLength="10" />
                                <div className="customarrows5">
                                    <i className="fa-solid fa-caret-up"></i>
                                    <i className="fa-solid fa-caret-down"></i>
                                </div>
                            </div>
                            <div className="avail5">
                                <div>I will Recieve</div>
                            </div>
                            <div className="input5-sep">
                                <span className="custom5-placeholder jazz">BTC</span>
                                <input className="inputss5" placeholder="Quantity" type="number" name="" id="" maxLength="10" />
                                <div className="customarrows5">
                                    <i className="fa-solid fa-caret-up"></i>
                                    <i className="fa-solid fa-caret-down"></i>
                                </div>
                            </div>
                            <div className="avail5">
                                <div id="currency">Pay With</div>
                            </div>
                            <div className="input5-sep">
                                <span className="custom5-placeholder"><img className="img5" src={jazzPng} alt="" />
                                    <img className="card5" src={img1} alt="" /></span>
                                <input className="inputss5" placeholder="Jazz Cash" type="number" name="" id="" maxLength="10" readOnly />
                            </div>
                            <div><p id="test5">1 <span style={{ color: '#04bb56' }}>USDT</span> = 1.05 <span style={{ color: '#04bb56' }}>USD</span></p></div>
                            <div id="confirm" className="confirm5">
                                Buy BTC
                            </div>
                        </div>
                    </div>
                </div>
        </body>
    );
}

export default FastTrade;

{/* <!--               scripts    -->
        <script src="https://cdn.jsdelivr.net/npm/swiper@11/swiper-bundle.min.js"></script>
        <script>
            //  Pre loader 
            window.addEventListener("load", function () {
                var preloader = document.getElementById("preloader");
                preloader.classList.add("fade-out");
                setTimeout(function () {
                    preloader.style.display = "none";
                }, 1000);
            });

            document.addEventListener("DOMContentLoaded", function () {
    var buyButton = document.getElementById("buyButton");
    var sellButton = document.getElementById("sellButton");
    var currency = document.getElementById("currency");
    var confirmButton = document.getElementById("confirm");
    var head=document.getElementById("headong");
    var buy=document.getElementById("buy");

    buyButton.addEventListener("click", function () {
        // Reset color for both buttons
        buyButton.style.backgroundColor = "";
        sellButton.style.backgroundColor = "";
        buyButton.style.backgroundColor = "green";
        confirmButton.style.backgroundColor = "green";
        currency.innerHTML = "Pay With";
        head.innerHTML="Buy Crytpo Instantly";
        confirmButton.innerHTML = "Buy BTC";
        buy.innerHTML="Buy";
    });

    sellButton.addEventListener("click", function () {
        // Reset color for both buttons
        buyButton.style.backgroundColor = "#141414";
        sellButton.style.backgroundColor = "";
        currency.innerHTML = "Get Payed";
        confirmButton.innerHTML = "Sell BTC";
        confirmButton.style.backgroundColor = "red";
        sellButton.style.backgroundColor = "red";
        head.innerHTML="Sell Crytpo Instantly";
        buy.innerHTML="Sell";
    });
});
        </script> */}