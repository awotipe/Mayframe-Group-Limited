import React from 'react'
import classes from "./FarmHero.module.css";
import OtherHeroProps from "../../components/OtherHeroProps/OtherHeroProps";

const FarmHero = () => {
  return (
    <div className={classes.container}>
    <OtherHeroProps
     headA = "Empowering Agro Farms For Success"
     btnText = "Make Enquiry"
     paragraph ="Empowering Sustainable Agriculture and Agro-Allied Ventures."
     link = "/contact"
    />
</div>
  )
}

export default FarmHero