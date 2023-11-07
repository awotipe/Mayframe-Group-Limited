import React from 'react'
import classes from './Heroprops.module.css'

const Heroprops = (props) => {
  return (
    <div className={classes.container}>
    <div classname={classes.innercontainer}>    
        <div className={classes.flex}>
            <h2>Where Imagination Transforms into Extraordinary Building</h2>
        <div className={classes.text}>
               </div>
            </div>
        <div className= {classes.imagination}>
            <div className= {classes.enq}>
              <button>Make Enquiry</button>
              </div>
          <div className= {classes.leash}>
          <p>Unleash your creativity with us and witness the remarkable transformation of your visions into breathtaking reality.</p>
          </div>
            </div>
         </div>
    </div>
  )
}

export default Heroprops