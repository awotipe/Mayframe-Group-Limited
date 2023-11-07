import React from "react";
import classes from "./ContactMap.module.css";
import Map from "../../components/Map/Map";

const ContactMap = () => {
  return (
    <div className={classes.container}>
      <div className={classes.innercontainer}>
        <div className={classes.textContainer}>
          <h3>Visit Us</h3>
          <h4>Address:</h4>
          <p>Osun State, Nigeria.</p>
        </div>
        <div className={classes.myMap}>
          <Map />
        </div>
      </div>
    </div>
  );
};

export default ContactMap;
