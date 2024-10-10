import React from 'react'
import Navbar from "../../components/HeaderFarm/HeaderFarm"
import Hero from "../../components/FarmHero/FarmHero";
import Benefits from '../../components/AgroBenefits/Benefits';
import Services from '../../components/AgroServices/Services';
import Testimony from "../../components/TestimonyFarm/TestimonyFarm";
import Form from "../../components/FarmForm/FarmForm";


const Farm = () => {
  return (
    <div>
        <Navbar/>
        <Hero/>
        <Benefits/>
        <Services/>
        <Testimony/>
        <Form/>
    </div>
  )
}

export default Farm