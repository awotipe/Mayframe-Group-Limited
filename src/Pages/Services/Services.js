import React from 'react'
import Navbar from '../../components/Header/Header'
import Service from '../../components/OurServices/OurServices'
import Values from '../../components/Values/Values'
import Competence from '../../components/Competence/Competence'

const Services = () => {
  return (
    <div>
        <Navbar/>
        <Service/>
        <Values/>
        <Competence/>
    </div>
  )
}

export default Services