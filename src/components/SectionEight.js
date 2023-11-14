import React from 'react'

import img_arrowup from '../Assets/Images/arrow-up-right-svgrepo-com.svg'

const SectionEight = () => {
  return (
    <section className="section8">
        <div className="section8-contact">
            <h1>Get News Updates By Signup</h1>
            <input type="email" id="email-contact" placeholder="username@domain.com" />
            <button id="btn">Subscribe <img src={img_arrowup} alt=""/></button>
        </div>
    </section>
  )
}

export default SectionEight