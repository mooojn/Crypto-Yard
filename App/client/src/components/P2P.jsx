import logo from './assets/logo_only.png'
import logoText from './assets/logo_text.png'
import jazz from './assets/jazzz.jpeg'

import Preloader from './small_components/PreLoader'
import Header from './small_components/Header';

import './styles/P2P.css'

function P2P() {

    return (
        <>
            <body>
            <Preloader />
                <Header />

                    <div className="link3">
                        <a href="\fast-trade"><div className="fasttade3">Fast Trade</div> </a>
                        <div className="p2p3">P2P</div>
                        <a href="\create-offer"><div className="create3">Create Offer</div> </a>
                    </div>
                    <div className="headstext3">
                        <p>
                            Buy/Sell with <span style={{color: '#04bb56'}}> Zero Fees</span> on the Peer to Peer (P2P) Marketplace</p>
                    </div>
                    <div className="explaination3">
                        <p id="buytext" className="explain3">Buy USDT using PKR at the best prices, no matter your location. Choose from
                            a variety of flexible payment methods, including credit and debit cards, bank transfers, and more. P2P
                            trading on CryptoYard is both secure and free.</p>
                        <p id="selltext" className="explain3" style={{display: 'none'}}>Sell USDT and cash out in PKR at the best prices,
                            wherever you may be in the world. Choose from a variety of flexible payment methods, including credit
                            and debit cards, bank transfers, and more. P2P trading on CrytpoYard is both secure and free.</p>
                    </div>

                    <div className="link3 linkv2">
                        <div id="buyButton" className="p2p3">Buy</div>
                        <div id="sellButton" className="create3">Sell</div>
                    </div>
                    <div className="offers3">
                        <div className="offer3">
                            <div className="data3">
                                <div className="sellername3">XD GAMING</div>
                                <div className="pricedollar3">
                                    <p><span style={{color: '#e9e9e9'}}>280</span> PKR</p>
                                </div>
                                <div className="Availble3">Available :<span >
                                    55.891225</span> USDT</div>
                                <div className="Orders3 Limit">Order Limit :
                                    <span>15,700 - 10,000,000</span> PKR
                                </div>
                                <div className="paymentsmethod3">
                                    <img src={jazz} alt="" />
                                </div>
                            </div>
                            <div className="buysellbutton3">Buy</div>
                        </div>
                    </div>




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
            var buyButton = document.getElementById('buyButton');
var sellButton = document.getElementById('sellButton');
var buytext = document.getElementById('buytext');
var selltext = document.getElementById('selltext');
var buttons = document.querySelectorAll('.buysellbutton'); // Add '.' to select by className

buyButton3.addEventListener('click', function () {
    buyButton.style.borderBottom = '4px solid #04d963';
    sellButton.style.borderBottom = 'none';
    buytext.style.display = 'block';
    selltext.style.display = 'none';

    buttons.forEach(function (button) {
        button.innerHTML = 'Buy';
        button.style.backgroundColor = '#04d963';
    });
});

sellButton.addEventListener('click', function () {
    sellButton.style.borderBottom = '4px solid #04d963';
    buyButton.style.borderBottom = 'none';
    buytext.style.display = 'none';
    selltext.style.display = 'block';

    buttons.forEach(function (button) {
        button.innerHTML = 'Sell';
        button.style.backgroundColor = 'red';
    });
});

        </script> */}
            </body>

        </>
    );
}

export default P2P;