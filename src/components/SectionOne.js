import React from 'react'

import img_arrowup from '../Assets/Images/arrow-up-right-svgrepo-com.svg'
import img_officeguy from '../Assets/Images/Image.png'

const SectionOne = () => {
  return (
    <section className="section1">
        <div className="text-header">
            <h1>We provide The Best business solutions</h1>
            <p>Establish your vision and value proposition and turn them into testable prototypes.</p>
        <div className="service-btn">
            <button id="btn" className="consult-btn">Get Consulting<img src={img_arrowup} alt=""/></button>
            <button id="btn" className="learn-btn">Learn More<img src={img_arrowup} alt=""/></button>
        </div>
        </div>
        <div className="image-header">
            <img src={img_officeguy} className="office-guy-image" alt=""/>
        </div>
    </section>
  )
}

export default SectionOne