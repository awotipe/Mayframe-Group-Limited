import React from 'react'
import Navbar from "../../components/HeaderInvest/HeaderInvest"
import Benefit from "../../components/Benefits/Benefits";
import About from "../../components/InvestAbout/InvestAbout"
import Service from "../../components/InvestServ/InvestServ"
import Procurement from "../../components/Procurement/Procurement"
import Hero from "../../components/InvestmentHero/InvestmentHero";
import Form from "../../components/InvestForm/InvestForm";
import Testimony from "../../components/TestimonyInvest/TestimonyInvest";

const Investment = () => {
  return (
    <div>
        <Navbar/>
        <Hero/>
        <About/>
        <Service/>
        <Procurement/>
        <Benefit/>
        <Testimony/>
        <Form/>
    </div>
  )
}

export default Investment