import React from 'react'
import classes from "./FarmHero.module.css";
import Herodriveprops from "../../components/Herodriveprops/Herodriveprops";

const FarmHero = () => {
  return (
    <div className={classes.outContainer}>
    <div className={classes.container}>
        <h1>Farm & Agro Allied</h1>
        <h4>HOME/FARM</h4>
    </div>
        <div className={classes.cardContainer}>
        <Herodriveprops
        headA = "100k+"
        textA = "Farmers Joined with Us "
        headB = "1000+"
        textB = "Products Sold"
        headC = "124+"
        textC = "Total Constructions"
        />
    </div>
    </div>
  )
}

export default FarmHero