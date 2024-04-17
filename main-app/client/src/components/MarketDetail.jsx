import logo from './assets/logo_only.png'
import logoText from './assets/logo_text.png'
import btcImg from './assets/bitcoin1.png'
import scoreImg from './assets/Score.png'

import Header from './small_components/Header'
import Preloader from './small_components/PreLoader'


import './styles/MarketDetail.css'


function MarketDetail() {
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
                                    <div className="coinname7">Bitcoin</div>
                                </div>
                                <div className="usd7">In USD ($)</div>
                            </div>
                            <div className="priceinfo7">
                                <div className="price7">
                                    <p>$<span style={{color: '#fff'}}>50,000</span></p>
                                </div>
                                <div className="change7">Change:<p><span className="changeprice7">5</span>%</p>
                                </div>
                            </div>
                            <canvas id="myChart" style={{height: '70', width: '100'}}></canvas>
                            <div className="overview7">
                                <div className="heed7">
                                    Overview
                                </div>
                                <div className="textover7">
                                    <p>
                                        Bitcoin, created in 2009, is a decentralized digital currency operating on a capped supply
                                        of 21 million. Its blockchain ensures secure and transparent transactions, validated through
                                        mining. Bitcoin's pseudonymous transactions offer deflationary characteristics, contributing
                                        to its "digital gold" moniker. However, its volatile value is influenced by market dynamics,
                                        regulatory shifts, and technological advancements. Despite challenges such as scalability
                                        concerns and regulatory uncertainties, Bitcoin has gained global adoption, impacting
                                        financial landscapes and fostering the development of alternative cryptocurrencies</p>
                                </div>
                                <div className="heed7">About Coin</div>
                                <div className="textover7">
                                    <p>
                                        Bitcoin is the world's first cryptocurrency designed to operate decentralized over a
                                        blockchain. Unlike traditional currencies, it can be used as a store of value and for making
                                        digital payments without a central authority like a bank or a financial institution. The
                                        symbol BTC in the market represents Bitcoin.
                                        <br />
                                        The Bitcoin digital currency is the first of its kind that has seen widespread adoption and
                                        interest from users worldwide. In 2021, El Salvador became the first country in the world to
                                        adopt Bitcoin as a legal tender, further boosting its acceptance as an alternative to
                                        government-issued fiat currencies.
                                        <br />
                                        <br />
                                        While digital payments have existed for several years, Bitcoin stands apart due to its
                                        decentralization features. Instead of depending on the traditional financial infrastructure,
                                        transactions of Bitcoin take place on the blockchain on a peer-to-peer basis without the
                                        need for an intermediary authority.
                                        <br />
                                        <br />
                                        What sets Bitcoin apart from several other assets is its limited supply. There will only
                                        ever be 21 million bitcoins created, which gives it scarcity similar to precious metals like
                                        gold. Bitcoins are created through mining, where individuals or organizations use powerful
                                        computers to solve complex mathematical problems and validate transactions on the network.
                                        Miners receive newly minted Bitcoins as rewards for their contributions to the network's
                                        security and transaction processing.
                                        <br />
                                        <br />
                                        Bitcoin has gained popularity as a digital currency and a speculative investment asset. It
                                        has experienced significant price volatility throughout its history, with its value subject
                                        to market demand and investor sentiment. Bitcoin's price reached significant milestones over
                                        the years, and it has been one of the top-performing asset classes in global financial
                                        markets, including stocks, commodities, and bonds, over the past decade. On January 10,
                                        2024, the US SEC approved 11 spot Bitcoin ETFs in the US markets, increasing institutional
                                        investor interest in the digital gold Bitcoin.
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
                                        <div className="line7">Trade BTC/USDT</div>
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