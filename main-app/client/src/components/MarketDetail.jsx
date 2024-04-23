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
                <Preloader />
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
                            <div className="change7">Change:<p><span className="changeprice7">5</span>%</p>
                            </div>
                        </div>
                        <canvas id="myChart" style={{ height: '70', width: '100' }}></canvas>
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

                var swiper = new Swiper('.swiper-container', {
                    slidesPerView: 1,
                    spaceBetween: 10,
                    autoplay: {
                        delay: 5000,
                    },
                    loop: true,
                });


                var ctx = document.getElementById('myChart').getContext('2d');
                var initialData = [50]; // Initial data

                // Define the initial data
                var data = {
                    labels: ['Value 1', 'Value 2', 'Value 3'], // Update labels accordingly
                    datasets: [{
                        label: 'Dataset 1',
                        data: initialData.slice(), // Copy of initialData array
                        borderColor: '#04bb56',
                        borderWidth: 2,
                        // fill: true,
                        backgroundColor: 'rgba(4, 187, 86, 0.2)', // Add a fill color
                        pointRadius: 0, // Hides data points
                        tension: 0.4, // Adjust tension for smoothness
                    }]
                };

                var options = {
                    scales: {
                        x: {
                            display: true, // Hides x-axis
                        },
                        y: {
                            display: true, // Hides y-axis
                        }
                    },
                    plugins: {
                        legend: {
                            display: false, // Hides legend
                        }
                    }
                };

                var myChart = new Chart(ctx, {
                    type: 'line',
                    data: data,
                    options: options
                });
                myChart.ctx.shadowColor = '#04bb56';
                myChart.ctx.shadowBlur = 10;
                // Function to update the chart
                function updateChart() {
                    // Generate a random value (replace this with your logic to get new values)
                    var newValue = Math.floor(Math.random() * 100);

                    // Add the new value to the dataset
                    myChart.data.datasets[0].data.push(newValue);

                    // Add a new label for the new value
                    myChart.data.labels.push('');

                    // Maintain a maximum of 6 values
                    if (myChart.data.datasets[0].data.length > 50) {
                        myChart.data.datasets[0].data.shift();
                        myChart.data.labels.shift();
                    }

                    // Update the chart
                    myChart.update();
                }

                // Automatically update the chart every second
                setInterval(updateChart, 1000);

            </script> */}
            </body>
        </>
    );
}

export default MarketDetail;