import React from 'react'
import Navbar from "../../components/Header/Header";
import Hero from "../../components/HerroInitiative/HeroInitiative";
import About from "../../components/Initiative/Initiative";
import Gallery1 from "../../components/Gallery/Gallery"
import Competence from "../../components/Competence/Competence";
import Testimony from '../../components/TestimonyConsult/TestimonyConsult'
import Modal from "../../components/Modal/Modal"


const Development = () => {
  return (
    <div>
        <Navbar/>
        <Hero/>
        <About/>
        <Gallery1/>
        <Competence/>
        <Testimony/>
        <Modal/>
    </div>
  )
}

export default Development
