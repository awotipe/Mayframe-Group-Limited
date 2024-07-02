import React from 'react'
import Navbar from '../../components/Header/Header'
import Aboutt from "../../Components2/Aboutt/Aboutt"
import Group from '../../Components2/Groupe/Groupe'
import Values from '../../components/Values/Values'
import Competence from '../../components/Competence/Competence'

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