import React from 'react'
import classes from './ContactHero.module.css'
import ContactHeroProps from '../../components/ContactHeroProps/ContactHeroProps'

const ContactHero = () => {
  return (
    <div className={classes.container}>
         <ContactHeroProps 
         head ="Contact Us" 
         subhead= "HOME/CONTACT US"/>
    </div>
  )
}

export default ContactHero