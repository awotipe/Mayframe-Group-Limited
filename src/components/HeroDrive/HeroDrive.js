import React from 'react'
import classes from './HeroDrive.module.css'
import Herodriveprops from '../../components/Herodriveprops/Herodriveprops'

const HeroDrive = () => {
  return (
    <div className={classes.outContainer}>
    <div className={classes.container}>
    </div>
        <div className={classes.cardContainer}>
       <Herodriveprops 
       headA = "15+"
       textA = "Over 15 years of experience"
       headB = "90%"
       textB = "High passing rate"
       headC = "200+"
       textC = "Over 200 students taught"
       />
    </div>
    </div>
  )
}

export default HeroDrive