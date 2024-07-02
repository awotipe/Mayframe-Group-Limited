import React from 'react'
import classes from "./PropertyHero.module.css";
import Herodriveprops from "../../components/Herodriveprops/Herodriveprops";

const PropertyHero = () => {
  return (
    <div className={classes.outContainer}>
    <div className={classes.container}>
      <h1>Property Development</h1>
      <h4>HOME/PROPERTY</h4>
    </div>
     <div className={classes.cardContainer}>
      <Herodriveprops
        headA = "345"
        textA = "Completed ProjectS"
        headB = "100+"
        textB = "Happy Clients"
        headC = "124+"
        textC = "Total Constructions "
        />
    </div>
</div>
  )
}

export default PropertyHero