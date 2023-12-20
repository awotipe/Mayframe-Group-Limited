import React from 'react'
import Navbar from "../../components/Header/Header"
import Form from "../../components/FarmForm/FarmForm";
import Hero from "../../components/FarmHero/FarmHero";
import Herodriveprops from "../../components/Herodriveprops/Herodriveprops";

const Farm = () => {
  return (
    <div>
        <Navbar/>
        <Hero/>
        <Herodriveprops
        headA = "100k+"
        textA = "Farmers Joined with Us "
        headB = "1000+"
        textB = "Products Sold"
        headC = "124+"
        textC = "Total Constructions"
        />
        <Form/>
    </div>
  )
}

export default Farm