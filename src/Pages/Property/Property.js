import React from 'react'
import Navbar from "../../components/HeaderProperty/HeaderProperty"
import Properties from "../../Components2/Property/Property";
import Hero from "../../components/PropertyHero/PropertyHero";
import Form from "../../components/PropertyForm/PropertyForm";

const Property = () => {
  return (
    <div>
        <Navbar/>
        <Hero/>
       <Properties/>
       <Form/>
    </div>
  )
}

export default Property