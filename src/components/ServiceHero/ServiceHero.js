import React from 'react'
import classes from "./ServiceHero.module.css"
import ContactHeroProps from "../../components/ContactHeroProps/ContactHeroProps"

const ServiceHero = () => {
  return (
    <div className={classes.container}>
    <ContactHeroProps 
    head ="Services" 
    subhead= "HOME/SERVICES"/>
</div>
  )
}

export default ServiceHero
