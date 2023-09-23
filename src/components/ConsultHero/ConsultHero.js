import React from 'react'
import classes from './ConsultHero.module.css'
import HandShake from '../../assets/ConsultancyA/shake.png'

const ConsultHero = () => {
  return (
    <div className={classes.container}>
        <div className={classes.innercontainer}>
            <div className={classes.mainContainer}>
                <h5>About Us</h5>
                <h3>Mayframe Consultancy</h3>
                <p>Mayframe has a dedicated consultancy services 
                division that assist businesses in various domains.
                The consultancy services cover a wide range of areas,
                including strategic planning, operations management,
                financial analysis, marketing strategies, and more.
                By leveraging industry expertise and employing a
                result-driven approach, the consultancy team at Mayframe 
                group helps businesses optimize their operations, overcome
                challenges, and achieve sustainable growth.</p>
            </div>

            <div className={classes.PicsContainer}> 
            <img src={HandShake} alt= "Handshake"/>
            </div>
        </div>
    </div>
  )
}

export default ConsultHero