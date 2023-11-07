import React from "react";
import classes from "../Welcome/Welcome.module.css";
import Safe from "../../assets/safe.png";
import Brief from "../../assets/briefcase.png";
import Phone from "../../assets/phone.png";
import Chart from "../../assets/chart.png";
import Car from "../../assets/car.png";
import Man from "../../assets/man.png";

const Welcome = () => {
  return (
    <div className={classes.container}>
      <div className={classes.innerContainer}>
        <div className={classes.welcome}>
          <h2>Welcome to Mayframe Driving Academy</h2>
          <p>
            Mayframe operates a leading driving academy that aims to provide
            comprehensive and professional driver training. Whether it's for
            beginners or experienced drivers looking to enhance their skills,
            the academy offers a structured curriculum and qualified instructors
            to ensure safe and confident driving. The driving academy covers
            both theoretical knowledge and practical training, equipping
            individuals with the necessary skills to navigate the roads with
            responsibility.
          </p>
       
          <div className={classes.safeContainer}>
          <div className={classes.safeWrap}>
            <div className={classes.safety}>
              <div className={classes.safetyImage}>
                <img src={Safe} alt="Safe" />
              </div>
              <h3>Safety</h3>
              <p>
                We teach our students how to drive responsibly, follow traffic
                rules, and minimize risks on road.
              </p>
            </div>

            <div className={classes.professional}>
              <div className={classes.professionalImage}>
                <img src={Brief} alt="briefcase" />
              </div>
              <h3>Professionalism</h3>
              <p>
                We maintain high level of professionalism in all aspect of our
                operations.
              </p>
            </div>
            </div>

            <div className={classes.customerWrap}>
            <div className={classes.customerService}>
              <div className={classes.customerImage}>
                <img src={Phone} alt="Phone" />
              </div>
              <h3>Customer Service</h3>
              <p>
                We aim to be responsive, attentive, and accommodating to the
                needs and concerns of students and their families.
              </p>
            </div>

            <div className={classes.continous}>
              <div className={classes.continousImage}>
                <img src={Chart} alt="Chart" />
              </div>
              <h3>Continuous Improvement</h3>
              <p>
                We stay updated with the latest traffic laws and regulations,
                incorporate new technologies, and seek feedback to enhance the
                learning experience.
              </p>
            </div>
            </div>
          </div>
        </div>
        <div className={classes.frame}>
          <div classname={classes.car}>
            <img src={Car} alt="Car" />
          </div>
          <div className={classes.car2}>
            <img src={Man} alt="Man" />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Welcome;
