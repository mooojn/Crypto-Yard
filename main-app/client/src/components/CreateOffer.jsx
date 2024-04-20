import logo from './assets/logo_only.png' 
import logoText from './assets/logo_text.png'

import Preloader from './small_components/PreLoader';
import Header from './small_components/Header';

import './styles/CreateOffer.css'
function createOffer()
{
    return(
        <>
        <body>
        <Preloader />
        <Header />
        
            <div className="link6">
                <a href="/fast-trade"><div className="fasttade6">Fast Trade</div></a>
                <a href="/p2p"><div className="p2p6">P2P</div></a>
                <div className="create6">Create Offer</div>
            </div>

            <div className="createoffer6">
                <div className="head6">Create Offer</div>
                <div className="Name6">
                    <div className="namehead6">Name:</div>
                    <input type="text" className="name6" placeholder="Enter your name"/>
                </div>
                <div className="Name6">
                    <div className="namehead6">Price per Dollar (PKR):</div>
                    <input type="text" className="name6" placeholder="Enter dollar rate"/>
                </div>
                <div className="Name6">
                    <div className="namehead6">Transfer Limit:</div>
                    <input type="text" className="name6" placeholder="Enter Limit"/>
                </div>
                <div className="payby6">
                     <div className="paymenthead6">Payment Method:</div>
                    <select name="" id="">
                        <option value="">EasyPaisa</option>
                        <option value="">JazzCash</option>
                        <option value="">Bank Transfer</option>
                    </select>
                </div>
                <div className="category6">
                    <div className="categoryhead6">Category:</div>
                    <select name="" id="">
                        <option value="">Buy</option>
                        <option value="">Sell</option>
                    </select>
                </div>
                <div className="createbutton6">Create Offer</div>
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