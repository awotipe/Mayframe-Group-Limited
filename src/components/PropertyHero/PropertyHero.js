import React from 'react'
import classes from "./PropertyHero.module.css";
import OtherHeroProps from '../OtherHeroProps/OtherHeroProps';

const PropertyHero = () => {
  return (
    <div className={classes.container}>
    <OtherHeroProps
     headA = "Where Imagination Transforms into Extraordinary Building"
     btnText = "Make Enquiry"
     paragraph ="Unleash your creativity with us and witness the remarkable transformation of your visions into breathtaking reality."
     link = "/contact"
    />
</div>
  )
}

export default PropertyHero