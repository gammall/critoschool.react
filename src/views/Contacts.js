import React, { useState } from 'react'
import '../views/Home.css'
import '../components/Button.css'
import '../views/Contacts.css'


import img_map from '../Assets/Images/map-image.png'
import NavigationBar from '../components/NavigationBar'
import Footer from '../components/Footer'

const Contacts = () => {

    const [name, setName] = useState('')
    const [email, setEmail] = useState('')
    const [message, setMessage] = useState('')


    const handleSubmit = async (e) => {
      e.preventDefault()


      const user = {name, email, message}
      const json = JSON.stringify(user)
  {/*
      if (name.length < 1) {
        alert("Please enter your name")
      } else if (email.length < 3) {
        alert("Please enter a valid Email address")
      } else if (message.length < 1) {
        alert("Please write something in the message box")
      } else {

      }
      }
      } */}

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


  return (
  <div className="body">
    <main>
        <NavigationBar />
  <div className="sectiontwo">
    <h1>Lets Connect</h1>
  </div>
    <div className="sectionthree">
      <div className="Contact-box">
    <div className="container1" id="container"></div>
    <div className="container2" id="container"></div>
    <div className="container3" id="container"></div>
    </div>
    <form noValidate onSubmit={handleSubmit} className="RegForm">
      <div className="header-form">
        <h1>Leave us a message for any information.</h1>
      </div>
      <input type="text" placeholder="Enter your name" value={name} onChange={(e) => setName(e.target.value)} id="Name"></input>
      <input type="email" placeholder="Enter your email" value={email} onChange={(e) => setEmail(e.target.value)} id="Email"></input>
      <input type="text" placeholder="Enter a message" className="input-message" value={message} onChange={(e) => setMessage(e.target.value)} id="Message"></input>
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