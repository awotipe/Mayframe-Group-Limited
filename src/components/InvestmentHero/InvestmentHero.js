import React from 'react'
import classes from "./InvestmentHero.module.css";
import Herodriveprops from "../../components/Herodriveprops/Herodriveprops"

const InvestmentHero = () => {
  return (
    <div className={classes.outContainer}>
    <div className={classes.container}>
        <h1>Mayframe Investment</h1>
        <h4>HOME/INVESTMENT</h4>
    </div>
        <div className={classes.cardContainer}>
       <Herodriveprops 
        headA = "100k+"
        textA = "Satisfied Investors"
        headB = "30%"
        textB = "Profitable Investment"
        headC = "15+"
        textC = "Over 15 years of experience "
       />
    </div>
    </div>
  )
}

export default InvestmentHero