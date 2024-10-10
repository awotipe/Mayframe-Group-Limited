import React from 'react'
import Navbar from "../../components/HeaderInvest/HeaderInvest"
import Benefit from "../../components/Benefits/Benefits";
import Hero from "../../components/InvestmentHero/InvestmentHero";
import Form from "../../components/InvestForm/InvestForm";
import Testimony from "../../components/TestimonyInvest/TestimonyInvest";

const Investment = () => {
  return (
    <div>
        <Navbar/>
        <Hero/>
        <Benefit/>
        <Testimony/>
        <Form/>
    </div>
  )
}

export default Investment