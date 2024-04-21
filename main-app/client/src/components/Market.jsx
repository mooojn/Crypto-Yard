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

import React, { useState, useEffect } from 'react';


import Preloader from './small_components/PreLoader'
import Header from './small_components/Header'
import Swiper from 'swiper'; // Assuming Swiper is installed



import "./styles/Market.css"

function market() {

    useEffect(() => {
        // Function to initialize Swiper
        const initializeSwiper = () => {
            new Swiper('.swiper-container', {
                slidesPerView: 1,
                spaceBetween: 10,
                autoplay: {
                    delay: 5000,
                },
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
        };

        // Initialize Swiper when the component mounts
        initializeSwiper();

        // Clean up Swiper instance when the component unmounts
        return () => {
            const swiperInstance = document.querySelector('.swiper-container').swiper;
            if (swiperInstance) {
                swiperInstance.destroy(true, true);
            }
        };
    }, []);


    // backend data
    const [btc, setBtc] = useState({ Name: '', Symbol: '', Price:'' });
    const [eth, setEth] = useState({ Name: '', Symbol: '', Price:'' });
    const [xrp, setXrp] = useState({ Name: '', Symbol: '', Price:'' });
    const [usdt, setUsdt] = useState({ Name: '', Symbol: '', Price:'' });
    const [doge, setDoge] = useState({ Name: '', Symbol: '', Price:'' });

    useEffect(() => {
        fetch('http://localhost:5056/api/coinInfo')
            .then(response => response.json())
            .then(data => {
                // Extracting the first item from the data array
                const BTC = data[0];
                const ETH = data[1];
                const XRP = data[2];
                const USDT = data[3];   
                const DOGE = data[4];
                

                setBtc({ Name: BTC.Name, Symbol: BTC.Symbol, Price: BTC.Amount });
                setEth({ Name: ETH.Name, Symbol: ETH.Symbol, Price: ETH.Amount });
                setXrp({ Name: XRP.Name, Symbol: XRP.Symbol, Price: XRP.Amount });
                setUsdt({ Name: USDT.Name, Symbol: USDT.Symbol, Price: USDT.Amount });
                setDoge({ Name: DOGE.Name, Symbol: DOGE.Symbol, Price: DOGE.Amount });
            })
            .catch(error => console.error('Error fetching data:', error));
    }, []);

    // main app
    return (

        <>
            <body>

                <Preloader />
                <Header />
                <div className="overviewhead9">Market Overview</div>

                <div className="swiper-container">
                    <div className="swiper-wrapper">


                        <div className="swiper-slide">
                            <div className="marketoverviews9">
                                <div className="overviewtop9">
                                    <div className="type9">
                                        <div className="over_icon9"><img src={a4} alt="" /></div>
                                        <div className="over_text9">Trending</div>
                                    </div>
                                    <div className="over_change9">Change</div>
                                </div>
                                <div className="overviewdata9">
                                    <div className="serial9">1</div>
                                    <div className="over_image9"><img src={a5} alt="" /></div>
                                    <div className="over9-name">Bitcoin</div>
                                    <div className="over_rate9">$<span className="price9">200</span></div>
                                    <div className="over_percentage9"><span className="percentage9">20</span>%</div>
                                </div>
                                <div className="overviewdata9">
                                    <div className="serial9">2</div>
                                    <div className="over_image9"><img src={a6} alt="" /></div>
                                    <div className="over9-name">Litecoin</div>
                                    <div className="over_rate9">$<span className="price9">300</span></div>
                                    <div className="over_percentage9"><span className="percentage9">43</span>%</div>
                                </div>
                                <div className="overviewdata9">
                                    <div className="serial9">3</div>
                                    <div className="over_image9"><img src={a7} alt="" /></div>
                                    <div className="over9-name">XRP</div>
                                    <div className="over_rate9">$<span className="price9">2787</span></div>
                                    <div className="over_percentage9"><span className="percentage9">2</span>%</div>
                                </div>
                            </div>

                        </div>


                        <div className="swiper-slide">
                            <div className="marketoverviews9">
                                <div className="overviewtop9">
                                    <div className="type9">
                                        <div className="over_icon9"><img src={a8} alt="" /></div>
                                        <div className="over_text9">Top Gainers</div>
                                    </div>
                                    <div className="over_change9">Change</div>
                                </div>
                                <div className="overviewdata9">
                                    <div className="serial9">1</div>
                                    <div className="over_image9"><img src={a9} alt="" /></div>
                                    <div className="over9-name">Bitcoin</div>
                                    <div className="over_rate9">$<span className="price9">200</span></div>
                                    <div className="over_percentage9"><span className="percentage9">20</span>%</div>
                                </div>
                                <div className="overviewdata9">
                                    <div className="serial9">2</div>
                                    <div className="over_image9"><img src={a10} alt="" /></div>
                                    <div className="over9-name">Litecoin</div>
                                    <div className="over_rate9">$<span className="price9">300</span></div>
                                    <div className="over_percentage9"><span className="percentage9">43</span>%</div>
                                </div>
                                <div className="overviewdata9">
                                    <div className="serial9">3</div>
                                    <div className="over_image9"><img src={a11} alt="" /></div>
                                    <div className="over9-name">XRP</div>
                                    <div className="over_rate9">$<span className="price9">2787</span></div>
                                    <div className="over_percentage9"><span className="percentage9">2</span>%</div>
                                </div>
                            </div>

                        </div>


                        <div className="swiper-slide">
                            <div className="marketoverviews9">
                                <div className="overviewtop9">
                                    <div className="type9">
                                        <div className="over_icon9"><img src={a12} alt="" /></div>
                                        <div className="over_text9">Top Losers</div>
                                    </div>
                                    <div className="over_change9">Change</div>
                                </div>
                                <div className="overviewdata9">
                                    <div className="serial9">1</div>
                                    <div className="over_image9"><img src={a13} alt="" /></div>
                                    <div className="over9-name">Bitcoin</div>
                                    <div className="over_rate9">$<span className="price9">200</span></div>
                                    <div className="over_percentage9"><span className="percentage9">20</span>%</div>
                                </div>
                                <div className="overviewdata9">
                                    <div className="serial9">2</div>
                                    <div className="over_image9"><img src={a14} alt="" /></div>
                                    <div className="over9-name">Litecoin</div>
                                    <div className="over_rate9">$<span className="price9">300</span></div>
                                    <div className="over_percentage9"><span className="percentage9">43</span>%</div>
                                </div>
                                <div className="overviewdata9">
                                    <div className="serial9">3</div>
                                    <div className="over_image9"><img src={a15} alt="" /></div>
                                    <div className="over9-name">XRP</div>
                                    <div className="over_rate9">$<span className="price9">2787</span></div>
                                    <div className="over_percentage9"><span className="percentage9">2</span>%</div>
                                </div>
                            </div>

                        </div>
                    </div>
                </div>
                <div className="overviewhead9">CrytpoYard Market Watch</div>
                <div className="explain9">Find promising coins and great opportunities!</div>
                <div className="coinsheader9">
                    <div className="Products9">Products</div>
                    <div className="Price9">Price</div>
                    <div className="Change9">Change</div>
                    <div className="action9" style={{ color: '#fff', fontSize: '20px' }}>Action</div>
                </div>
                {/* herher */}
                <div className="coins9">
                    <div className="individualcoin9">
                        <div className="coinname9">
                            <div className="iconcoin9"><img src={a16} alt="" /></div>
                            <div className="names9">
                                <div className="symbol9">{btc.Symbol}</div>
                                <div className="coin9">{btc.Name}</div>
                            </div>
                        </div>
                        <div className="coinprice9">$<span className="price9">{btc.Price}</span></div>
                        <div className="coinpercentage9"><span className="percentage9">20</span>%</div>
                        <div className="action9">
                            <div className="details9">Details</div>
                            <div className="trades9">Trades</div>
                        </div>
                    </div>
                    <div className="individualcoin9">
                        <div className="coinname9">
                            <div className="iconcoin9"><img src={a17} alt="" /></div>
                            <div className="names9">
                                <div className="symbol9">{eth.Symbol}</div>
                                <div className="coin9">{eth.Name}</div>
                            </div>
                        </div>
                        <div className="coinprice9">$<span className="price9">{eth.Price}</span></div>
                        <div className="coinpercentage9"><span className="percentage9">2</span>%</div>
                        <div className="action9">
                            <div className="details9">Details</div>
                            <div className="trades9">Trades</div>
                        </div>
                    </div>
                    <div className="individualcoin9">
                        <div className="coinname9">
                            <div className="iconcoin9"><img src={a18} alt="" /></div>
                            <div className="names9">
                                <div className="symbol9">{xrp.Symbol}</div>
                                <div className="coin9">{xrp.Name}</div>
                            </div>
                        </div>
                        <div className="coinprice9">$<span className="price9">{xrp.Price}</span></div>
                        <div className="coinpercentage9"><span className="percentage9">10</span>%</div>
                        <div className="action9">
                            <div className="details9">Details</div>
                            <div className="trades9">Trades</div>
                        </div>
                    </div>
                    <div className="individualcoin9">
                        <div className="coinname9">
                            <div className="iconcoin9"><img src={a19} alt="" /></div>
                            <div className="names9">
                                <div className="symbol9">{usdt.Symbol}</div>
                                <div className="coin9">{usdt.Name}</div>
                            </div>
                        </div>
                        <div className="coinprice9">$<span className="price9">{usdt.Price}</span></div>
                        <div className="coinpercentage9"><span className="percentage9">20</span>%</div>
                        <div className="action9">
                            <div className="details9">Details</div>
                            <div className="trades9">Trades</div>
                        </div>
                    </div>
                    <div className="individualcoin9">
                        <div className="coinname9">
                            <div className="iconcoin9"><img src={a20} alt="" /></div>
                            <div className="names9">
                                <div className="symbol9">{doge.Symbol}</div>
                                <div className="coin9">{doge.Name}</div>
                            </div>
                        </div>
                        <div className="coinprice9">$<span className="price9">{doge.Price}</span></div>
                        <div className="coinpercentage9"><span className="percentage9">4</span>%</div>
                        <div className="action9">
                            <div className="details9">Details</div>
                            <div className="trades9">Trades</div>
                        </div>
                    </div>
                </div>
            </body>
        </>
    );
}

export default market;