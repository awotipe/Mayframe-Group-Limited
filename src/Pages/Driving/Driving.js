import React from 'react'
import Navbar from '../../components/Navbar/Navbar'
import Hero from '../../components/HeroDrive/HeroDrive'
import Contact from '../../components/ContactUs/ContactUs'
import Welcome from '../../components/Welcome/Welcome'
import Services from '../../components/Services/Services'
import Testimonials from '../../components/Testimonials/Testimonials'
import Footer from '../../components/Footer/Footer'

const driving = () => {
  return (
    <div>
      <Navbar/>
      <Hero/>
      <Welcome/>
      <Services/>
      <Contact/>
      <Testimonials/>
      <Footer/>
    </div>
  )
}

export default driving