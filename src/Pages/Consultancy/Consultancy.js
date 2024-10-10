import React from 'react'
import Navbar from '../../components/HeaderConsult/HeaderConsult'
import Hero from '../../components/HeroConsult/HeroConsult'
import ConsultHero from '../../components/ConsultHero/ConsultHero'
import ConsultServices from '../../components/ConsultServices/ConsultServices'
import ConsBenefit from '../../components/ConsultBenefit/ConsBenefit'
import Testimonials from '../../components/TestimonyConsult/TestimonyConsult'
import ConsultForm from '../../components/ConsultForm/ConsultForm'

const Consultancy = () => {
  return (
    <div>
        <Navbar/>
        <Hero/>
        <ConsultHero />
        <ConsultServices/>
        <ConsBenefit/>
        <Testimonials/>
        <ConsultForm/>
    </div>
  )
}

export default Consultancy