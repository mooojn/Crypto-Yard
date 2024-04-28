import logo from './assets/logo_only.png'
import logoText from './assets/logo_text.png'

import btcImg from './assets/bitcoin1.png'
import ethImg from './assets/eth.png'
import xrpImg from './assets/XRP.png'
import usdtImg from './assets/USDT.png'
import dogeImg from './assets/Doge.png'

import scoreImg from './assets/Score.png'

import Header from './small_components/Header'
import Preloader from './small_components/PreLoader'


import React, { useEffect, useState } from 'react';


import './styles/MarketDetail.css'


function MarketDetail() {

    const API_URL = `http://localhost:5056/api`;
    const [coinData, setCoinData] = useState({ Name: '', Symbol: '', Price: '', Description: '', Overview: '' });
    
    useEffect(() => {
        const urlParams = new URLSearchParams(window.location.search);
        const coinName = urlParams.get('variableName');

        fetch(API_URL +`/specificCoinInfo?Name=${coinName}`)
        .then(response => response.json())
            .then(data => {
                // Extracting the first item from the data array
                setCoinData({ Name: data.Name, Symbol: data.Symbol, Price: data.Price, Description: data.Description, Overview: data.Overview });
            })
            .catch(error => console.error('Error fetching data:', error));

        if (coinName == "Ripple"){
            document.querySelector('.coinlogo7 img').src = xrpImg;
        }else if (coinName == "Ethereum"){
            document.querySelector('.coinlogo7 img').src = ethImg;
        }else if (coinName == "Bitcoin"){
            document.querySelector('.coinlogo7 img').src = btcImg;
        }else if (coinName == "Tether"){
            document.querySelector('.coinlogo7 img').src = usdtImg;
        }else if (coinName == "Dogecoin"){
            document.querySelector('.coinlogo7 img').src = dogeImg;
        }
    }, [])

    return (
        <>
            <body>
                {/* <Preloader /> */}
                <Header />

                <div className="main7">
                    <div className="grpahside7">
                        <div className="coininfo7">
                            <div className="coin7">
                                <div className="coinlogo7"><img src={btcImg} alt="" /></div>
                                <div className="coinname7">{coinData.Name}</div>
                            </div>
                            <div className="usd7">In USD ($)</div>
                        </div>
                        <div className="priceinfo7">
                            <div className="price7">
                                <p>$<span style={{ color: '#fff' }}>{coinData.Price}</span></p>
                            </div>
                            <div className="change7">Change: 2%<p><span className="changeprice7"></span></p>
                            </div>
                        </div>
                        <div className="overview7">
                            <div className="heed7">
                                Overview
                            </div>
                            <div className="textover7">
                                <p>
                                    {coinData.Overview}</p>
                            </div>
                            <div className="heed7">About Coin</div>
                            <div className="textover7">
                                <p>
                                    {coinData.Description}
                                </p>
                            </div>
                        </div>
                    </div>
                    <div className="tradeside7">
                        <div className="box7">
                            <div className="title7">Fear & Greed Index</div>
                            <div className="line7">Note: Data is for reference only.</div>
                            <div className="image7"><img src={scoreImg} alt="" /></div>
                            <div className="texts7">
                                <div className="number7">90</div>
                                <div className="comment7">Very Good</div>
                            </div>
                        </div>
                        <div className="box7">
                            <div className="recommend7">Recommendations <i className="fas7 fa-angle-right"></i></div>
                            <div className="tradings7">
                                <div className="title7">Spot Trading</div>
                                <div className="trading7">
                                    <div className="line7">Trade {coinData.Name}/USDT</div>
                                    <div className="buttons7 line">Trade</div>
                                </div>
                                <div className="suugest7">Buy low and sell high</div>
                            </div>
                        </div>
                    </div>
                </div>
            </body>
        </>
    );
}

export default MarketDetail;