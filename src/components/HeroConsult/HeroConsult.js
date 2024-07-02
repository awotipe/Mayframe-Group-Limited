import React from 'react';
import classes from "./HeroConsult.module.css";
import Herodriveprops from '../../components/Herodriveprops/Herodriveprops'

const HeroConsult = () => {
  return (
    <div className={classes.outContainer}>
    <div className={classes.container}>
        <h1>Mayframe Consultancy</h1>
        <h4>HOME/CONSULTANCY</h4>
    </div>
        <div className={classes.cardContainer}>
       <Herodriveprops 
        headA = "100k+"
        textA = "Satisfied Customers"
        headB = "120k+"
        textB = "Completed Projects"
        headC = "15+"
        textC = "Over 15 years of experience "
       />
    </div>
    </div>
  )
}

export default HeroConsult
