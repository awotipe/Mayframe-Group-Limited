import React from "react";
import classes from "./Welcome.module.css";
import bigImage from "../../assets/welcome.png";
import { Link } from "react-router-dom";

const Welcome = () => {
  return (
    <div className={classes.container}>
      <div className={classes.innerContainer}>
        <div className={classes.welcomeImg}>
          <img src={bigImage} alt="welcome" />
        </div>
        <div className={classes.welcomeText}>
          <h5>About Us</h5>
          <h2>Welcome to MayFrame Group</h2>
          <p>
            At Mayframe, we are committed to providing a wide range of
            exceptional services to meet your diverse needs, Whether you're
            looking to enhance your driving skills, seeking expert consultancy
            services, exploring the world of farms and agriculture, or venturing
            into investment and property, we have you covered.
          </p>
          <Link to="/about">
            <button>Learn more</button>
          </Link>
        </div>
      </div>
    </div>
  );
};

export default Welcome;
