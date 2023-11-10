import React from 'react'
import '../views/Home.css'
import '../components/Button.css'

import img_arrowup from '../Assets/Images/arrow-up-right-svgrepo-com.svg'
import img_officeguy from '../Assets/Images/Image.png'
import img_certificate from '../Assets/Images/certificate-check-svgrepo-com.svg'
import img_dazzling from '../Assets/Images/dazzling-star-svgrepo-com.svg'
import img_chart from '../Assets/Images/chart-pipe-svgrepo-com.svg'
import img_scale from '../Assets/Images/scale-balanced-svgrepo-com.svg'
import img_founder from '../Assets/Images/Image(2).png'
import img_play from '../Assets/Images/play-svgrepo-com.svg'
import img_thumbup from '../Assets/Images/thumbs-up.png'
import img_shield from '../Assets/Images/shield.png'
import img_pen from '../Assets/Images/pen.png'
import img_head from '../Assets/Images/head.png'
import img_office from '../Assets/Images/section4-office.png'
import img_business from '../Assets/Images/Image(3).png'
import img_one from '../Assets/Images/img2.png'
import img_two from '../Assets/Images/img1.png'
import img_three from '../Assets/Images/img3.png'
import img_four from '../Assets/Images/img4.png'
import img_vector from '../Assets/Images/Vector.png'
import img_ellipseone from '../Assets/Images/Ellipse 1.png'
import img_ellipsetwo from '../Assets/Images/Ellipse 2.png'
import img_ellipsethree from '../Assets/Images/Ellipse 3.png'
import img_container from '../Assets/Images/container7-img1.png'

import NavigationBar from '../components/NavigationBar'
import Footer from '../components/Footer'

const Home = () => {
  return (
<div className='body'>
    <main>
        <NavigationBar />
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
    <section className="section8">
        <div className="section8-contact">
            <h1>Get News Updates By Signup</h1>
            <input type="email" id="email-contact" placeholder="username@domain.com" />
            <button id="btn">Subscribe <img src={img_arrowup} alt=""/></button>
        </div>
    </section>
    <Footer />
</main>
</div>
  )
}

export default Home