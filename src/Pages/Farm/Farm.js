import React from 'react'
import Navbar from "../../components/HeaderFarm/HeaderFarm"
import Form from "../../components/FarmForm/FarmForm";
import Hero from "../../components/FarmHero/FarmHero";


const Farm = () => {
  return (
    <div>
        <Navbar/>
        <Hero/>
        <Form/>
    </div>
  )
}

export default Farm