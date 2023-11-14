import React from 'react'

import img_arrowup from '../Assets/Images/arrow-up-right-svgrepo-com.svg'
import img_certificate from '../Assets/Images/certificate-check-svgrepo-com.svg'
import img_dazzling from '../Assets/Images/dazzling-star-svgrepo-com.svg'
import img_chart from '../Assets/Images/chart-pipe-svgrepo-com.svg'
import img_scale from '../Assets/Images/scale-balanced-svgrepo-com.svg'
import img_founder from '../Assets/Images/Image(2).png'
import img_play from '../Assets/Images/play-svgrepo-com.svg'


const SectionTwo = () => {
  return (
    <section className="section2">
        <div className="section2-header">
            <h1>LOGO1</h1>
            <h1>LOGO2</h1>
            <h1>LOGO3</h1>
            <h1>LOGO4</h1>
            <h1>LOGO5</h1>
        </div>
        <div className="section2-container">
            <div className="service-left">
                <p>Features</p>
                <h1>Our Accounting is trusted by thousand of companies</h1>
                <button id="btn">Learn More<img src={img_arrowup} alt=""/></button>
            </div>
            <div className="service-right">
                <div className="business-advice">
                    <img src={img_certificate} alt=""/>
                    <h1>Business Advice</h1>
                    <p>Lorem ipsum dolor sit amet consectetur adipisicing elit.</p>
                </div>
                <div className="startup-business">
                    <img src={img_dazzling} alt=""/>
                    <h1>Startup Business</h1>
                    <p>Lorem ipsum dolor sit amet consectetur, adipisicing elit.</p>
                </div>
                <div className="financial-advice">
                    <img src={img_chart} alt=""/>
                    <h1>Financial Advice</h1>
                    <p>Lorem ipsum dolor sit, amet consectetur adipisicing elit.</p>
                </div>
                <div className="risk-management">
                    <img src={img_scale} alt=""/>
                    <h1>Risk Management</h1>
                    <p>Lorem ipsum dolor sit amet consectetur adipisicing elit.</p>
                </div>
            </div>
        </div>
        <div className="container2">
        <div className="about-left">
            <img src={img_founder} alt=""/>
            <div className="blue-container"><h1>Samantha Brown, Founder</h1>
            <p>Lorem ipsum dolor sit amet consectetur adipisicing.</p></div>
        </div>
        <div className="about-right">
            <p id="p-red">About Company</p>
            <h1>We Are Business Consulting & Credit Repair Experts</h1>
            <p id="p-black">Lorem ipsum dolor sit amet, consectetur adipisicing elit. Quos, ipsa? Voluptas quibusdam iste nesciunt cupiditate quaerat non doloremque? Vero, deserunt.</p>
            <p id="p-black">Lorem ipsum dolor, sit amet consectetur adipisicing elit. Eos quidem blanditiis nisi ducimus perferendis exercitationem, saepe velit maiores?</p>
            <div className="btns">
            <button id="btn" className="learn-btn">Learn More<img src={img_arrowup} alt=""/></button>
            <button id="btn" className="play-btn"><img src={img_play} alt=""/></button><p>Intro Video</p>
        </div>
        </div>
    </div>
    </section>
  )
}

export default SectionTwo