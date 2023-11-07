import React from "react";
import classes from "./Values.module.css";
import Honesty from "../../assets/honesty.png";
import Team from "../../assets/teamwork.png";
import Liberty from "../../assets/liberty.png";
import Communication from "../../assets/communication.png";
import Service from "../../assets/service.png";
import Spirit from "../../assets/constructive.png";

const Values = () => {
  return (
    <div className={classes.container}>
      <div className={classes.innerContainer}>
        <div className={classes.topValue}>
          <h2>Our Core Values</h2>
        </div>
        <div className={classes.valueCards}>
          <div className={classes.card}>
            <div className={classes.cardImage}>
              <img src={Honesty} alt="honesty" />
            </div>
            <h5>Honesty</h5>
            <p>
              For us as a company, it is very important that the information
              provided to our customer is honest and true. This value is what
              makes us different and help us to make decisions based on firm and
              true facts.
            </p>
          </div>

          <div className={classes.card}>
            <div className={classes.cardImage}>
              <img src={Team} alt="honesty" />
            </div>
            <h5>Teamwork</h5>
            <p>
              We built a team that works result-oriented, unifying talent and
              give and take to respect and join different opinions, knowledge
              and abilities because teamwork and mutual support build the
              foundation of our relationship.
            </p>
          </div>

          <div className={classes.card}>
            <div className={classes.cardImage}>
              <img src={Liberty} alt="honesty" />
            </div>
            <h5>Liberty</h5>
            <p>
              Our team member must show loyalty, referring to faithfulness,
              commitment, and interest defense in any moment for and in the name
              of the company.
            </p>
          </div>
        </div>
        <div className={classes.valueCards}>
          <div className={classes.card}>
            <div className={classes.cardImage}>
              <img src={Communication} alt="honesty" />
            </div>
            <h5>Communication</h5>
            <p>
              Each one of us must interact transparently and appropriately,
              trying to strengthen our interpersonal relations and the image of
              the company.
            </p>
          </div>

          <div className={classes.card}>
            <div className={classes.cardImage}>
              <img src={Service} alt="honesty" />
            </div>
            <h5>Service Quality</h5>
            <p>
              Service quality is one of our most important values which demands
              all our effort, determination and courage to be successful in what
              we are doing and the services we are providing.
            </p>
          </div>

          <div className={classes.card}>
            <div className={classes.cardImage}>
              <img src={Spirit} alt="honesty" />
            </div>
            <h5>Constructive Spirit</h5>
            <p>
              Our constructive spirit refers to a positive attitude, optimism,
              increase of value chain, creativity and good faith that must be
              shown and live by those who work in our company.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Values;
