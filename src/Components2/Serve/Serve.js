import React from "react";
import classes from "../Serve/Serve.module.css";
import Classroom from "../../assets/Classroom.png";

const Serve = () => {
  return (
    <div className={classes.container}>
      <div classes={classes.innerContainer}>
        <div className={classes.check}>
          <h3>Check Out our Services </h3>
        </div>
        <div classes={classes.classRoom}>
          <div className={classes.check1}>
            <img src={Classroom} alt="Class" />
            <h1>Theoretical Classroom Training</h1>
            <p>
              We equips students with the foundational knowledge necessary to
              make informed decisions on the road and fosters a comprehensive
              understanding of driving principles. It helps create a strong base
              of knowledge and awareness, preparing students for practical
              driving lessons and instilling a sense of responsibility and
              confidence in their driving abilities.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Serve;
