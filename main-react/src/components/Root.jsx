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


import './styles/Root.css'

function Root(){
  
  return(
  <>
  <body>
    
  {/* <div id="preloader">
      <div className="uptext">
          <div className="logo"><img src={logo} alt=""/></div>
          <div className="logo_text"><img src={logoText} alt=""/></div>
      </div>
      <div className="loading">
          <div className="text">
              Loading
          </div>
          <div className="loader"></div>
      </div>
  </div> */}
  <div className="bosy">

      <header>
          <div className="logotext">
          <img src={logoText} alt="h" style={{ maxHeight: '70px' }} />
          </div>
          <div className="header_nav">
              <nav className="navbar_header">
                  <ul>
                      <li><a href="/fast-trade">Buy Crypto</a></li>
                      <li><a href="/market">Market</a></li>
                      <li><a href="/trading">Trade</a></li>
                      <li><a href="/assets">Assets</a></li>
                  </ul>
              </nav>
          </div>
          <div className="third_part">
              <div className="button">Sign up/Login</div>
              <div className="loggedin"></div>
          </div>
      </header> 
      
      <div className="main">
          <div className="main_text">
              <div className="text_one"><span className="crypto_word">Crypto</span> exchange  platform for the life</div>
              <div className="text_two">Your gateway to the world of cryptocurrency - stay informed, trade smarter</div>
              <div className="text_three">
                  <div className="getstarted">Get Started</div>
                  <div className="className">Market</div>
              </div>
          </div>
          <div className="main_images">
              <div className="images">
                  <img src={btcImg} className="bitcoins1" alt="" style={{maxHeight: '70px'}}/>
                  <img src={btcImg} className="bitcoins2" alt="" style={{maxHeight: '50px'}}/>
                  <img src={btcImg} className="bitcoins3" alt="" style={{maxHeight: '40px'}}/>
                  <div className="holo"></div>
                  <div className="hollobase">
                      <img src={btn} alt="" style={{maxHeight: '180px'}}/>
                  </div>
                  <img className="images1" src={basePng} alt="" style={{maxHeight: '300px', maxWidth: '300px', transform: 'rotateX(55deg) rotateY(0deg)'}}/>
              </div>
              <div className="images">
                  <img className="image3step step4" src={step1} style={{maxHeight: '100px', marginTop: '10px', zIndex: '40', marginLeft: '290px'}} alt=""/>
                  <img className="image3step step3" src={step1} style={{maxHeight: '100px', marginTop: '40px', zIndex: '30', marginLeft: '290px'}} alt=""/>
                  <img className="image3step step2" src={step1} style={{maxHeight: '100px', marginTop: '70px', zIndex: '20', marginLeft: '290px'}} alt=""/>
                  <img className="image3step step1" src={step1} style={{maxHeight: '100px', marginTop: '100px', marginLeft: '290px'}} alt=""/>
                  <img className="images2" src={basePng} alt="" style={{maxHeight: '300px', maxWidth: '300px', transform: 'rotateX(55deg) rotateY(0deg)'}}/>
              </div>
              <div className="images">
                  <img className="image3step step3" src={step1} style={{maxHeight: '100px', marginTop: '190px', zIndex: '30'}} alt=""/>
                  <img className="image3step step2" src={step1} style={{maxHeight: '100px', marginTop: '220px', zIndex: '20'}} alt=""/>
                  <img className="image3step step1" src={step1} style={{maxHeight: '100px', marginTop: '250px'}} alt=""/>
                  <img className="images3" src={basePng} alt="" style={{maxHeight: '300px', maxWidth: '300px', transform: 'rotateX(55deg) rotateY(0deg)'}}/>
              </div>
          </div>
      </div>
  </div>
  


  <div className="servicesbg">
      <div className="servicesfront">
  <div className="serviceshead">
      <div className="bars"></div>
      <div className="servicestext"> Services We Provide </div>
      <div className="bars"></div>
  </div>
  <div className="services">
      <div className="service s">
          <div className="serviceimg">
              <img src={icon1} alt=""/>
          </div>
          <div className="servicehead">Crypto Transactions</div>
          <div className="serviceexplain">
              <p>Explore the dynamic world of cryptocurrency transactions. Gain insights into market trends and make
                  informed decisions. Whether you're buying, selling, or holding, our platform ensures a seamless
                  experience for your crypto journey</p>
          </div>
          <div className="readmore">
              Read More
          </div>
      </div>
      <div className="service s">
          <div className="serviceimg">
              <img src={icon2} alt=""/>
          </div>
          <div className="servicehead">Crypto Exchange</div>
          <div className="serviceexplain">
              <p>Experience the seamless world of Crypto Exchange. Our platform provides a secure and efficient
                  environment for buying, selling, and trading various cryptocurrencies Stay ahead in the crypto
                  market with real-time updates and user-friendly features</p>
          </div>
          <div className="readmore colr">
              Read More
          </div>
      </div>
      <div className="service s">
          <div className="serviceimg">
              <img src={icon3} alt=""/>
          </div>
          <div className="servicehead">P2P tansfers</div>
          <div className="serviceexplain">
              <p>Empower your transactions with P2P transfers. Our platform ensures seamless and secure peer-to-peer
                  transfers, eliminating the need for intermediaries. Utilizing cutting-edge technology, we provide a
                  reliable and efficient solution for your needs</p>
          </div>
          <div className="readmore">
              Read More
          </div>
      </div>
  </div>
</div>
</div>



  <div className="serviceshead" style={{marginTop: '200px'}}>
      <div className="bars"></div>
      <div className="servicestext"> How It Work </div>
      <div className="bars"></div>
  </div>
  <div className="works">
      <div className="service hovr" style={{padding: '32px 10px'}}>
          <div className="serviceimg">
              <img src={img1} alt=""/>
          </div>
          <div className="servicehead">Make Payments</div>
          <div className="serviceexplain">
              <p>Facilitates seamless payments through a variety of payment methods </p>
          </div>
      </div>
      
      <div className="service hovr" style={{padding: '30px 10px', backgroundColor: '#009242'}}>
          <div className="serviceimg">
              <img src={img2} alt=""/>
          </div>
          <div className="servicehead">Create your offers</div>
          <div className="serviceexplain">
              <p>Optimize profits by setting custom prices for sales or purchasing currencies</p>
          </div>
      </div>
      <div className="service hovr" style={{padding: '30px 10px'}}>
          <div className="serviceimg">
              <img src={img3} alt=""/>
          </div>
          <div className="servicehead">Buy Or Sell Orders</div>
          <div className="serviceexplain">
              <p>Trade cryptocurrencies, capitalize on market movements, and hold for real-time profits</p>
          </div>
      </div>
  </div>
  <div className="buttons">
      <div className="readmore">
          Read More
      </div>
  </div>
  <div className="facts">
      <div className="container">
          <div className="row">
              <div className="col-md-12">
                  <h6 className="features_text">CryptoYard</h6>
                  <h1 className="features_taital">AWESOME FACTS</h1>
              </div>
          </div>
          <div className="features_section_2">
              <div className="row grid">
                  <div className="col">
                      <div className="icon_4"><img src={icon4} style={{height: '60px'}}/><span
                              className="padding15">1150</span></div>
                      <h6 className="project_text">TRANSACTIONS COMPLETED</h6>
                      <p className="hidden_text">Celebrate the successful completion of our latest transactions</p>
                  </div>
                  <div className="col">
                      <div className="icon_4"><img src={icon5} style={{height: '60px'}}/><span
                              className="padding15">5223</span></div>
                      <h6 className="project_text">HAPPY CLIENTS</h6>
                      <p className="hidden_text">Our clients who have experienced exceptional service</p>
                  </div>
                  <div className="col">
                      <div className="icon_4"><img src={icon6} style={{height: '60px'}}/><span
                              className="padding15">522</span></div>
                      <h6 className="project_text">WORKERS EMPLOYED</h6>
                      <p className="hidden_text">Discover the strength of our workforce, where transparency is key</p>
                  </div>
              </div>
          </div>
      </div>
  </div>
  


  <div className="serviceshead">
      <div className="bars"></div>
      <div className="servicestext">What Our Clients Say </div>
      <div className="bars"></div>
  </div>
  
  <div className="swiper-container">
      <div className="swiper-wrapper">
              <div className="swiper-slide">
              <img src={img3} alt=""/>
              <div className="clientname">John Doe</div>
              <div className="comment">I've been using this website for a few months now, and it has completely transformed my online experience. Highly recommend! </div>
          </div>
          <div className="swiper-slide">
              <img src={img1} alt=""/>
              <div className="clientname">Jane Smith</div>
              <div className="comment">The website's functionality is top-notch! Everything is intuitive and efficient. Great job to the development team!</div>
          </div> 
          <div className="swiper-slide">
              <img src={img2} alt=""/>
              <div className="clientname">Alex Johnson</div>
              <div className="comment">As a regular visitor, I appreciate the consistent updates and fresh content on this site. It's evident that the team behind it is dedicated to providing value to users.</div>
          </div>
      </div>
  </div>
   
  <footer>
      <div className="upper">
          <div className="about">
              <div className="header">
                  <div className="title">
                  <div className="footer-img">
                      <img src={logo} style={{height: '100%'}} alt=""/>
                  </div>
                      <div style={{display: 'flex'}}>
                      CryptoYard
                      </div>
                  </div>
                  <div className="pic logo_align"><img style={{height: '20px'}} src="/public/game.png" alt=""/></div>
              </div>
              <p className="texts">Cryptoyard is your one-stop destination for all things crypto, offering a user-friendly interface and real-time market data.</p>
          </div>
          <div className="about n nav">
              <nav>
                  <ul>
                      <li>Home</li>
                      <li>Games</li>
                      <li>Terms & Conditions</li>
                      <li>Contact Us</li>
                  </ul>
              </nav>
          </div>
          
          <div className="icons nav">
              <div className="title">Social Media</div>
              <div className="icons">
                  <ul>
                      <li>
                          <div className="youtube">
                              <i className="fa fa-youtube-play" aria-hidden="true"></i>
                          </div>
                      </li>
                      <li>
                          <div className="linkedin">
                              <i className="fa fa-linkedin-square" aria-hidden="true"></i>
                          </div>
                      </li>
                      <li>
                          <div className="github">
                              <i className="fa fa-github" aria-hidden="true"></i>
                          </div>
                      </li>
                      <li>
                          <div className="facebook">
                              <i className="fa fa-facebook-square" aria-hidden="true"></i>
                          </div>
                      </li>
                  </ul>
              </div>
          </div>
      </div> 
      <div className="baseline">Copyright © 2024 Crypto Yard - All Rights Reserved</div>
  </footer> 
  </body>
  </>
  );
}

export default Root;