

import React from 'react'
import logoText from '../assets/logo_text.png';

import './styles/Header.css'


const Header = () => {
  return (
    
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
    </div>
  )
}

export default Header

