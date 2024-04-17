
import btc from './assets/bitcoin1.png'
import eth from './assets/eth.png'
import logotext from './assets/logo_text.png'


import Preloader from './small_components/PreLoader'
import Header from './small_components/Header'


import './styles/Assets.css'

function Asset() {
    return (
        <>
            <div className="body">
            <Preloader />
            <Header />
                
                    <div className="main">
                        <div className="sidebar">
                            <nav className="nav">
                                <ul className="ul">
                                    <a href="" className="siderbarA">
                                        <li className="sidelist"><i className="fa fa-pie-chart" aria-hidden="true"></i><span
                                            className="sidebartext">Overview</span></li>
                                    </a>
                                    <a href="" className="siderbarA">
                                        <li className="sidelist"><i className="fa-solid fa-wallet"></i><span className="sidebartext">Main</span>
                                        </li>
                                    </a>
                                    <a href="" className="siderbarA">
                                        <li className="sidelist"><i className="fa-brands fa-trade-federation"></i><span
                                            className="sidebartext">Trading</span></li>
                                    </a>
                                    <a href="" className="siderbarA">
                                        <li className="sidelist"><i className="fa-solid fa-shop"></i><span
                                            className="sidebartext">Market</span></li>
                                    </a>
                                    <a href="" className="siderbarA">
                                        <li className="sidelist"><i className="fa-solid fa-money-bill-transfer"></i><span
                                            className="sidebartext">P2P</span></li>
                                    </a>
                                    <a href="" className="siderbarA" style={{ marginTop: '180px' }}>
                                        <hr style={{ textDecoration: 'none', color: 'white', marginBottom: '20px' }} />
                                        <li className="sidelist"><i className="fa-solid fa-hand-holding-dollar"></i><span
                                            className="sidebartext">Deposit</span></li>
                                    </a>
                                    <a href="" className="siderbarA">
                                        <li className="sidelist"><i className="fa-solid fa-arrow-up-from-bracket"></i><span
                                            className="sidebartext">Withdraw</span></li>
                                    </a>
                                    <a href="" className="siderbarA">
                                        <li className="sidelist"><i className="fa-regular fa-clipboard"></i><span
                                            className="sidebartext">Histories</span></li>
                                    </a>
                                </ul>
                            </nav>
                        </div>
                        <div className="submain">
                            <div className="headbar">
                                <div className="ASSESTS">Assests Overview</div>
                                <div className="buttons">
                                    <div className="depo">Deposit</div>
                                    <div className="buycryp">Buy Crypto</div>
                                    <div className="Withdraw">Withdraw</div>
                                </div>
                            </div>
                            <div className="wholebody">
                                <div className="assesttext">
                                    <div className="overall">
                                        <div className="overalltext">Total Assests</div>
                                        <div className="overallvalue"><span className="value">0.00000000</span> BTC</div>
                                    </div>
                                    <div className="headerss">
                                        <div className="ASSESTS">Account</div>
                                        <div className="ASSESTS" style={{ color: '#00ab4d' }}>Assests</div>
                                        <div className="Loans"><i className="fa-solid fa-gear" style={{ marginRight: '10px' }}></i>Manage Loans</div>
                                    </div>
                                    <div className="transfer">
                                        <div className="mains">
                                            <div className="assestaccount">Main Assests</div>
                                            <div className="assestamount"><div className="Cvalue"><span className="value">0.00000000</span> BTC</div></div>
                                            <div className="assestline">Available funds. Ready to go!</div>
                                        </div>
                                        <div className="mains">
                                            <div className="assestaccount">Trading Assests</div>
                                            <div className="assestamount"><div className="Cvalue"><span className="value">0.00000000</span> BTC</div></div>
                                            <div className="assestline">Holded Amount of certain coin</div>
                                        </div>
                                        <div className="mains">
                                            <div className="assestaccount">Loan Assests</div>
                                            <div className="assestamount"><div className="Cvalue"><span className="value">0.00000000</span> BTC</div></div>
                                            <div className="assestline">Tip: Return Loans before time ends!</div>
                                        </div>
                                    </div>
                                    <div className="coinsholded">
                                        <div className="coinsheader">
                                            <div className="Products">Products</div>
                                            <div className="Price">Price</div>
                                            <div className="Change">Change</div>
                                            <div className="action" style={{ color: '#fff', fontSize: '20px' }}>Holds</div>
                                        </div>
                                        <div className="coins">
                                            <div className="individualcoin">
                                                <div className="coinname">
                                                    <div className="iconcoin"><img src={btc}  alt="" /></div>
                                                    <div className="names">
                                                        <div className="symbol">BTC</div>
                                                        <div className="coin">Bitcoin</div>
                                                    </div>
                                                </div>
                                                <div className="coinprice">$<span className="price">200</span></div>
                                                <div className="coinpercentage"><span className="percentage">20</span>%</div>
                                                <div className="action">
                                                    0.0424324
                                                </div>
                                            </div>
                                            <div className="individualcoin">
                                                <div className="coinname">
                                                    <div className="iconcoin"><img src={eth} alt="" /></div>
                                                    <div className="names">
                                                        <div className="symbol">ETH</div>
                                                        <div className="coin">Ethereum</div>
                                                    </div>
                                                </div>
                                                <div className="coinprice">$<span className="price">254500</span></div>
                                                <div className="coinpercentage"><span className="percentage">2</span>%</div>
                                                <div className="action">
                                                    0.6454353
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                                <div className="grpah-histories">
                                    <div className="graph">
                                        <div className="GRAPHHEAD">Assests Movements</div>
                                        <div className="change"><span>0.00</span>%</div>
                                        <br />
                                        <br />
                                        <canvas id="myChart" width="100" height="70"></canvas>
                                    </div>
                                    <div className="tip">
                                        <p>USDT<span style={{ color: '#fff' }}> has been the most traded currency since last 7 days</span></p>
                                    </div>
                                    <div className="histories">
                                        <div className="head">Recent Transaction</div>
                                        <div className="more">More<i className="fa-solid fa-arrow-right" style={{ marginLeft: '5px' }}></i></div>
                                        <div className="transaction">

                                            <div className="upperrow">
                                                <div className="type">Deposit</div>
                                                <div className="amount">0.0434343<span style={{ marginLeft: '3px', color: '#00c458' }}>BTC</span></div>
                                            </div>
                                            <div className="lowerrow">
                                                <div className="date">23/1/2024</div>
                                                <div className="status">Completed</div>
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