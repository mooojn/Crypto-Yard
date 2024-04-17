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