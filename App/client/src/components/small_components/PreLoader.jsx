import React, { useEffect } from 'react';


import logo from '../assets/logo_only.png'
import logoText from '../assets/logo_text.png'


import './styles/Preloader.css'

function Preloader() {
    // Preloader handling
    useEffect(() => {

        window.addEventListener("load", function () {
            var preloader = document.getElementById("preloader");
            preloader.classList.add("fade-out");
            setTimeout(function () {
                preloader.style.display = "none";
            }, 1000);
        });
    }, []);


    return (

        <>
            <div id="preloader">
                <div className="uptext">
                    <div className="logo"><img src={logo} alt="" /></div>
                    <div className="logo_text"><img src={logoText} alt="" /></div>
                </div>
                <div className="loading">
                    <div className="text">
                        Loading
                    </div>
                    <div className="loader"></div>
                </div>
            </div>

        </>
    )
}

export default Preloader;