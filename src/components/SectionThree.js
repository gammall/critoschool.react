import React from 'react'

import img_arrowup from '../Assets/Images/arrow-up-right-svgrepo-com.svg'

const SectionThree = () => {
  return (
    <section className="section3">
        <div className="container-section3">
            <div className="header-text">
            <p>Our Services</p>
            <h1>We Provide The Best Service For Consulting</h1>
        </div>
            <div className="services">
                <div className="advice">
                    <h1>Business Advice</h1>
                    <p>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Doloremque illo aperiam voluptates.</p>
                    <button id="btn" className="play-btn"><img src={img_arrowup} alt=""/></button>
                </div>
                <div className="startup">
                    <h1>Startup Business</h1>
                    <p>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Consectetur ex facilis unde.</p>
                    <button id="btn" className="play-btn"><img src={img_arrowup} alt=""/></button>
                </div>
                <div className="financial">
                    <h1>Financial Advice</h1>
                    <p>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Facere doloribus ducimus unde.</p>
                    <button id="btn" className="play-btn"><img src={img_arrowup} alt=""/></button>
                </div>
                <div className="risk">
                    <h1>Risk Management</h1>
                    <p>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Placeat facilis illo minima.</p>
                    <button id="btn" className="play-btn"><img src={img_arrowup} alt=""/></button>
                </div>
            </div>
        </div>
        <button id="btn" className="learn-btn">Browse Services<img src={img_arrowup} alt=""/></button>
    </section>
  )
}

export default SectionThree