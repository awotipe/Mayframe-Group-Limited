import React from 'react'
import Navbar from "../../components/Header/Header";
import Hero from "../../components/HerroInitiative/HeroInitiative";
import About from "../../components/Initiative/Initiative";
import Competence from "../../components/Competence/Competence";
import Testimony from '../../components/TestimonyConsult/TestimonyConsult'


const Development = () => {
  return (
    <div>
        <Navbar/>
        <Hero/>
        <About/>
        <Competence/>
        <Testimony/>
    </div>
  )
}

export default Development
