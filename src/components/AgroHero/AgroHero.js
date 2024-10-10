import React from 'react'
import classes from './AgroHero.module.css'

const AgroHero = () => {
  return (
    <div className={classes.container}>
      <div className={classes.text}>
       <h1>Empowering Agro Farms For Success</h1>
       <p>Empowering Sustainable Agriculture and Agro-Allied Ventures.</p>
       <button>Make Enquiry</button>
      </div>
      <div className={classes.property}>
        <div className={classes.propertycontent}>
        <div className={classes.farmer}>
            <h1>100k+</h1>
            <p>Farmers Joined with Us</p>
            </div>
            <hr />
  
        <div className={classes.product}>
          <h1>1000+</h1>
          <p>Products Sold</p>
            
        </div>
        <hr/>
        <div className={classes.construction}>
          <h1>124+</h1>
          <p>Total Constructions</p>
        </div>
        
      
      </div>
    </div>
    </div>
  )
}

export default AgroHero