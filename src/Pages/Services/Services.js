import React from 'react'
import Navbar from '../../components/Header/Header'
import Hero from "../../components/ServiceHero/ServiceHero"
import Service from '../../components/OurServices/OurServices'
import Values from '../../components/Values/Values'
import Competence from '../../components/Competence/Competence'

const Services = () => {
  return (
    <div>
        <Navbar/>
        <Hero/>
        <Service/>
        <Values/>
        <Competence/>
    </div>
  )
}

export default Services