import React from 'react'
import classes from './OtherHeroProps.module.css'
import { Link } from "react-router-dom";

const OtherHeroProps = (props) => {
  return (
    <div className={classes.container}>
      <div className={classes.herotext}>
        <div className={classes.heading}>
        <h1>{props.headA}</h1>
        <h4>{props.subhead}</h4>
        <div className={classes.secSection}> 
        <div>
        <Link to={props.link}>
        <button>{props.btnText}</button>
        </Link>
        </div>
        <div className={classes.Text}>
        <p>{props.paragraph}</p>
        </div>
        </div>
        </div>
    </div>
    </div>
  )
}

export default OtherHeroProps