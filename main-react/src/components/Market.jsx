import logo from './assets/logo_only.png'
import logoText from './assets/logo_text.png'
import a4 from "./assets/Trending.png"
import a5 from "./assets/bitcoin1.png"
import a6 from "./assets/litecoin.png"
import a7 from "./assets/bitcoin1.png"
import a8 from "./assets/Up.png"
import a9 from "./assets/bitcoin1.png"
import a10 from "./assets/litecoin.png"
import a11 from "./assets/bitcoin1.png"
import a12 from "./assets/Down.png"
import a13 from "./assets/bitcoin1.png"
import a14 from "./assets/litecoin.png"
import a15 from "./assets/bitcoin1.png"
import a16 from "./assets/bitcoin1.png"
import a17 from "./assets/eth.png"
import a18 from "./assets/XRP.png"
import a19 from "./assets/USDT.png"
import a20 from "./assets/Doge.png"


import Preloader from './small_components/PreLoader'
import Header from './small_components/Header'


import "./styles/Market.css"

function market() {

    return(

        <>
        <body>

        <Preloader />
        <Header />
        <div class="overviewhead">Market Overview</div>

        <div class="swiper-container">
            <div class="swiper-wrapper">
 

                <div class="swiper-slide">
                    <div class="marketoverviews">
                        <div class="overviewtop">
                            <div class="type">
                                <div class="over_icon"><img src={a4} alt="" /></div>
                                <div class="over_text">Trending</div>
                            </div>
                            <div class="over_change">Change</div>
                        </div>
                        <div class="overviewdata">
                            <div class="serial">1</div>
                            <div class="over_image"><img src={a5} alt="" /></div>
                            <div class="over-name">Bitcoin</div>
                            <div class="over_rate">$<span class="price">200</span></div>
                            <div class="over_percentage"><span class="percentage">20</span>%</div>
                        </div>
                        <div class="overviewdata">
                            <div class="serial">2</div>
                            <div class="over_image"><img src={a6} alt="" /></div>
                            <div class="over-name">Litecoin</div>
                            <div class="over_rate">$<span class="price">300</span></div>
                            <div class="over_percentage"><span class="percentage">43</span>%</div>
                        </div>
                        <div class="overviewdata">
                            <div class="serial">3</div>
                            <div class="over_image"><img src={a7} alt="" /></div>
                            <div class="over-name">XRP</div>
                            <div class="over_rate">$<span class="price">2787</span></div>
                            <div class="over_percentage"><span class="percentage">2</span>%</div>
                        </div>
                    </div>
                    
                </div>
        
                
                <div class="swiper-slide">
                    <div class="marketoverviews">
                        <div class="overviewtop">
                            <div class="type">
                                <div class="over_icon"><img src={a8} alt="" /></div>
                                <div class="over_text">Top Gainers</div>
                            </div>
                            <div class="over_change">Change</div>
                        </div>
                        <div class="overviewdata">
                            <div class="serial">1</div>
                            <div class="over_image"><img src={a9} alt="" /></div>
                            <div class="over-name">Bitcoin</div>
                            <div class="over_rate">$<span class="price">200</span></div>
                            <div class="over_percentage"><span class="percentage">20</span>%</div>
                        </div>
                        <div class="overviewdata">
                            <div class="serial">2</div>
                            <div class="over_image"><img src={a10} alt="" /></div>
                            <div class="over-name">Litecoin</div>
                            <div class="over_rate">$<span class="price">300</span></div>
                            <div class="over_percentage"><span class="percentage">43</span>%</div>
                        </div>
                        <div class="overviewdata">
                            <div class="serial">3</div>
                            <div class="over_image"><img src={a11} alt="" /></div>
                            <div class="over-name">XRP</div>
                            <div class="over_rate">$<span class="price">2787</span></div>
                            <div class="over_percentage"><span class="percentage">2</span>%</div>
                        </div>
                    </div>
                    
                </div>
        
    
                <div class="swiper-slide">
                    <div class="marketoverviews">
                        <div class="overviewtop">
                            <div class="type">
                                <div class="over_icon"><img src={a12} alt="" /></div>
                                <div class="over_text">Top Losers</div>
                            </div>
                            <div class="over_change">Change</div>
                        </div>
                        <div class="overviewdata">
                            <div class="serial">1</div>
                            <div class="over_image"><img src={a13} alt="" /></div>
                            <div class="over-name">Bitcoin</div>
                            <div class="over_rate">$<span class="price">200</span></div>
                            <div class="over_percentage"><span class="percentage">20</span>%</div>
                        </div>
                        <div class="overviewdata">
                            <div class="serial">2</div>
                            <div class="over_image"><img src={a14} alt="" /></div>
                            <div class="over-name">Litecoin</div>
                            <div class="over_rate">$<span class="price">300</span></div>
                            <div class="over_percentage"><span class="percentage">43</span>%</div>
                        </div>
                        <div class="overviewdata">
                            <div class="serial">3</div>
                            <div class="over_image"><img src={a15} alt="" /></div>
                            <div class="over-name">XRP</div>
                            <div class="over_rate">$<span class="price">2787</span></div>
                            <div class="over_percentage"><span class="percentage">2</span>%</div>
                        </div>
                    </div>
                    
                </div>
            </div>
        </div>
        <div class="overviewhead">CrytpoYard Market Watch</div>
        <div class="explain">Find promising coins and great opportunities!</div>
        <div class="coinsheader">
            <div class="Products">Products</div>
            <div class="Price">Price</div>
            <div class="Change">Change</div>
            <div class="action" style={{color: '#fff' , fontSize: '20px'}}>Action</div>
        </div>
        <div class="coins">
            <div class="individualcoin">
                <div class="coinname">
                    <div class="iconcoin"><img src={a16} alt="" /></div>
                    <div class="names">
                        <div class="symbol">BTC</div>
                        <div class="coin">Bitcoin</div>
                    </div>
                </div>
                <div class="coinprice">$<span class="price">200</span></div>
                <div class="coinpercentage"><span class="percentage">20</span>%</div>
                <div class="action">
                    <div class="details">Details</div>
                    <div class="trades">Trades</div>
                </div>
            </div>
            <div class="individualcoin">
                <div class="coinname">
                    <div class="iconcoin"><img src={a17} alt="" /></div>
                    <div class="names">
                        <div class="symbol">ETH</div>
                        <div class="coin">Ethereum</div>
                    </div>
                </div>
                <div class="coinprice">$<span class="price">254500</span></div>
                <div class="coinpercentage"><span class="percentage">2</span>%</div>
                <div class="action">
                    <div class="details">Details</div>
                    <div class="trades">Trades</div>
                </div>
            </div>
            <div class="individualcoin">
                <div class="coinname">
                    <div class="iconcoin"><img src={a18} alt="" /></div>
                    <div class="names">
                        <div class="symbol">XRP</div>
                        <div class="coin">XRP</div>
                    </div>
                </div>
                <div class="coinprice">$<span class="price">230</span></div>
                <div class="coinpercentage"><span class="percentage">10</span>%</div>
                <div class="action">
                    <div class="details">Details</div>
                    <div class="trades">Trades</div>
                </div>
            </div>
            <div class="individualcoin">
                <div class="coinname">
                    <div class="iconcoin"><img src={a19} alt="" /></div>
                    <div class="names">
                        <div class="symbol">USDT</div>
                        <div class="coin">USD Tether</div>
                    </div>
                </div>
                <div class="coinprice">$<span class="price">1</span></div>
                <div class="coinpercentage"><span class="percentage">20</span>%</div>
                <div class="action">
                    <div class="details">Details</div>
                    <div class="trades">Trades</div>
                </div>
            </div>
            <div class="individualcoin">
                <div class="coinname">
                    <div class="iconcoin"><img src={a20} alt="" /></div>
                    <div class="names">
                        <div class="symbol">Doge</div>
                        <div class="coin">Dogecoin</div>
                    </div>
                </div>
                <div class="coinprice">$<span class="price">0.0043</span></div>
                <div class="coinpercentage"><span class="percentage">4</span>%</div>
                <div class="action">
                    <div class="details">Details</div>
                    <div class="trades">Trades</div>
                </div>
            </div>
        </div>







{/* 


    <script src="https://unpkg.com/swiper/swiper-bundle.min.js"></script>
    <script>
        //  Pre loader 
        window.addEventListener("load", function () {
            var preloader = document.getElementById("preloader");
            preloader.classList.add("fade-out");
            setTimeout(function () {
                preloader.style.display = "none";
            }, 1000);
        });

        var swiper = new Swiper('.swiper-container', {
            slidesPerView: 1,
            spaceBetween: 10,
            autoplay: {
            delay: 5000, 
        },
        loop: true,
            loop: true,
            navigation: {
                nextEl: '.swiper-button-next',
                prevEl: '.swiper-button-prev',
            },
            pagination: {
                el: '.swiper-pagination',
                clickable: true,
            },

            breakpoints: {
                768: {
                    slidesPerView: 1,
                    spaceBetween: 10,
                },
                1024: {
                    slidesPerView: 2,
                    spaceBetween: 40,
                },
                2000: {
                    slidesPerView: 3,
                    spaceBetween: 60,
                },
            },
        });
    </script> */}
</body>
        </>
    );
}

export default market;