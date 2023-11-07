import React from "react";
import classes from "./Hero2.module.css";
import {Link} from 'react-router-dom'

const Hero2 = () => {
  return (
    <div className={classes.container}>
      <div className={classes.text}>
        <h1 data-text="Build and Grow Your Business with Expert Guidance.">Build and Grow Your Business with Expert Guidance.</h1>
        <p>
          At Mayframe Group, we specialized in driving transformative growth and
          success that assist businesses in various domains.
        </p>
        <Link to="/services"> 
        <button>Explore More</button>
        </Link>
      </div>
    </div>
  );
};

export default Hero2;
