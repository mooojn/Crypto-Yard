import React from 'react'

import logo from '../assets/logo_only.png'

import './styles/Footer.css'


const Footer = () => {
  return (
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
  )
}

export default Footer