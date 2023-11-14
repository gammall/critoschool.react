import React, { useState } from 'react'
import '../views/Home.css'
import '../components/Button.css'
import '../views/Contacts.css'

import img_arrowup from '../Assets/Images/arrow-up-right-svgrepo-com.svg'

import img_map from '../Assets/Images/map-image.png'
import NavigationBar from '../components/NavigationBar'
import Footer from '../components/Footer'

const Contacts = () => {

    const [name, setName] = useState('')
    const [email, setEmail] = useState('')
    const [message, setMessage] = useState('')
    const [nameError, setNameError] = useState(false)
    const [emailError, setEmailError] = useState(false)
    const [messageError, setMessageError] = useState(false)


{/* /////////////////////////////////////////////////////////////      FORM VALIDATION       ////////////////////////////////////////////// */}
  const handleChange = (e) => {

    switch (e.target.id) {
      case 'Name':
        setName(e.target.value)
        setNameError(validateLength(e.target.value))
        break
      
      case 'Email':
        setEmail(e.target.value)
        setEmailError(validateLength(e.target.value))
        break

      case 'Message':
        setMessage(e.target.value)
        setMessageError(validateLength(e.target.value))
        break
    }

  }


    const validateLength = (value) => {
      if (value.length < 1)
      return true
    return false
    }

    {/* /////////////////////////////////////////////////////////////          ON SUBMIT          ////////////////////////////////////////// */}

    const handleSubmit = async (e) => {
      e.preventDefault()

      const user = {name, email, message}
      const json = JSON.stringify(user)


      if (!validateLength) {
        alert("Please fill in all the information below")
      }
      else {

      const result = await fetch('https://win23-assignment.azurewebsites.net/api/contactform', {
        method: "POST", 
        headers: {"Content-Type": "application/json"}, 
        body: json
      })

      switch (result.status) {
        case 200:
          alert('Tack för ditt meddelande!')
          break
        case 400:
          alert(`något gick fel, vänligen prova igen`)
          break
      }
    }
  }
  
  return (
  <div className="body">
    <main>
        <NavigationBar />
  <div className="sectiontwo">
    <h1>Lets Connect</h1>
  </div>
    <div className="sectionthree">
      <div className="Contact-box">
    <div className="container1" id="container">
      <div id="circle"><img src={img_arrowup} alt="" /></div>
      <div id="text">
        <h1>Visit us</h1>
        <p>Sveavägen 31</p>
        <p>111 34 STOCKHOLM</p>
      </div>
    </div>
    <div className="container2" id="container">
    <div id="circle"><img src={img_arrowup} alt="" /></div>
      <div id="text">
        <h1>Call us</h1>
        <p>Sveavägen 31</p>
        <p>111 34 STOCKHOLM</p>
      </div>
    </div>
    <div className="container3" id="container">
    <div id="circle"><img src={img_arrowup} alt="" /></div>
      <div id="text">
        <h1>Email us</h1>
        <p>Sveavägen 31</p>
        <p>111 34 STOCKHOLM</p>
      </div>
    </div>
    </div>
    <form noValidate onSubmit={handleSubmit} className="RegForm">
      <div className="header-form">
        <h1 className="FormHeader">Leave us a message for any information.</h1>
      </div>
      <input className={`${nameError ? 'error': ''}`} type="text" placeholder="Enter your name" value={name} onChange={(e) => handleChange(e)} id="Name"></input>
      <input className={`${emailError ? 'error': ''}`} type="email" placeholder="Enter your email" value={email} onChange={(e) => handleChange(e)} id="Email"></input>
      <input className={`${messageError ? 'error': ''}`} type="text" placeholder="Enter a message" value={message} onChange={(e) => handleChange(e)} id="Message"></input>
      <button className="submit-button" id="btn" type="submit">Submit</button>
    </form>
    </div>
    <div className="sectionfour">
      <img src={img_map} alt="" />
    </div>
    <Footer />
  </main>
</div>
  )
}

export default Contacts