import React from 'react'
import classes from "./PropertyForm.module.css";
import ContactUsProps from "../../components/ContactUsProps/ContactUsProps";

const PropertyForm = () => {
  return (
    <div className={classes.container}>
    <ContactUsProps
    sideText = "Get In Touch To See How We Can Help."/>
</div>
  )
}

export default PropertyForm