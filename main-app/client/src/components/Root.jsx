import logo from './assets/logo_only.png'
import logoText from './assets/logo_text.png'
import btcImg from './assets/bitcoin.png'
import btn from './assets/button.png'
import step1 from './assets/step.png'
import basePng from './assets/base.png'
import icon1 from './assets/icon-1.png'
import icon2 from './assets/icon-2.png'
import icon3 from './assets/icon-3.png'
import icon4 from './assets/icon-4.png'
import icon5 from './assets/icon-5.png'
import icon6 from './assets/icon-6.png'
import img1 from './assets/img-1.png'
import img2 from './assets/img-2.png'
import img3 from './assets/img-3.png'


import React, { useEffect } from 'react';
import Swiper from 'swiper'; // Import Swiper library

import Preloader from './small_components/PreLoader'
import Header from './small_components/Header'
import Footer from './small_components/Footer'

import './styles/Root.css'

function Root() {

    return (
        <>
            <Header />
                <body className='body1'>

                    <Preloader />

                    <div className="main1">
                        <div className="main_text1">
                            <div className="text_one1"><span className="crypto_word1">Crypto</span> exchange  platform for the life</div>
                            <div className="text_two1">Your gateway to the world of cryptocurrency - stay informed, trade smarter</div>
                            <div className="text_three1">
                                <div className="getstarted1">Get Started</div>
                                <div className="class1">Market</div>
                            </div>
                        </div>
                        <div className="main_images1">
                            <div className="images1">
                                <img src={btcImg} className="bitcoins11" alt="" style={{ maxHeight: '70px' }} />
                                <img src={btcImg} className="bitcoins21" alt="" style={{ maxHeight: '50px' }} />
                                <img src={btcImg} className="bitcoins31" alt="" style={{ maxHeight: '40px' }} />
                                <div className="holo1"></div>
                                <div className="hollobase1">
                                    <img src={btn} alt="" style={{ maxHeight: '180px' }} />
                                </div>
                                <img className="images11" src={basePng} alt="" style={{ maxHeight: '300px', maxWidth: '300px', transform: 'rotateX(55deg) rotateY(0deg)' }} />
                            </div>
                            <div className="images1">
                                <img className="image3step1 step4" src={step1} style={{ maxHeight: '100px', marginTop: '10px', zIndex: '40', marginLeft: '290px' }} alt="" />
                                <img className="image3step1 step3" src={step1} style={{ maxHeight: '100px', marginTop: '40px', zIndex: '30', marginLeft: '290px' }} alt="" />
                                <img className="image3step1 step2" src={step1} style={{ maxHeight: '100px', marginTop: '70px', zIndex: '20', marginLeft: '290px' }} alt="" />
                                <img className="image3step1 step1" src={step1} style={{ maxHeight: '100px', marginTop: '100px', marginLeft: '290px' }} alt="" />
                                <img className="images21" src={basePng} alt="" style={{ maxHeight: '300px', maxWidth: '300px', transform: 'rotateX(55deg) rotateY(0deg)' }} />
                            </div>
                            <div className="images1">
                                <img className="image3step1 step3" src={step1} style={{ maxHeight: '100px', marginTop: '190px', zIndex: '30' }} alt="" />
                                <img className="image3step1 step2" src={step1} style={{ maxHeight: '100px', marginTop: '220px', zIndex: '20' }} alt="" />
                                <img className="image3step1 step1" src={step1} style={{ maxHeight: '100px', marginTop: '250px' }} alt="" />
                                <img className="images31" src={basePng} alt="" style={{ maxHeight: '300px', maxWidth: '300px', transform: 'rotateX(55deg) rotateY(0deg)' }} />
                            </div>
                        </div>
                    </div>
                    <div className="servicesbg1">
                        <div className="servicesfront1">
                            <div className="serviceshead1">
                                <div className="bars1"></div>
                                <div className="servicestext1"> Services We Provide </div>
                                <div className="bars1"></div>
                            </div>
                            <div className="services1">
                                <div className="service1 s">
                                    <div className="serviceimg1">
                                        <img src={icon1} alt="" />
                                    </div>
                                    <div className="servicehead1">Crypto Transactions</div>
                                    <div className="serviceexplain1">
                                        <p>Explore the dynamic world of cryptocurrency transactions. Gain insights into market trends and make
                                            informed decisions. Whether you're buying, selling, or holding, our platform ensures a seamless
                                            experience for your crypto journey</p>
                                    </div>
                                    <div className="readmore1">
                                        Read More
                                    </div>
                                </div>
                                <div className="service1 s">
                                    <div className="serviceimg1">
                                        <img src={icon2} alt="" />
                                    </div>
                                    <div className="servicehead1">Crypto Exchange</div>
                                    <div className="serviceexplain1">
                                        <p>Experience the seamless world of Crypto Exchange. Our platform provides a secure and efficient
                                            environment for buying, selling, and trading various cryptocurrencies Stay ahead in the crypto
                                            market with real-time updates and user-friendly features</p>
                                    </div>
                                    <div className="readmore1 colr">
                                        Read More
                                    </div>
                                </div>
                                <div className="service1 s">
                                    <div className="serviceimg1">
                                        <img src={icon3} alt="" />
                                    </div>
                                    <div className="servicehead1">P2P tansfers</div>
                                    <div className="serviceexplain1">
                                        <p>Empower your transactions with P2P transfers. Our platform ensures seamless and secure peer-to-peer
                                            transfers, eliminating the need for intermediaries. Utilizing cutting-edge technology, we provide a
                                            reliable and efficient solution for your needs</p>
                                    </div>
                                    <div className="readmore1">
                                        Read More
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="serviceshead1" style={{ marginTop: '200px' }}>
                        <div className="bars1"></div>
                        <div className="servicestext1"> How It Work </div>
                        <div className="bars1"></div>
                    </div>
                    <div className="works1">
                        <div className="service1 hovr" style={{ padding: '32px 10px' }}>
                            <div className="serviceimg1">
                                <img src={img1} alt="" />
                            </div>
                            <div className="servicehead1">Make Payments</div>
                            <div className="serviceexplain1">
                                <p>Facilitates seamless payments through a variety of payment methods </p>
                            </div>
                        </div>

                        <div className="service1 hovr" style={{ padding: '30px 10px', backgroundColor: '#009242' }}>
                            <div className="serviceimg1">
                                <img src={img2} alt="" />
                            </div>
                            <div className="servicehead1">Create your offers</div>
                            <div className="serviceexplain1">
                                <p>Optimize profits by setting custom prices for sales or purchasing currencies</p>
                            </div>
                        </div>
                        <div className="service1 hovr" style={{ padding: '30px 10px' }}>
                            <div className="serviceimg1">
                                <img src={img3} alt="" />
                            </div>
                            <div className="servicehead1">Buy Or Sell Orders</div>
                            <div className="serviceexplain1">
                                <p>Trade cryptocurrencies, capitalize on market movements, and hold for real-time profits</p>
                            </div>
                        </div>
                    </div>
                    <div className="buttons1">
                        <div className="readmore1">
                            Read More
                        </div>
                    </div>
                    <div className="facts1">
                        <div className="container1">
                            <div className="row1">
                                <div className="col1-md-12">
                                    <h6 className="features_text1">CryptoYard</h6>
                                    <h1 className="features_taital1">AWESOME FACTS</h1>
                                </div>
                            </div>
                            <div className="features_section_21">
                                <div className="row1 grid">
                                    <div className="col1">
                                        <div className="icon_41"><img src={icon4} style={{ height: '60px' }} /><span
                                            className="padding151">1150</span></div>
                                        <h6 className="project_text1">TRANSACTIONS COMPLETED</h6>
                                        <p className="hidden_text1">Celebrate the successful completion of our latest transactions</p>
                                    </div>
                                    <div className="col1">
                                        <div className="icon_41"><img src={icon5} style={{ height: '60px' }} /><span
                                            className="padding151">5223</span></div>
                                        <h6 className="project_text1">HAPPY CLIENTS</h6>
                                        <p className="hidden_text1">Our clients who have experienced exceptional service</p>
                                    </div>
                                    <div className="col1">
                                        <div className="icon_41"><img src={icon6} style={{ height: '60px' }} /><span
                                            className="padding151">522</span></div>
                                        <h6 className="project_text1">WORKERS EMPLOYED</h6>
                                        <p className="hidden_text1">Discover the strength of our workforce, where transparency is key</p>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                    <Footer />
                </body>
        </>
    );
}

export default Root;