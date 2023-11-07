import React from "react";
import classes from "./Competence.module.css";
import Star from "../../assets/Star.png";

const Competence = () => {
  return (
    <div className={classes.container}>
      <div className={classes.innerContainer}>
        <div className={classes.star}>
        <div className={classes.starImage}>
            <img src={Star} alt="Star"/>
        </div>
          <h2>Our competence is confirmed by a decade of experience</h2>
        </div>
        <div className={classes.middle}>
            <hr/>
        </div>
        <div className={classes.number}>
          <div className={classes.number1}>
            <h1>125k</h1>
            <p>
              met sint. Velit officia consequat duis enim velit mollit.
              Exercitation veniam consequat sunt nostrud amet.
            </p>
          </div>
          <hr/>
          <div className={classes.number2}>
            <h1>20%</h1>
            <p>
              met sint. Velit officia consequat duis enim velit mollit.
              Exercitation veniam consequat sunt nostrud amet.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Competence;
