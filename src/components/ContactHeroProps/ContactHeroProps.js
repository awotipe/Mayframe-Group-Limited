import React from 'react'
import classes from './ContactHeroProps.module.css'

const ContactHeroProps = (props) => {
  return (
    <div className={classes.container}>
      <div className={classes.herotext}>
        <div className={classes.heading}>
        <h1>{props.head}</h1>
        <h4>{props.subhead}</h4>
        </div>
    </div>
    </div>
  )
}

export default ContactHeroProps