import React from 'react'

import img_arrowup from '../Assets/Images/arrow-up-right-svgrepo-com.svg'
import img_container from '../Assets/Images/container7-img1.png'

const SectionSeven = () => {
  return (
    <section className="section7">
        <div className="container6-header">
            <div className="header-text">
            <p>Article & News</p>
            <h1>Get Every Single Articles & News</h1>
        </div>
        <button id="btn">Browse Articles <img src={img_arrowup} alt=""/></button>
        </div>
        <div className="articles">
        <div className="article1">
            <img src={img_container} alt=""/>
            <p>Business</p>
            <h1>How To Use Digitalization In The Classroom</h1>
            <h2>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Architecto sed hic libero.</h2>
        </div>
        <div className="article2">
            <img src={img_container} alt=""/>
            <p>Business</p>
            <h1>How To Use Digitalization In The Classroom</h1>
            <h2>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Architecto sed hic libero.</h2>
        </div>
        <div className="article3">
            <img src={img_container} alt=""/>
            <p>Business</p>
            <h1>How To Use Digitalization In The Classroom</h1>
            <h2>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Architecto sed hic libero.</h2>
        </div>
    </div>
    </section>
  )
}

export default SectionSeven