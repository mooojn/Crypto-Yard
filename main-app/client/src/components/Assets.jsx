
import btc from './assets/bitcoin1.png'
import eth from './assets/eth.png'
import logotext from './assets/logo_text.png'


import Preloader from './small_components/PreLoader'
import Header from './small_components/Header'



import './styles/Assets.css'


import React, { useState, useEffect } from 'react';




function Asset() {
    const API_URL = "http://localhost:5056/api";
    const [amount, setAmount] = useState(0);
    const [loan, setLoan] = useState(0);
    const [trading, setTrading] = useState(0);
    const [ historyAmount, setHistoryAmount ] = useState(0);
    const [ historyType, setHistoryType ] = useState("");
    // const [ historyDate, setHistoryDate ] = useState(0);

    useEffect(() => {
        fetch(`${API_URL}/assetWorth`)
        .then(resp => resp.json())
        .then(data => {
            if(data.length === 0){
                console.log('No data found');
                return;
            } if(data[0]){
                setAmount(data[0]);     // 0 for main
            } if(data[1]){
                setTrading(data[1]);    // 1 for trading
            } if(data[2]){
                setLoan(data[2]);       // 2 for loan
            } 
        })
        .then(() => {
            return fetch(API_URL + '/getHistory')
        })
        .then(resp => resp.json())
        .then(data =>{
            setHistoryAmount(data.Amount)
            setHistoryType(data.Type)
            // setHistoryDate(new Date(data.date))
        })
        .catch(err => {
            console.log(err.message);
        }); 
    }, []);

    return (
        <>
            <Header />
            
            <div className="body8">
                <Preloader />
                
                <div className="main8">
                    <div className="sidebar8">
                        <nav className="nav8">
                            <ul className="ul8">
                                <a href="" className="siderbarA8">
                                    {/* <li className="sidelist8"><i className="fa fa-pie-chart" aria-hidden="true"></i><span
                                        className="sidebartext8">Overview</span></li> */}
                                </a>
                                <a href="" className="siderbarA8">
                                    <li className="sidelist8"><i className="fa-solid fa-wallet"></i><span className="sidebartext8">Main</span>
                                    </li>
                                </a>
                                <a href="/trading?variableName=Bitcoin" className="siderbarA8">
                                    <li className="sidelist8"><i className="fa-brands fa-trade-federation"></i><span
                                        className="sidebartext8">Trading</span></li>
                                </a>
                                <a href="/market" className="siderbarA8">
                                    <li className="sidelist8"><i className="fa-solid fa-shop"></i><span
                                        className="sidebartext8">Market</span></li>
                                </a>
                            </ul>
                        </nav>
                    </div>
                    <div className="submain8">
                        <div className="headbar8">
                            <div className="ASSESTS8">Assets Overview</div>
                            <div className="buttons8">
                            <a href="/fast-trade"><div className="depo8">Deposit</div></a>
                                <a href="/fast-trade"><div className="Withdraw8">Withdraw</div></a>
                            </div>
                        </div>
                        <div className="wholebody8">
                            <div className="assesttext8">
                                <div className="overall8">
                                    <div className="overalltext8">Total Assests</div>
                                    <div className="overallvalue8"><span className="value8">{(amount+loan+trading).toFixed(2)}</span> USDT</div>
                                </div>
                                <div className="headerss8">
                                    <div className="ASSESTS8">Account</div>
                                    <div className="ASSESTS8" style={{ color: '#00ab4d' }}>Assests</div>
                                    <div className="Loans8"><i className="fa-solid fa-gear" style={{ marginRight: '10px' }}></i>Manage Loans</div>
                                </div>
                                <div className="transfer8">
                                    <div className="mains8">
                                        <div className="assestaccount8">Main Assests</div>
                                        <div className="assestamount8"><div className="Cvalue8"><span className="value8">{amount}</span> USDT</div></div>
                                        <div className="assestline8">Available funds. Ready to go!</div>
                                    </div>
                                    <div className="mains8">
                                        <div className="assestaccount8">Trading Assests</div>
                                        <div className="assestamount8"><div className="Cvalue8"><span className="value8">{trading}</span> USDT</div></div>
                                        <div className="assestline8">Holded Amount of certain coin</div>
                                    </div>
                                    <div className="mains8">
                                        <div className="assestaccount8">Loan Assests</div>
                                        <div className="assestamount8"><div className="Cvalue8"><span className="value8">{loan}</span> USDT</div></div>
                                        <div className="assestline8">Tip: Return Loans before time ends!</div>
                                    </div>
                                </div>
                                                            </div>
                            <div className="grpah8-histories">
                                
                                <div className="histories8">
                                    <div className="head8">Recent Transaction</div>
                                    <div className="more8">More<i className="fa-solid fa-arrow-right" style={{ marginLeft: '5px' }}></i></div>
                                    <div className="transaction8">
                                        <div className="upperrow8">
                                            <div className="type8">{historyType}</div>
                                            <div className="amount8">{historyAmount}<span style={{ marginLeft: '3px', color: '#00c458' }}>USDT</span></div>
                                        </div>
                                        <div className="lowerrow8">
                                            <div className="date8">April-2024</div>
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