import React from 'react'

import img_thumbup from '../Assets/Images/thumbs-up.png'
import img_shield from '../Assets/Images/shield.png'
import img_pen from '../Assets/Images/pen.png'
import img_head from '../Assets/Images/head.png'
import img_office from '../Assets/Images/section4-office.png'

const SectionFour = () => {
  return (
    <section className="section4">
        <div className="container1-section4">
            <div className="left-container">
            <div className="text-left">
                <p>Why Choose Us</p>
                <h1>Why We Are The <br /> Best Business Consulting Agency</h1>
            </div>
            <div className="thumbs-up">
                <img src={img_thumbup} alt=""/>
                <div className="text">
                    <h1>Process Excellence</h1>
                    <p>Lorem ipsum dolor sit amet consectetur.</p>
                </div>  
            </div>
            <div className="thumbs-up">
                <img src={img_shield} alt=""/> 
                <div className="text">
                    <h1>Strategic Planning</h1>
                    <p>Lorem ipsum dolor sit amet consectetur.</p>
                </div>  
            </div>
            <div className="thumbs-up">
                <img src={img_pen} alt=""/>
                <div className="text">
                    <h1>Experience Design</h1>
                    <p>Lorem ipsum dolor sit amet consectetur.</p>
                </div>  
            </div>
            <div className="thumbs-up">
                <img src={img_head} alt=""/>
                <div className="text">
                    <h1>Artificial Inteligence</h1>
                    <p>Lorem ipsum dolor sit amet consectetur.</p>
                </div>  
            </div>
        </div>
        <div className="right-container">
            <img src={img_office} alt=""/>
        </div>
        </div>
    </section>
  )
}

export default SectionFour