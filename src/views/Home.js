import React from 'react'
import '../views/Home.css'
import '../components/Button.css'

import img_phone from '../Assets/Images/phone-call-svgrepo-com.svg'
import img_email from '../Assets/Images/mail-alt-svgrepo-com.svg'
import img_location from '../Assets/Images/location-pin-alt-svgrepo-com.svg'
import img_facebook from '../Assets/Images/icons8-facebook.svg'
import img_twitter from '../Assets/Images/icons8-twitter.svg'
import img_instagram from '../Assets/Images/icons8-instagram.svg'
import img_linkedin from '../Assets/Images/icons8-linkedin.svg'
import img_arrowup from '../Assets/Images/arrow-up-right-svgrepo-com.svg'
import img_logo from '../Assets/Images/Logo.svg'
import img_officeguy from '../Assets/Images/Image.png'

const Home = () => {
  return (
<div className='body'>
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
                <button id="btn">Learn More<img src="./images/arrow-up-right-svgrepo-com.svg" alt=""/></button>
            </div>
            <div className="service-right">
                <div className="business-advice">
                    <img src="./images/certificate-check-svgrepo-com.svg" alt=""/>
                    <h1>Business Advice</h1>
                    <p>Lorem ipsum dolor sit amet consectetur adipisicing elit.</p>
                </div>
                <div className="startup-business">
                    <img src="./images/dazzling-star-svgrepo-com.svg" alt=""/>
                    <h1>Startup Business</h1>
                    <p>Lorem ipsum dolor sit amet consectetur, adipisicing elit.</p>
                </div>
                <div className="financial-advice">
                    <img src="./images/chart-pipe-svgrepo-com.svg" alt=""/>
                    <h1>Financial Advice</h1>
                    <p>Lorem ipsum dolor sit, amet consectetur adipisicing elit.</p>
                </div>
                <div className="risk-management">
                    <img src="./images/scale-balanced-svgrepo-com.svg" alt=""/>
                    <h1>Risk Management</h1>
                    <p>Lorem ipsum dolor sit amet consectetur adipisicing elit.</p>
                </div>
            </div>
        </div>
        <div className="container2">
        <div className="about-left">
            <img src="./images/Image(2).png" alt=""/>
            <div className="blue-container"><h1>Samantha Brown, Founder</h1>
            <p>Lorem ipsum dolor sit amet consectetur adipisicing.</p></div>
        </div>
        <div className="about-right">
            <p id="p-red">About Company</p>
            <h1>We Are Business Consulting & Credit Repair Experts</h1>
            <p id="p-black">Lorem ipsum dolor sit amet, consectetur adipisicing elit. Quos, ipsa? Voluptas quibusdam iste nesciunt cupiditate quaerat non doloremque? Vero, deserunt.</p>
            <p id="p-black">Lorem ipsum dolor, sit amet consectetur adipisicing elit. Eos quidem blanditiis nisi ducimus perferendis exercitationem, saepe velit maiores?</p>
            <div className="btns">
            <button id="btn" className="learn-btn">Learn More<img src="./images/arrow-up-right-svgrepo-com.svg" alt=""/></button>
            <button id="btn" className="play-btn"><img src="./images/play-svgrepo-com.svg" alt=""/></button><p>Intro Video</p>
        </div>
        </div>
    </div>
    </section>
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
                    <button id="btn" className="play-btn"><img src="./images//arrow-sm-right-svgrepo-com.svg" alt=""/></button>
                </div>
                <div className="startup">
                    <h1>Startup Business</h1>
                    <p>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Consectetur ex facilis unde.</p>
                    <button id="btn" className="play-btn"><img src="./images//arrow-sm-right-svgrepo-com.svg" alt=""/></button>
                </div>
                <div className="financial">
                    <h1>Financial Advice</h1>
                    <p>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Facere doloribus ducimus unde.</p>
                    <button id="btn" className="play-btn"><img src="./images//arrow-sm-right-svgrepo-com.svg" alt=""/></button>
                </div>
                <div className="risk">
                    <h1>Risk Management</h1>
                    <p>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Placeat facilis illo minima.</p>
                    <button id="btn" className="play-btn"><img src="./images//arrow-sm-right-svgrepo-com.svg" alt=""/></button>
                </div>
            </div>
        </div>
        <button id="btn" className="learn-btn">Browse Services<img src="./images/arrow-up-right-svgrepo-com.svg" alt=""/></button>
    </section>
    <section className="section4">
        <div className="container1-section4">
            <div className="left-container">
            <div className="text-left">
                <p>Why Choose Us</p>
                <h1>Why We Are The <br /> Best Business Consulting Agency</h1>
            </div>
            <div className="thumbs-up">
                <img src="./images/thumbs-up.png" alt=""/>
                <div className="text">
                    <h1>Process Excellence</h1>
                    <p>Lorem ipsum dolor sit amet consectetur.</p>
                </div>  
            </div>
            <div className="thumbs-up">
                <img src="./images/shield.png" alt=""/>
                <div className="text"> alt=""/
                    <h1>Strategic Planning</h1>
                    <p>Lorem ipsum dolor sit amet consectetur.</p>
                </div>  
            </div>
            <div className="thumbs-up">
                <img src="./images/pen.png" alt=""/>
                <div className="text">
                    <h1>Experience Design</h1>
                    <p>Lorem ipsum dolor sit amet consectetur.</p>
                </div>  
            </div>
            <div className="thumbs-up">
                <img src="./images/head.png" alt=""/>
                <div className="text">
                    <h1>Artificial Inteligence</h1>
                    <p>Lorem ipsum dolor sit amet consectetur.</p>
                </div>  
            </div>
        </div>
        <div className="right-container">
            <img src="./images/section4-office.png" alt=""/>
        </div>
        </div>
    </section>
    <section className="section5">
        <div className="section5-container1">
            <div className="section5-text-header">
            <p>Project & Case Studies</p>
            <h1>Let’s Looks Our Global Projects</h1>
        </div>
        <div className="container5-articles">
            <div className="article1" id="article">
                <img src="./images/Image(3).png" alt=""/>
                <div id="article-text">
                <p>Grow your business</p>
            </div>
            <div className="article-btn">
                <button id="read-more">Read More <img src="./images/arrow-sm-right-svgrepo-com.svg" alt=""/></button>
            </div>
            </div>
            <div className="article1" id="article">
                <img src="./images/pencil.png" alt=""/>
                <div id="article-text">
                <p>Why your client needs a responsive website</p>
            </div>
            <div className="article-btn">
                <button id="read-more">Read More <img src="./images/arrow-sm-right-svgrepo-com.svg" alt=""/></button>
            </div>
            </div>
            <div className="article1" id="article">
                <img src="./images/paper.png" alt=""/>
                <div id="article-text">
                <p>Educate your employees to get better results</p>
            </div>
            <div className="article-btn">
                <button id="read-more">Read More <img src="./images/arrow-sm-right-svgrepo-com.svg" alt=""/></button>
            </div>
            </div>
            <div className="article1" id="article">
                <img src="./images/Image(1).png" alt=""/>
                <div id="article-text">
                <p>Business Insights is a important piece of your business</p>
            </div>
            <div className="article-btn">
                <button id="read-more">Read More <img src="./images/arrow-sm-right-svgrepo-com.svg" alt=""/></button>
            </div>
            </div>
            <div className="last-btn">
    <button className="container5-last-btn">All Recent Projects <img src="./images/arrow-sm-right-svgrepo-com.svg" alt=""/></button>
</div>        
</div>
        </div>
    </section>
    <section className="section6">
        <div className="headerbtn">
        <div className="header-text">
            <p>Meet Our Team</p>
            <h1>Experience Team Members</h1>
        </div>
        <button className="browse-btn">Browse Team <img src="./images/arrow-sm-right-svgrepo-com.svg" alt=""/></button>
    </div>
    <div className="team">
        <div className="team1" id="team">
            <img src="./images/img2.png" alt=""/>
            <h1>Kristine Palmer</h1>
            <p>Chef Operation Officer</p>
        </div>
        <div className="team2" id="team">
            <img src="./images/img1.png" alt=""/>
            <h1>Mark Aubri</h1>
            <p>Senior Consultant</p>
        </div>
        <div className="team3" id="team">
            <img src="./images/img3.png" alt=""/>
            <h1>Kimberly Hansen</h1>
            <p>Senior Consultant</p>
        </div>
        <div className="team4" id="team">
            <img src="./images/img4.png" alt=""/>
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
            <img src="./images/Vector.png" alt=""/>
            <img src="./images/Vector.png" alt=""/>
            <img src="./images/Vector.png" alt=""/>
            <img src="./images/Vector.png" alt=""/>
            <img src="./images/Vector.png" alt=""/>
        </div>
        <p>"Lorem ipsum dolor, sit amet consectetur adipisicing elit. Laudantium libero, ad dignissimos velit qui, dolorum obcaecati cum saepe nesciunt nemo eligendi numquam voluptate"</p>
        <div id="client">
            <img src="./images/Ellipse 1.png" alt=""/>
            <div className="client-role">
            <h1>Cassandra Warren</h1>
            <p>Business Manager, Dorfus</p>
        </div>
        </div>
        </div>
        <div className="client1">
            <div className="rating">
            <img src="./images/Vector.png" alt=""/>
            <img src="./images/Vector.png" alt=""/>
            <img src="./images/Vector.png" alt=""/>
            <img src="./images/Vector.png" alt=""/>
            <img src="./images/Vector.png" alt=""/>
        </div>
        <p>"Lorem ipsum dolor, sit amet consectetur adipisicing elit. Laudantium libero, ad dignissimos velit qui, dolorum obcaecati cum saepe nesciunt nemo eligendi numquam voluptate"</p>
            <div id="client">
                <img src="./images/Ellipse 2.png" alt=""/>
                <div className="client-role">
                <h1>Amanda Tulling</h1>
                <p>Senior Developer, Square</p>
            </div>
            </div>
        </div>
        <div className="client1">
            <div className="rating">
            <img src="./images/Vector.png" alt=""/>
            <img src="./images/Vector.png" alt=""/>
            <img src="./images/Vector.png" alt=""/>
            <img src="./images/Vector.png" alt=""/>
            <img src="./images/Vector.png" alt=""/>
        </div>
        <p>"Lorem ipsum dolor, sit amet consectetur adipisicing elit. Laudantium libero, ad dignissimos velit qui, dolorum obcaecati cum saepe nesciunt nemo eligendi numquam voluptate"</p>
            <div id="client">
                <img src="./images/Ellipse 3.png" alt=""/>
                <div className="client-role">
                <h1>Jack McDogglas</h1>
                <p>Key Account Manager, Gobona</p>
            </div>
            </div>
        </div>
    </div>
    <button id="btn">All Reviews <img src="./images/arrow-sm-right-svgrepo-com.svg" alt=""/></button>
</div>
    </section>
    <section className="section7">
        <div className="container6-header">
            <div className="header-text">
            <p>Article & News</p>
            <h1>Get Every Single Articles & News</h1>
        </div>
        <button id="btn">Browse Articles <img src="./images/arrow-sm-right-svgrepo-com.svg" alt=""/></button>
        </div>
        <div className="articles">
        <div className="article1">
            <img src="./images/container7-img1.png" alt=""/>
            <p>Business</p>
            <h1>How To Use Digitalization In The Classroom</h1>
            <h2>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Architecto sed hic libero.</h2>
        </div>
        <div className="article2">
            <img src="./images/container7-img2.png" alt=""/>
            <p>Business</p>
            <h1>How To Use Digitalization In The Classroom</h1>
            <h2>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Architecto sed hic libero.</h2>
        </div>
        <div className="article3">
            <img src="./images/container7-img3.png" alt=""/>
            <p>Business</p>
            <h1>How To Use Digitalization In The Classroom</h1>
            <h2>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Architecto sed hic libero.</h2>
        </div>
    </div>
    </section>
    <section className="section8">
        <div className="section8-contact">
            <h1>Get News Updates By Signup</h1>
            <input type="email" id="email-contact" placeholder="username@domain.com" />
            <button id="btn">Subscribe <img src="./images/arrow-sm-right-svgrepo-com.svg" alt=""/></button>
        </div>
    </section>
    <section className="section9">
        <div className="section9-info">
        <div className="container9-logo">           
            <div className="logo">
                <img src="./images/Logo.svg" className="logo-icon" alt=""/>
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
        <img src="./images/icons8-facebook.svg" className="facebook" alt=""/>
        <img src="./images/icons8-twitter.svg" classs="twitter" alt=""/>
        <img src="./images/icons8-instagram.svg" className="instagram" alt=""/>
        <img src="./images/icons8-linkedin.svg" classs="linkedin" alt=""/>
    </div>
</div>
    </section>
</main>
</div>
  )
}

export default Home