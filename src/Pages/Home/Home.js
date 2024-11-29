import React from 'react'
import classes from "./Home.module.css"
import Navbar from '../../components/Header/Header'
import Hero from '../../components/HeroHome/Hero2'
import Welcome from '../../components/Welcome/Welcome'
import Services from '../../components/OurServices/OurServices'
import Values from '../../components/Values/Values'
import Competence from '../../components/Competence/Competence'


const Home = () => {
  return (
    <div className={classes.container}>
        <Navbar/>
        <Hero/>
        <Welcome/>
        <Services/>
        <Values/>
        <Competence/>
    </div>
  )
}

export default Home