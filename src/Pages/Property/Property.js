import React from 'react'
import Navbar from "../../components/Header/Header";
import Properties from "../../Components2/Property/Property";
import Hero from "../../components/PropertyHero/PropertyHero";
import Herodriveprops from "../../components/Herodriveprops/Herodriveprops";

const Property = () => {
  return (
    <div>
        <Navbar/>
        <Hero/>
        <Herodriveprops
        headA = "345"
        textA = "Projects"
        headB = "100+"
        textB = "Happy Clients"
        headC = "124+"
        textC = "Total Constructions "
        />
       <Properties/>
    </div>
  )
}

export default Property