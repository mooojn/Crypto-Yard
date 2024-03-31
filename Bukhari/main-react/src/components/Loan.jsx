import logo from './assets/logo_only.png';
import logoText from './assets/logo_text.png';
import btc1 from './assets/bitcoin1.png';
import usdt from './assets/USDT.png';



import './styles/Loan.css';

function Loan(){
    return(
        <>
<body>
    {/* <div id="preloader">
        <div class="uptext">
            <div class="logo"><img src={logo} alt="" /></div>
            <div class="logo_text"><img src={logoText} alt="" /></div>
        </div>
        <div class="loading">
            <div class="text">
                Loading
            </div>
            <div class="loader"></div>
        </div>
    </div> */}
    <div class="bosy">

        <header>
            <div class="logotext">
                
                <img src={logoText} alt="" style={{height: '70px'}} />
            </div>
            <div class="header_nav">
                <nav class="navbar_header">
                    <ul>
                        <li><a href="/fast-trade">Buy Crypto</a></li>
                        <li><a href="/market">Market</a></li>
                        <li><a href="/trading">Trade</a></li>
                        <li><a href="/assets">Assets</a></li>
                    </ul>
                </nav>
            </div>
            <div class="third_part">
                <div class="button">Sign up/Login</div>
                <div class="loggedin"></div>
            </div>
        </header>

        <div class="main">
            <div class="loanstext">
                <div class="headings">Get Instant</div>
                <div class="headings">
                    <p>Crytpo <span style={{color: '#04bb56'}}>Loans</span></p>
                </div>
                <div class="lines">
                    <p>Leverage the value of top 5 cryptocurrencies as collateral to secure quick and flexible crypto
                        loans, empowering you to access funds without selling your digital assets.</p>
                </div>
                <div class="loanbutton">No Loan</div>
                <div class="points">
                    <div class="point">
                        <i class="far fa-check-circle"></i>
                        <p>Optimize your digital asset management with our system, offering leverage through <span
                                style={{color: '#04bb56'}}>USDT</span></p>
                    </div>
                    <div class="point">
                        <i class="far fa-check-circle"></i>
                        <p>Instant Loans using our Fiat service Not need to find a lender like in P2P</p>
                    </div>
                    <div class="point">
                        <i class="far fa-check-circle"></i>
                        <p>Flexible loan repayment date and loan-to-value options</p>
                    </div>
                </div>
            </div>
            <div class="table">
                <div class="swap">
                    <div class="head">
                        <p>
                            Crytpo Collateral
                        </p>
                        <p>
                            Amount in USD Tether
                        </p>
                    </div>
                    <div class="coins">
                        <div class="coin">
                            <div class="image-text">
                                <div class="image"><img src={btc1}  alt="" /></div>
                                <div class="name">BTC</div>
                            </div>
                                <div class="Amount">1</div>
                        </div>
                        <div class="coin">
                            <div class="image-text">
                            <div class="image"><img src={usdt} alt="" /></div>
                            <div class="name">USD</div>
                            </div>
                            <div class="Amount">32987</div>
                        </div>
                    </div>
                </div>
                <div class="Ltv">
                    <div class="ltvhead">Loan-to-Value (LTV)</div>
                    <div class="ltvoffers">
                        <div class="offer">
                            <div class="offerpercent">
                                <div class="percent">85.00%</div>
                                <div class="duration"><i class="fa-solid fa-star"></i>30 DAYS</div>
                            </div>
                        </div>
                        <div class="offer">
                            <div class="offerpercent">
                                <div class="percent">90.00%</div>
                                <div class="duration">35 DAYS</div>
                            </div>
                        </div>
                        <div class="offer">
                            <div class="offerpercent">
                                <div class="percent">70.00%</div>
                                <div class="duration">41 DAYS</div>
                            </div>
                        </div>
                        <div class="offer">
                            <div class="offerpercent">
                                <div class="percent">50.00%</div>
                                <div class="duration">180 DAYS</div>
                            </div>
                        </div>
                    </div>
                </div>
                <div class="details">
                    <div class="detail">
                        <div class="detailhead">Loan Duration</div>
                        <div class="detailinfo">
                            <p><span>30</span> Days</p>
                        </div>
                        <div class="detaillines">After duration an automated deduction will be initiated from the
                            designated account</div>
                    </div>
                    <div class="detail">
                        <div class="detailhead">Price Down limit</div>
                        <div class="detailinfo">
                            <p><span>4783</span> USD/BTC</p>
                        </div>
                        <div class="detaillines">Price fluctuations are limited within a specified maximum threshold
                        </div>
                    </div>
                    <div class="detail">
                        <div class="detailhead">Repayment</div>
                        <div class="detailinfo">
                            <p><span>240</span> USD</p>
                        </div>
                        <div class="detaillines">Full repayment of the loan is required partial payments will not be
                            accepted.</div>
                    </div>
                </div>
                <div class="confirm">
                    <div class="amount">
                        <div class="amounts">
                            <p><span>424200
                                </span> USD</p>
                        </div>
                        <div class="confirmline">Read rules before confirming</div>
                    </div>
                    <div class="confirmbutton">Get Loan</div>
                </div>
            </div>
        </div>
    </div>




    
    {/* <script src="https://cdn.jsdelivr.net/npm/swiper@11/swiper-bundle.min.js"></script>
    <script>
        //  Pre loader 
        window.addEventListener("load", function () {
            var preloader = document.getElementById("preloader");
            preloader.classList.add("fade-out");
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