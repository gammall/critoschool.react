import React from 'react'

import img_logo from '../Assets/Images/Logo.svg'
import img_facebook from '../Assets/Images/icons8-facebook.svg'
import img_twitter from '../Assets/Images/icons8-twitter.svg'
import img_instagram from '../Assets/Images/icons8-instagram.svg'
import img_linkedin from '../Assets/Images/icons8-linkedin.svg'

const Footer = () => {
  return (
    <section className="section9">
    <div className="section9-info">
        <div className="container9-logo">           
            <div className="logo">
                <img src={img_logo} className="logo-icon" alt=""/>
                    <div className="logo-text">
                        <h1>Crito</h1>
                        <p>Agency Service</p>
                    </div>
            </div>
        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Placeat obcaecati voluptas voluptates! Voluptates laborum nam ratione minus necessitatibus, iure praesentium.</p>
    </div>
    <div className="company" id="container9-info">
        <h1>Company</h1>
        <a href="">About</a>
        <a href="">Features</a>
        <a href="">Works</a>
        <a href="">Career</a>
    </div>
    <div className="help" id="container9-info">
        <h1>Help</h1>
        <a href="">Customer Support</a>
        <a href="">Delivery Details</a>
        <a href="">Terms & Conditions</a>
        <a href="">Privacy Policy</a>
    </div>
    <div className="resources" id="container9-info">
        <h1>Resources</h1>
        <a href="">Free Ebooks</a>
        <a href="">Developement Tutorial</a>
        <a href="">How to - Blog</a>
        <a href="">Youtube Playlist</a>
    </div>
    <div className="link" id="container9-info">
        <h1>Link</h1>
        <a href="">Free eBooks</a>
        <a href="">Developement Tutorial</a>
        <a href="">How to - Blog</a>
        <a href="">Youtube Playlist</a>
    </div>
</div>
<div className="bottom-links">
    <div className="bottom-links-text">
        <p>© 2023 Crito - Consulting Company Inc. All Rights Reserved.</p>
    </div>
    <div className="socials">
        <img src={img_facebook} className="facebook" alt=""/>
        <img src={img_twitter} classs="twitter" alt=""/>
        <img src={img_instagram} className="instagram" alt=""/>
        <img src={img_linkedin} classs="linkedin" alt=""/>
    </div>
</div>
</section>
  )
}

export default Footer