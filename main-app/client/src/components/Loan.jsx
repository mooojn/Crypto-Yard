import logo from './assets/logo_only.png';
import logoText from './assets/logo_text.png';
import btc1 from './assets/bitcoin1.png';
import usdt from './assets/USDT.png';

import Preloader from './small_components/PreLoader';
import Header from './small_components/Header';


import './styles/Loan.css';

function Loan(){
    return(
        <>
<body>
<Preloader />
<Header />
    
        <div className="main2">
            <div className="loanstext2">
                <div className="headings2">Get Instant</div>
                <div className="headings2">
                    <p>Crytpo <span style={{color: '#04bb56'}}>Loans</span></p>
                </div>
                <div className="lines2">
                    <p>Leverage the value of top 5 cryptocurrencies as collateral to secure quick and flexible crypto
                        loans, empowering you to access funds without selling your digital assets.</p>
                </div>
                <div className="loanbutton2">No Loan</div>
                <div className="points2">
                    <div className="point2">
                        <i className="far fa-check-circle"></i>
                        <p>Optimize your digital asset management with our system, offering leverage through <span
                                style={{color: '#04bb56'}}>USDT</span></p>
                    </div>
                    <div className="point2">
                        <i className="far2 fa-check-circle"></i>
                        <p>Instant Loans using our Fiat service Not need to find a lender like in P2P</p>
                    </div>
                    <div className="point2">
                        <i className="far2 fa-check-circle"></i>
                        <p>Flexible loan repayment date and loan-to-value options</p>
                    </div>
                </div>
            </div>
            <div className="table2">
                <div className="swap2">
                    <div className="head2">
                        <p>
                            Crytpo Collateral
                        </p>
                        <p>
                            Amount in USD Tether
                        </p>
                    </div>
                    <div className="coins2">
                        <div className="coin2">
                            <div className="image2-text">
                                <div className="image2"><img src={btc1}  alt="" /></div>
                                <div className="name2">BTC</div>
                            </div>
                                <div className="Amount2">1</div>
                        </div>
                        <div className="coin2">
                            <div className="image2-text">
                            <div className="image2"><img src={usdt} alt="" /></div>
                            <div className="name2">USD</div>
                            </div>
                            <div className="Amount2">32987</div>
                        </div>
                    </div>
                </div>
                <div className="Ltv2">
                    <div className="ltvhead2">Loan-to-Value (LTV)</div>
                    <div className="ltvoffers2">
                        <div className="offer2">
                            <div className="offerpercent2">
                                <div className="percent2">85.00%</div>
                                <div className="duration2"><i className="fa2-solid fa-star"></i>30 DAYS</div>
                            </div>
                        </div>
                        <div className="offer2">
                            <div className="offerpercent2">
                                <div className="percent2">90.00%</div>
                                <div className="duration2">35 DAYS</div>
                            </div>
                        </div>
                        <div className="offer2">
                            <div className="offerpercent2">
                                <div className="percent2">70.00%</div>
                                <div className="duration2">41 DAYS</div>
                            </div>
                        </div>
                        <div className="offer2">
                            <div className="offerpercent2">
                                <div className="percent2">50.00%</div>
                                <div className="duration2">180 DAYS</div>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="details2">
                    <div className="detail2">
                        <div className="detailhead2">Loan Duration</div>
                        <div className="detailinfo2">
                            <p><span>30</span> Days</p>
                        </div>
                        <div className="detaillines2">After duration an automated deduction will be initiated from the
                            designated account</div>
                    </div>
                    <div className="detail2">
                        <div className="detailhead2">Price Down limit</div>
                        <div className="detailinfo2">
                            <p><span>4783</span> USD/BTC</p>
                        </div>
                        <div className="detaillines2">Price fluctuations are limited within a specified maximum threshold
                        </div>
                    </div>
                    <div className="detail2">
                        <div className="detailhead2">Repayment</div>
                        <div className="detailinfo2">
                            <p><span>240</span> USD</p>
                        </div>
                        <div className="detaillines2">Full repayment of the loan is required partial payments will not be
                            accepted.</div>
                    </div>
                </div>
                <div className="confirm2">
                    <div className="amount2">
                        <div className="amounts2">
                            <p><span>424200
                                </span> USD</p>
                        </div>
                        <div className="confirmline2">Read rules before confirming</div>
                    </div>
                    <div className="confirmbutton2">Get Loan</div>
                </div>
            </div>
        </div>




    
    {/* <script src="https://cdn.jsdelivr.net/npm/swiper@11/swiper-bundle.min.js"></script>
    <script>
        //  Pre loader 
        window.addEventListener("load", function () {
            var preloader = document.getElementById("preloader");
            preloader.classNameList.add2("fade-out");
            setTimeout(function () {
                preloader.style.display = "none";
            }, 1000);
        });
    </script> */}
</body>

        </>
    );
}

export default Loan;