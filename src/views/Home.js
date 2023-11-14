import React from 'react'
import '../views/Home.css'
import '../components/Button.css'


import NavigationBar from '../components/NavigationBar'
import Footer from '../components/Footer'
import SectionOne from '../components/SectionOne'
import SectionTwo from '../components/SectionTwo'
import SectionThree from '../components/SectionThree'
import SectionFour from '../components/SectionFour'
import SectionFive from '../components/SectionFive'
import SectionSix from '../components/SectionSix'
import SectionSeven from '../components/SectionSeven'

const Home = () => {
  return (
<div className='body'>
    <main>
        <NavigationBar />
        <SectionOne />
        <SectionTwo />
        <SectionThree />
        <SectionFour />
        <SectionFive />
        <SectionSix />
        <SectionSeven />
        <Footer />
</main>
</div>
  )
}

export default Home