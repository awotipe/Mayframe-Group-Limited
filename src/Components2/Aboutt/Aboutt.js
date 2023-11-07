import React from 'react'
import ContactHeroProps from '../../components/ContactHeroProps/ContactHeroProps'
import classes from './Aboutt.module.css'


const Aboutt = () => {
  return (
    <div className={classes.container}>
    <ContactHeroProps 
    head ="About Us" 
    subhead= "HOME/ABOUT US"/>
</div>
  )
}

export default Aboutt