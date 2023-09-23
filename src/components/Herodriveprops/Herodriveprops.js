import React from 'react'
import classes from './Herodriveprops.module.css'

const Herodriveprops = (props) => {
  return (
    <div>
        <div className={classes.cardContainer}>
        <div className={classes.cardWrap}> 
            <div className={classes.card}>
                    <h1>{props.headA}</h1>
                    <p>{props.textA}</p>
             </div>
             <div className={classes.line}></div>
            <div className={classes.card}>
                    <h1>{props.headB}</h1>
                    <p>{props.textB}</p>
             </div>
             <div className={classes.line}></div>
            <div className={classes.card}>
                    <h1>{props.headC}</h1>
                    <p>{props.textC}</p>
             </div>
        </div>
        </div>
    </div>
  )
}

export default Herodriveprops