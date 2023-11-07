import React from 'react'
import Navbar from '../../components/Header/Header'
import Aboutt from "../../Components2/Aboutt/Aboutt"
import Values from '../../components/Values/Values'
import Competence from '../../components/Competence/Competence'
import Group from '../../Components2/Groupe/Groupe'

const About = () => {
  return (
    <div>
        <Navbar/>
        <Aboutt/>
        <Group/>
        <Competence/>
        <Values/>
    </div>
  )
}

export default About