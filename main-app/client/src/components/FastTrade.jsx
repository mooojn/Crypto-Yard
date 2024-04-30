import logo from './assets/logo_only.png';
import logoText from './assets/logo_text.png';
import jazzCashPng from './assets/Jazzcash.png';
import jazzPng from './assets/jazz.jpeg';
import img1 from './assets/img-1.png';

import sound from './assets/fastTradeFX.mp3'
import errFX from './assets/errorFX.mp3'

import Preloader from './small_components/PreLoader';
import Header from './small_components/Header';
import React, { useEffect, useRef, useState } from 'react';

import { ToastContainer, toast } from 'react-toastify';

import './styles/FastTrade.css';
import { alertTitleClasses } from '@mui/material';
import Footer from './small_components/Footer';



function FastTrade() {
    const API_URL = "http://localhost:5056/api"
    const [amount, setAmount] = useState(0);


    const audio = new Audio(sound);
    const errAudio = new Audio(errFX);
    const [ flag, setFlag ] = useState(false);
    const [ typeOfTrans, setTypeOfTrans ] = useState('');
    var d = false;
    const sellDollar = (e) => {
        const amount = document.getElementById("priceInput").value;
        if (amount < 1) {
            errAudio.play();
            toast.warning("Please enter a valid amount");
            return;
        } else if (amount > 10000) {
            errAudio.play();
            toast.warning("Amount should be less than $10k");
            return;
        }
        fetch(API_URL + `/sellDollar?amount=${amount}`)
            .then(resp => resp.json())
            .then(data => {
                if (data) {
                    audio.play();
                    toast.success("Transaction Successful");
                    setFlag(true);
                    setTypeOfTrans("Withdraw");
    
                    // Create an async function to handle the setHistory fetch call
                    const setHistory = async () => {
                        try {
                            const historyResponse = await fetch(API_URL + `/setHistory?amount=${amount}&type=${typeOfTrans}`);
                            const historyData = await historyResponse.json();
                            console.log(historyData);
                        } catch (error) {
                            console.error('Error:', error);
                        }
                    }
    
                    // Call the async function
                    setHistory();
                } else {
                    errAudio.play();
                    toast.error("Transaction Failed");
                }
            })
            .catch(error => {
                console.error('Error:', error);
                toast.error("Transaction Failed... error occurred");
            });
    }
    
    const buyDollar = (e) => {
        const amount = document.getElementById("priceInput").value;
        if (amount < 1) {
            errAudio.play();
            toast.warning("Please enter a valid amount");
            return;
        } else if (amount > 10000) {
            errAudio.play();
            toast.warning("Amount should be less than $10k");
            return;
        }
        fetch(API_URL + `/buyDollar?amount=${amount}`)
            .then(response => response.json())
            .then(data => {
                if (data) {
                    audio.play();
                    toast.success("Transaction Successful");
                    setTypeOfTrans("Deposit");
    
                    // Return the second fetch call
                    return fetch(API_URL + `/setHistory?amount=${amount}&type=${typeOfTrans}`);
                } else {
                    errAudio.play();
                    toast.error("Transaction Failed");
                    throw new Error("Transaction Failed");
                }
            })
            .then(historyResponse => historyResponse.json())
            .then(historyData => {
                console.log(historyData);
            })
            .catch(error => {
                console.error('Error:', error);
                toast.error("Please Login to continue... error occurred");
            });
    }
    // validate amount input
    const handleAmountChange = (event) => {
        setAmount(event.target.value);
    };
    const handleBuyClick = () => {

        document.getElementById("currency").innerHTML = 'Pay With';
        document.getElementById("buyButton").style.backgroundColor = '#04bb56';
        document.getElementById("sellButton").style.backgroundColor = '';
        document.getElementById("confirmBTN").innerHTML = 'Buy USDT';
        document.getElementById("confirmBTN").style.backgroundColor = '#04bb56';
        document.getElementById("headong").innerHTML = 'Buy Crypto Instantly';
        document.getElementById("buy").innerHTML = 'Buy';
        document.getElementById("confirmBTN").onclick = buyDollar; // Change from -= to =
    };

    const handleSellClick = () => {

        document.getElementById("currency").innerHTML = 'Get Paid';
        document.getElementById("buyButton").style.backgroundColor = '#141414';
        document.getElementById("sellButton").style.backgroundColor = 'red';
        document.getElementById("confirmBTN").innerHTML = 'Sell USDT';
        document.getElementById("confirmBTN").style.backgroundColor = 'red';
        document.getElementById("headong").innerHTML = 'Sell Crypto Instantly';
        document.getElementById("buy").innerHTML = 'Sell';
        document.getElementById("confirmBTN").onclick = sellDollar; // Change from -= to =
    };
    useEffect(() => {
        handleBuyClick();
    }, [])
    return (
        <body>
        {/* <Preloader /> */}
            <Header />

            <div className="link5">
                <div className="fasttade5">Fast Trade</div>
            </div>
            <div className="main5">
                <div className="textside5">
                    <div id="headong" className="fasthead5">Buy Crypto Instantly</div>
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
                        <div style={{cursor:'pointer'}} className="buysell5">
                            <div id="buyButton" className="buy5" onClick={handleBuyClick}>
                                <div>Buy</div>
                            </div>
                            <div id="sellButton" className="sell5" onClick={handleSellClick}>
                                <div >Sell</div>
                            </div>
                        </div>
                        <div className="avail5">
                            <div>I want to spend</div>
                        </div>
                        <div className="input5-sep">
                            <span className="custom5-placeholder">USDT</span>
                            <input
                                className="inputss5"
                                placeholder="Price"
                                type="number"
                                name=""
                                id="priceInput"
                                onChange={handleAmountChange}
                            />
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
                        <div id="confirmBTN" className="confirm5" onClick>
                            Buy USDT
                        </div>
                        <ToastContainer />
                    </div>
                </div>
            </div>
                    <Footer />
        </body>
    );
}

export default FastTrade;
