import React from 'react'

import '../views/Home.css'
import '../components/Button.css'
import '../views/Contacts.css'

import img_phone from '../Assets/Images/phone-call-svgrepo-com.svg'
import img_email from '../Assets/Images/mail-alt-svgrepo-com.svg'
import img_location from '../Assets/Images/location-pin-alt-svgrepo-com.svg'
import img_facebook from '../Assets/Images/icons8-facebook.svg'
import img_twitter from '../Assets/Images/icons8-twitter.svg'
import img_instagram from '../Assets/Images/icons8-instagram.svg'
import img_linkedin from '../Assets/Images/icons8-linkedin.svg'
import img_arrowup from '../Assets/Images/arrow-up-right-svgrepo-com.svg'
import img_logo from '../Assets/Images/Logo.svg'

const NavigationBar = () => {
  return (
    <div className="navigation-bar">
    <div className="header">
        <div className="box" id="logo">            
            <div className="logo">
                <img src={img_logo} className="logo-icon" alt=""/>
                    <div className="logo-text">
                        <h1>Crito</h1>
                        <p>Agency Service</p>
                    </div>
            </div>
        </div>
        <div className="box" id="contact">
            <div className="contact">
                <div className="phone">
                    <img src={img_phone} className="phone-image" alt=""/>
                    <p>+46(8) 121 470 50</p>
                </div>
                <div className="email">
                    <img src={img_email} className="email-image" alt=""/>
                    <p>info@crito.com</p>
                </div>
                <div className="location">
                    <img src={img_location} className="pin-image" alt=""/>
                    <p>Sveavagen 31, 111 34 STOCKHOLM</p>
                </div>
            </div>
        </div>
        <div className="box" id="social-media">                
            <div className="socials">
                <img src={img_facebook} className="facebook" alt=""/>
                <img src={img_twitter} classs="twitter" alt=""/>
                <img src={img_instagram} className="instagram" alt=""/>
                <img src={img_linkedin} classs="linkedin" alt=""/>
            </div>
        </div>
        <div className="box" id="nav-bar">                    
            <div className="nav-bar">
                <li><a href="/">Home</a></li>
                <li><a href="">Service</a></li>
                <li><a href="">News</a></li>
                <li><a href="./Contacts">Contact</a></li>
            </div>
        </div>
        <div className="box" id="login-btn">
            <button id="btn" className="log-in-button" href="">Login<img src={img_arrowup} alt=""/></button>
        </div>
    </div>
</div>
  )
}

export default NavigationBar