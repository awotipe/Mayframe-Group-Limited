import React from "react";
import classes from "./ConsBenefit.module.css";

const ConsBenefit = () => {
  return (
    <div className={classes.Container}>
    <div className={classes.containerTop}>
        <h3>Benefits</h3>
        </div>
      <div className={classes.innerContainer}>
        <div className={classes.mainContainer}>
          <div className={classes.NumContainer}>
            <p>01</p>
          </div>
          <div className={classes.textContainer}>
            <h3>Expertise & Specialized Knowledge</h3>
            <p>
              We possess specialized knowledge in various areas of business. We
              also provide insights, strategies, and solutions based on our
              expertise, which can help address specific challenges or improve
              overall business performance.
            </p>
          </div>
        </div>
        <div className={classes.mainContainer}>
          <div className={classes.NumContainerB}>
            <p>02</p>
          </div>
          <div className={classes.textContainer}>
            <h3>Scalability and Flexibility</h3>
            <p>
              We accommodate short-term projects, long-term partnerships, or
              flexible arrangements, allowing businesses to access the right
              level of support based on their requirements.
            </p>
          </div>
        </div>
        <div className={classes.mainContainer}>
          <div className={classes.NumContainerC}>
            <p>03</p>
          </div>
          <div className={classes.textContainer}>
            <h3>Change Management</h3>
            <p>
              We implement organizational changes, such as restructuring,
              mergers, or process improvements, we also provide guidance and
              support throughout the change management process.
            </p>
          </div>
        </div>
        <div className={classes.mainContainer}>
          <div className={classes.NumContainerD}>
            <p>04</p>
          </div>
          <div className={classes.textContainer}>
            <h3>Time Efficiency</h3>
            <p>
              We expedite the process of problem-solving, strategy development,
              or organizational changes. With our expertise and experience, we
              can quickly analyze situations, identify critical areas for
              improvement, and develop actionable plans, saving valuable time
              for the company.
            </p>
          </div>
        </div>
        <div className={classes.mainContainer}>
          <div className={classes.NumContainerE}>
            <p>05</p>
          </div>
          <div className={classes.textContainer}>
            <h3>Objectivity and Fresh Perspective</h3>
            <p>
              We assess the business objectively, identify potential issues or
              inefficiencies, and offer innovative ideas for improvement.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ConsBenefit;
