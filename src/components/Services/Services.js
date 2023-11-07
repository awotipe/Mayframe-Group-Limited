import React from "react";
import classes from "./Services.module.css";
import Vector from "../../assets/classroom.png";
import Vectora from "../../assets/learners permit.png";
import Vectorb from "../../assets/drivers license.png";
import Vectorc from "../../assets/number plate.png";
import Vectord from "../../assets/insurance.png";

const Services = () => {
  return (
    <div className={classes.container}>
      <div className={classes.innercontainer}>
        <div className={classes.serviceText}>
          <h3>Check Out our Services </h3>
        </div>

        <div className={classes.cardPacks}>
          <div className={classes.serviceWrap}>
          <div className={classes.serviceCard}>
            <div className={classes.vector}>
              <img src={Vector} alt="vector" />
            </div>
            <div className= {classes.cardText}>
            <h3>Theoretical Classroom Training</h3>
            <p>
              {" "}
              We equips students with the foundational knowledge necessary to
              make informed decisions on the road and fosters a comprehensive
              understanding of driving principles. It helps create a strong base
              of knowledge and awareness, preparing students for practical
              driving lessons and instilling a sense of responsibility and
              confidence in their driving abilities.
            </p>
            </div>
          </div>
          <div className={classes.serviceCard}>
            <div className={classes.vector}>
              <img src={Vectora} alt="vector" />
            </div>
            <div className= {classes.cardText}>
            <h3>Facilitation of Learner’s Permit</h3>
            <p>
              Our school help students navigate through the necessary paperwork,
              documentation, and requirements to acquire the permit. We offer
              support in preparing for the written exam, which tests the
              understanding of traffic laws and regulations. We empower our
              students to begin their journey of learning and gaining practical
              driving experience under supervision.
            </p>
            </div>
          </div>
          </div>
          <div className={classes.serviceWrap}>
          <div className={classes.serviceCard}>
            <div className={classes.vector}>
              <img src={Vectorb} alt="vector" />
            </div>
            <div className= {classes.cardText}>
            <h3>Facilitation of Driver’s License</h3>
            <p>
              We guide you through the process of obtaining a driver's license
              in understanding and fulfilling the requirements set by the
              licensing authority and ensuring all necessary standards to pass
              the license test are met.{" "}
            </p>
            </div>
          </div>
          <div className={classes.serviceCard}>
            <div className={classes.vector}>
              <img src={Vectorc} alt="vector" />
            </div>
            <div className= {classes.cardText}>
            <h3>Processing of Car Number Plates</h3>
            <p>
              {" "}
              We assist on obtaining and installing the necessary number plates
              for your training vehicles. We guide you through the required
              paperwork and documentation, such as vehicle registration, proof
              of insurance, and any additional local or regional requirements.
              We also liaise with relevant authorities, and provide guidance on
              proper plate installation to ensure legal compliance.
            </p>
            </div>
          </div>
          </div>
          </div>
          <div className={classes.cardPacksWrap}>
          <div className={classes.cardPacks}>
          <div className={classes.serviceCard}>
            <div className={classes.vector}>
              <img src={Vectord} alt="vector" />
            </div>
            <div className= {classes.cardText}>
            <h3>Process Car Insurance and Vehicle Documents</h3>
            <p>
              We provide guidance on the necessary documentation, such as proof
              of insurance, vehicle registration, and other required paperwork.
              Additionally, we offer assistance in liaising with insurance
              providers and ensuring that the insurance policies meet the
              specific needs of the training vehicles.
            </p>
            </div>
            </div>
          </div>
          </div>
      </div>
    </div>
  );
};

export default Services;
