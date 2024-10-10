import React from "react";
import classes from "./Initiative.module.css";
import Keyboard from "../../assets/ConsultancyA/meeting.png";
import Vision from "../../assets/vision.png";
import Mission from "../../assets/mission.png";
import Target from "../../assets/target.png";

const Initiative = () => {
  return (
    <div className={classes.container}>
      <div className={classes.innerContainer}>
        <div className={classes.mainContainer}>
          <div className={classes.picsContainer}>
            <img src={Keyboard} alt="Keyboard" />
          </div>
          <div className={classes.textContainer}>
            <h4>ABOUT US</h4>
            <p>
              We are a non-governmental organization poised to drive advocacy,
              corporate governance and leadership strengthening among the
              Business Membership Organizations (BMOs), Government Organization,
              Women and Youth groups.
            </p>
          </div>
        </div>

        <div className={classes.mainContainer2}>
          <div className={classes.textContainer}>
            <h4>Vision</h4>
            <p>
              To strengthens capacity of public and private sector players on
              governance, self-sustainability and advocacy.
            </p>
          </div>

          <div className={classes.picsContainer}>
            <img src={Vision} alt="vision" />
          </div>
        </div>

        <div className={classes.mainContainer}>
          <div className={classes.picsContainer}>
            <img src={Mission} alt="mission" />
          </div>
          <div className={classes.textContainer}>
            <h4>Mission</h4>
            <p>
              To equip Business Membership Organization (BMOs), Government
              Organizations, women and youth groups with knowledge of building
              sustainable development organization.
            </p>
          </div>
        </div>

        <div className={classes.mainContainer2}>
          <div className={classes.textContainer}>
            <h4>Our Target </h4>
            <ul>
              <li>Government Organisation</li>
              <li>Business Membership Organisations (BMOs)</li>
              <li>Youths, Youth groups and youth organisations</li>
              <li>Women, Women groups and women organisations</li>
            </ul>
          </div>

          <div className={classes.picsContainer}>
            <img src={Target} alt="target" />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Initiative;
