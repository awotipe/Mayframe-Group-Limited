import React from 'react'
import Navbar from '../../components/Header/Header'
import Hero from '../../components/HeroDrive/HeroDrive'
import Contact from '../../components/ContactUs/ContactUs'
import Welcome from '../../components/WelcomeDrive/WelcomeDrive'
import Services from '../../components/Services/Services'
import Testimonials from '../../components/Testimonials/Testimonials'
// import Footer from '../../components/Footer/Footer'

const driving = () => {
  return (
    <div>
      <Navbar/>
      <Hero/>
      <Welcome/>
      <Services/>
      <Contact/>
      <Testimonials/>
    </div>
  )
}

export default driving