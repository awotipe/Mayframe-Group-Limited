import React from 'react'
import classes from "./ContactUs.module.css" 
import ContactUsProps from '../ContactUsProps/ContactUsProps'

const ContactUs = () => {
  return (
    <div className={classes.container}>
        <ContactUsProps
        sideText = "Start Your Driving Training With Us Now!"
        />
    </div>
          
  )
}

export default ContactUs