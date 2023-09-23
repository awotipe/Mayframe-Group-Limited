import React from 'react'
import classes from './ConsultForm.module.css'
import ContactUsProps from '../../components/ContactUsProps/ContactUsProps'

const ConsultForm = () => {
  return (
    <div className={classes.container}>
        <ContactUsProps
        sideText = "Start Improving Your Business Today"/>
    </div>
  )
}

export default ConsultForm