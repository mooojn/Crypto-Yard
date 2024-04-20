
import btc from './assets/bitcoin1.png'
import eth from './assets/eth.png'
import logotext from './assets/logo_text.png'


import Preloader from './small_components/PreLoader'
import Header from './small_components/Header'


import './styles/Assets.css'
import { useEffect } from 'react'

function Asset() {
   



    return (
        <>
            <div className="body8">
            <Preloader />
            <Header />
                
                    <div className="main8">
                        <div className="sidebar8">
                            <nav className="nav8">
                                <ul className="ul8">
                                    <a href="" className="siderbarA8">
                                        <li className="sidelist8"><i className="fa fa-pie-chart" aria-hidden="true"></i><span
                                            className="sidebartext8">Overview</span></li>
                                    </a>
                                    <a href="" className="siderbarA8">
                                        <li className="sidelist8"><i className="fa-solid fa-wallet"></i><span className="sidebartext8">Main</span>
                                        </li>
                                    </a>
                                    <a href="" className="siderbarA8">
                                        <li className="sidelist8"><i className="fa-brands fa-trade-federation"></i><span
                                            className="sidebartext8">Trading</span></li>
                                    </a>
                                    <a href="" className="siderbarA8">
                                        <li className="sidelist8"><i className="fa-solid fa-shop"></i><span
                                            className="sidebartext8">Market</span></li>
                                    </a>
                                    <a href="" className="siderbarA8">
                                        <li className="sidelist8"><i className="fa-solid fa-money-bill-transfer"></i><span
                                            className="sidebartext8">P2P</span></li>
                                    </a>
                                    <a href="" className="siderbarA8" style={{ marginTop: '180px' }}>
                                        <hr style={{ textDecoration: 'none', color: 'white', marginBottom: '20px' }} />
                                        <li className="sidelist8"><i className="fa-solid fa-hand-holding-dollar"></i><span
                                            className="sidebartext8">Deposit</span></li>
                                    </a>
                                    <a href="" className="siderbarA8">
                                        <li className="sidelist8"><i className="fa-solid fa-arrow-up-from-bracket"></i><span
                                            className="sidebartext8">Withdraw</span></li>
                                    </a>
                                    <a href="" className="siderbarA8">
                                        <li className="sidelist8"><i className="fa-regular fa-clipboard"></i><span
                                            className="sidebartext8">Histories</span></li>
                                    </a>
                                </ul>
                            </nav>
                        </div>
                        <div className="submain8">
                            <div className="headbar8">
                                <div className="ASSESTS8">Assests Overview</div>
                                <div className="buttons8">
                                    <div className="depo8">Deposit</div>
                                    <div className="buycryp8">Buy Crypto</div>
                                    <div className="Withdraw8">Withdraw</div>
                                </div>
                            </div>
                            <div className="wholebody8">
                                <div className="assesttext8">
                                    <div className="overall8">
                                        <div className="overalltext8">Total Assests</div>
                                        <div className="overallvalue8"><span className="value8">0.0000</span> BTC</div>
                                    </div>
                                    <div className="headerss8">
                                        <div className="ASSESTS8">Account</div>
                                        <div className="ASSESTS8" style={{ color: '#00ab4d' }}>Assests</div>
                                        <div className="Loans8"><i className="fa-solid fa-gear" style={{ marginRight: '10px' }}></i>Manage Loans</div>
                                    </div>
                                    <div className="transfer8">
                                        <div className="mains8">
                                            <div className="assestaccount8">Main Assests</div>
                                            <div className="assestamount8"><div className="Cvalue8"><span className="value8">0.00000000</span> BTC</div></div>
                                            <div className="assestline8">Available funds. Ready to go!</div>
                                        </div>
                                        <div className="mains8">
                                            <div className="assestaccount8">Trading Assests</div>
                                            <div className="assestamount8"><div className="Cvalue8"><span className="value8">0.00000000</span> BTC</div></div>
                                            <div className="assestline8">Holded Amount of certain coin</div>
                                        </div>
                                        <div className="mains8">
                                            <div className="assestaccount8">Loan Assests</div>
                                            <div className="assestamount8"><div className="Cvalue8"><span className="value8">0.00000000</span> BTC</div></div>
                                            <div className="assestline8">Tip: Return Loans before time ends!</div>
                                        </div>
                                    </div>
                                    <div className="coinsholded8">
                                        <div className="coinsheader8">
                                            <div className="Products8">Products</div>
                                            <div className="Price8">Price</div>
                                            <div className="Change8">Change</div>
                                            <div className="action8" style={{ color: '#fff', fontSize: '20px' }}>Holds</div>
                                        </div>
                                        <div className="coins8">
                                            <div className="individualcoin8">
                                                <div className="coinname8">
                                                    <div className="iconcoin8"><img src={btc}  alt="" /></div>
                                                    <div className="names8">
                                                        <div className="symbol8">BTC</div>
                                                        <div className="coin8">Bitcoin</div>
                                                    </div>
                                                </div>
                                                <div className="coinprice8">$<span className="price8">200</span></div>
                                                <div className="coinpercentage8"><span className="percentage8">20</span>%</div>
                                                <div className="action8">
                                                    0.0424324
                                                </div>
                                            </div>
                                            <div className="individualcoin8">
                                                <div className="coinname8">
                                                    <div className="iconcoin8"><img src={eth} alt="" /></div>
                                                    <div className="names8">
                                                        <div className="symbol8">ETH</div>
                                                        <div className="coin8">Ethereum</div>
                                                    </div>
                                                </div>
                                                <div className="coinprice8">$<span className="price8">254500</span></div>
                                                <div className="coinpercentage8"><span className="percentage8">2</span>%</div>
                                                <div className="action8">
                                                    0.6454353
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                                <div className="grpah8-histories">
                                    <div className="graph8">
                                        <div className="GRAPHHEAD8">Assests Movements</div>
                                        <div className="change8"><span>0.00</span>%</div>
                                        <br />
                                        <br />
                                        <canvas id="myChart" width="100" height="70"></canvas>
                                    </div>
                                    <div className="tip8">
                                        <p>USDT<span style={{ color: '#fff' }}> has been the most traded currency since last 7 days</span></p>
                                    </div>
                                    <div className="histories8">
                                        <div className="head8">Recent Transaction</div>
                                        <div className="more8">More<i className="fa-solid fa-arrow-right" style={{ marginLeft: '5px' }}></i></div>
                                        <div className="transaction8">

                                            <div className="upperrow8">
                                                <div className="type8">Deposit</div>
                                                <div className="amount8">0.0434343<span style={{ marginLeft: '3px', color: '#00c458' }}>BTC</span></div>
                                            </div>
                                            <div className="lowerrow8">
                                                <div className="date8">23/1/2024</div>
                                                <div className="status8">Completed</div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>



                </div>
        </>
    );
}
export default Asset;