

import React, { useState } from 'react';

import logoText from '../assets/logo_text.png';

import './styles/Header.css'


const Header = () => {

  const API_URL = "http://localhost:5056/api"
  
  const handleLogout = (e) => {
    fetch(API_URL + '/logout')
      .then(resp => resp.json())
      .then(data => {
        if (data) { // Assuming the server returns some data indicating successful logout
          // Redirect to the login page
          window.location.href = '/auth';
        }
      })
      .catch(error => {
        console.error('Error:', error);
        // Handle any errors that occur during the logout process
      });
  };
  

  return (
    <div className="bosy">
      <header>
        <div className="logotext">
          <a href="/home"><img src={logoText} alt="h" style={{ maxHeight: '70px' }} className='logo69'/></a>
        </div>
        <div className="header_nav">
          <nav className="navbar_header">
            <ul>
              <li><a href="/fast-trade">Buy Crypto</a></li>
              <li><a href="/market">Market</a></li>
              <li><a href="/trading?variableName=Bitcoin">Trade</a></li>
              <li><a href="/assets">Assets</a></li>
            </ul>
          </nav>
        </div>
        <div className="third_part">
          <a href="/auth"><div className="button" id='main-btnlogin' >Sign up/Login</div></a>
          <div className="button2" onClick={handleLogout}> Logout</div>
          <div className="loggedin"></div>
        </div>
      </header>
    </div>
  )
}

export default Header

