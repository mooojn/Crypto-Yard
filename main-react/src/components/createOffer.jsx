import logo from './assets/logo_only.png' 
import logoText from './assets/logo_text.png'

import './styles/CreateOffer.css'
function createOffer()
{
    return(
        <>
        <body>
        {/* <div id="preloader">
            <div class="uptext">
                <div class="logo"><img src={logo} alt=""/></div>
                <div class="logo_text"><img src={logoText} alt=""/></div>
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
                    <img src={logoText} alt="" style={{height:"70px"}}/>
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
                </div>
            </header>
            <div class="link">
                <div class="fasttade">Fast Trade</div>
                <div class="p2p">P2P</div>
                <div class="create">Create Offer</div>
            </div>

            <div class="createoffer">
                <div class="head">Create Offer</div>
                <div class="Name">
                    <div class="namehead">Name:</div>
                    <input type="text" class="name" placeholder="Enter your name"/>
                </div>
                <div class="Name">
                    <div class="namehead">Price per Dollar (PKR):</div>
                    <input type="text" class="name" placeholder="Enter dollar rate"/>
                </div>
                <div class="Name">
                    <div class="namehead">Transfer Limit:</div>
                    <input type="text" class="name" placeholder="Enter Limit"/>
                </div>
                <div class="payby">
                     <div class="paymenthead">Payment Method:</div>
                    <select name="" id="">
                        <option value="">EasyPaisa</option>
                        <option value="">JazzCash</option>
                        <option value="">Bank Transfer</option>
                    </select>
                </div>
                <div class="category">
                    <div class="categoryhead">Category:</div>
                    <select name="" id="">
                        <option value="">Buy</option>
                        <option value="">Sell</option>
                    </select>
                </div>
                <div class="createbutton">Create Offer</div>
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
export default createOffer;