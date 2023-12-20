import React from 'react'
import classes from "./InvestForm.module.css";
import ContactUsProps from "../../components/ContactUsProps/ContactUsProps";

const InvestForm = () => {
  return (
    <div className={classes.container}>
    <ContactUsProps
    sideText = "Grow Your Wealth Today With Our Investment Services."/>
</div>
  )
}

export default InvestForm