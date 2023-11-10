import React, { useState } from 'react'
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
import img_map from '../Assets/Images/map-image.png'

const Contacts = () => {

    const [name, setName] = useState('')
    const [email, setEmail] = useState('')
    const [message, setMessage] = useState('')


    const handleSubmit = async (e) => {
      e.preventDefault()


      const user = {name, email, message}
      const json = JSON.stringify(user)


      const result = await fetch('https://win23-assignment.azurewebsites.net/api/contactform', {
        method: "POST", 
        headers: {"Content-Type": "application/json"}, 
        body: json
      })

      switch (result.status) {
        case 200:
          alert('Tack för ditt meddelande!')
          break
        case 400:
          alert(`något gick fel, vänligen prova igen`)
          break
      }
    }


  return (
  <div className="body">
    <main>
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
  <div className="sectiontwo">
    <h1>Lets Connect</h1>
  </div>
    <div className="sectionthree">
      <div className="Contact-box">
    <div className="container1" id="container"></div>
    <div className="container2" id="container"></div>
    <div className="container3" id="container"></div>
    </div>
    <form noValidate onSubmit={handleSubmit} className="RegForm">
      <div className="header-form">
        <h1>Leave us a message for any information.</h1>
      </div>
      <input type="text" placeholder="Enter your name" value={name} onChange={(e) => setName(e.target.value)} id="Name"></input>
      <input type="email" placeholder="Enter your email" value={email} onChange={(e) => setEmail(e.target.value)} id="Email"></input>
      <input type="text" placeholder="Enter a message" className="input-message" value={message} onChange={(e) => setMessage(e.target.value)} id="Message"></input>
      <button className="submit-button" id="btn" type="submit">Submit</button>
    </form>
    </div>
    <div className="sectionfour">
      <img src={img_map} alt="" />
    </div>
  </main>
</div>
  )
}

export default Contacts