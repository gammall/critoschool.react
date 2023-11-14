import React from 'react'

import img_business from '../Assets/Images/Image(3).png'
import img_arrowup from '../Assets/Images/arrow-up-right-svgrepo-com.svg'

const SectionFive = () => {
  return (
    <section className="section5">
        <div className="section5-container1">
            <div className="section5-text-header">
            <p>Project & Case Studies</p>
            <h1>Let’s Looks Our Global Projects</h1>
        </div>
        <div className="container5-articles">
            <div className="article1" id="article">
                <img src={img_business} alt=""/>
                <div id="article-text">
                <p>Grow your business</p>
            </div>
            <div className="article-btn">
                <button id="read-more">Read More <img src={img_arrowup} alt=""/></button>
            </div>
            </div>
            <div className="article1" id="article">
                <img src={img_business} alt=""/>
                <div id="article-text">
                <p>Why your client needs a responsive website</p>
            </div>
            <div className="article-btn">
                <button id="read-more">Read More <img src={img_arrowup} alt=""/></button>
            </div>
            </div>
            <div className="article1" id="article">
                <img src={img_business} alt=""/>
                <div id="article-text">
                <p>Educate your employees to get better results</p>
            </div>
            <div className="article-btn">
                <button id="read-more">Read More <img src={img_arrowup} alt=""/></button>
            </div>
            </div>
            <div className="article1" id="article">
                <img src={img_business} alt=""/>
                <div id="article-text">
                <p>Business Insights is a important piece of your business</p>
            </div>
            <div className="article-btn">
                <button id="read-more">Read More <img src={img_arrowup} alt=""/></button>
            </div>
            </div>
            <div className="last-btn">
    <button className="container5-last-btn">All Recent Projects <img src={img_arrowup} alt=""/></button>
</div>        
</div>
        </div>
    </section>
  )
}

export default SectionFive