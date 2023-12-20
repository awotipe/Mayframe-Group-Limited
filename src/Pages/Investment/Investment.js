import React from 'react'
import Navbar from "../../components/Header/Header"
import Benefit from "../../components/Benefits/Benefits";
import Hero from "../../components/InvestmentHero/InvestmentHero";
import Form from "../../components/InvestForm/InvestForm";

const Investment = () => {
  return (
    <div>
        <Navbar/>
        <Hero/>
        <Benefit/>
        <Form/>
    </div>
  )
}

export default Investment