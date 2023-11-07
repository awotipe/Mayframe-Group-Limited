import React from "react";
import classes from "./Groupe.module.css";

const Groupe = () => {
  return (
    <div className={classes.container}>
      <div className={classes.innerContainer}>
        <div className={classes.group}>
          <h1>Welcome to MayFrame Group</h1>
          <p>
            At Mayframe, we are committed to providing a wide range of
            exceptional services to meet your diverse needs, Whether you're
            looking to enhance your driving skills, seeking expert consultancy
            services, exploring the world of farms and agriculture, or venturing
            into investment and property, we have you covered. With a commitment
            to excellence and a customer-centric approach, Mayframe group has
            established itself as a trusted name in the market.{" "}
          </p>
        </div>
        <div className={classes.vision}>
          <h1>Our Vision</h1>
          <p>
            met sint. Velit officia consequat duis enim velit mollit.
            Exercitation veniam consequat sunt nostrud amet. Amet minim mollit
            non deserunt ullamco est sit aliqua dolor do amet sint. Velit off
            met sint. Velit officia consequat duis enim velit mollit.
            Exercitation veniam consequat sunt nostrud amet. Amet minim mollit
            non deserunt ullamco est sit aliqua dolor do amet sint. Velit off.
          </p>
        </div>
        <div className={classes.mission}>
          <h1>Our Mission</h1>
          <p>
            met sint. Velit officia consequat duis enim velit mollit.
            Exercitation veniam consequat sunt nostrud amet. Amet minim mollit
            non deserunt ullamco est sit aliqua dolor do amet sint. Velit off
            met sint. Velit officia consequat duis enim velit mollit.
            Exercitation veniam consequat sunt nostrud amet. Amet minim mollit
            non deserunt ullamco est sit aliqua dolor do amet sint. Velit off.
          </p>{" "}
        </div>
      </div>
    </div>
  );
};

export default Groupe;
