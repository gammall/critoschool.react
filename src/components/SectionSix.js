import React from 'react'

import img_arrowup from '../Assets/Images/arrow-up-right-svgrepo-com.svg'
import img_one from '../Assets/Images/img2.png'
import img_two from '../Assets/Images/img1.png'
import img_three from '../Assets/Images/img3.png'
import img_four from '../Assets/Images/img4.png'
import img_vector from '../Assets/Images/Vector.png'
import img_ellipseone from '../Assets/Images/Ellipse 1.png'
import img_ellipsetwo from '../Assets/Images/Ellipse 2.png'
import img_ellipsethree from '../Assets/Images/Ellipse 3.png'

const SectionSix = () => {
  return (
    <section className="section6">
        <div className="headerbtn">
        <div className="header-text">
            <p>Meet Our Team</p>
            <h1>Experience Team Members</h1>
        </div>
        <button className="browse-btn">Browse Team <img src={img_arrowup} alt=""/></button>
    </div>
    <div className="team">
        <div className="team1" id="team">
            <img src={img_one} alt=""/>
            <h1>Kristine Palmer</h1>
            <p>Chef Operation Officer</p>
        </div>
        <div className="team2" id="team">
            <img src={img_two} alt=""/>
            <h1>Mark Aubri</h1>
            <p>Senior Consultant</p>
        </div>
        <div className="team3" id="team">
            <img src={img_three} alt=""/>
            <h1>Kimberly Hansen</h1>
            <p>Senior Consultant</p>
        </div>
        <div className="team4" id="team">
            <img src={img_four} alt=""/>
            <h1>Justin Willoman</h1>
            <p>Senior Tech Consultant</p>
        </div>
    </div>
    <div className="clients-container">
        <div className="clients-header">
            <p>Testimonial</p>
            <h1>What Our Clients Says</h1>
        </div>
        <div className="clients">
        <div className="client1">
            <div className="rating">
            <img src={img_vector} alt=""/>
            <img src={img_vector} alt=""/>
            <img src={img_vector} alt=""/>
            <img src={img_vector} alt=""/>
            <img src={img_vector} alt=""/>
        </div>
        <p>"Lorem ipsum dolor, sit amet consectetur adipisicing elit. Laudantium libero, ad dignissimos velit qui, dolorum obcaecati cum saepe nesciunt nemo eligendi numquam voluptate"</p>
        <div id="client">
            <img src={img_ellipseone} alt=""/>
            <div className="client-role">
            <h1>Cassandra Warren</h1>
            <p>Business Manager, Dorfus</p>
        </div>
        </div>
        </div>
        <div className="client1">
            <div className="rating">
            <img src={img_vector} alt=""/>
            <img src={img_vector} alt=""/>
            <img src={img_vector} alt=""/>
            <img src={img_vector} alt=""/>
            <img src={img_vector} alt=""/>
        </div>
        <p>"Lorem ipsum dolor, sit amet consectetur adipisicing elit. Laudantium libero, ad dignissimos velit qui, dolorum obcaecati cum saepe nesciunt nemo eligendi numquam voluptate"</p>
            <div id="client">
                <img src={img_ellipsetwo} alt=""/>
                <div className="client-role">
                <h1>Amanda Tulling</h1>
                <p>Senior Developer, Square</p>
            </div>
            </div>
        </div>
        <div className="client1">
            <div className="rating">
            <img src={img_vector} alt=""/>
            <img src={img_vector} alt=""/>
            <img src={img_vector} alt=""/>
            <img src={img_vector} alt=""/>
            <img src={img_vector} alt=""/>
        </div>
        <p>"Lorem ipsum dolor, sit amet consectetur adipisicing elit. Laudantium libero, ad dignissimos velit qui, dolorum obcaecati cum saepe nesciunt nemo eligendi numquam voluptate"</p>
            <div id="client">
                <img src={img_ellipsethree} alt=""/>
                <div className="client-role">
                <h1>Jack McDogglas</h1>
                <p>Key Account Manager, Gobona</p>
            </div>
            </div>
        </div>
    </div>
    <button id="btn">All Reviews <img src={img_arrowup} alt=""/></button>
</div>
    </section>
  )
}

export default SectionSix