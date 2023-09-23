import React from 'react'
import Navbar from '../../components/Navbar/Navbar'
import Hero from '../../components/Hero/Hero'
import Herodriveprops from '../../components/Herodriveprops/Herodriveprops'
import ConsultHero from '../../components/ConsultHero/ConsultHero'
import ConsultServices from '../../components/ConsultServices/ConsultServices'
import ConsBenefit from '../../components/ConsultBenefit/ConsBenefit'
import Testimonials from '../../components/Testimonials/Testimonials'
import Footer from '../../components/Footer/Footer'
import ConsultForm from '../../components/ConsultForm/ConsultForm'

const About = () => {
  return (
    <div>
        <Navbar/>
        <Hero/>
        <Herodriveprops
        headA = "100k+"
        textA = "Satisfied Customers"
        headB = "150k+"
        textB = "Completed Projects"
        headC = "15+"
        textC = "Over 15 years of experience "
        />
        <ConsultHero />
        <ConsultServices/>
        <ConsBenefit/>
        <Testimonials/>
        <ConsultForm/>
        <Footer/>
    </div>
  )
}

export default About