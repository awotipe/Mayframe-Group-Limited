import React from "react";
import classes from "./InitiativeGallery.module.css";
import Pic1 from "../../assets/gallery1.png"
import Pic2 from "../../assets/gallery2.png"
import Pic3 from "../../assets/gallery3.png"
import Pic4 from "../../assets/gallery10.png"
import Pic5 from "../../assets/gallery11.png"
import Pic6 from "../../assets/gallery4.png"
import Pic7 from "../../assets/gallery6.png"
import Pic8 from "../../assets/gallery2.png"
import Pic9 from "../../assets/gallery7.png"
import Pic10 from "../../assets/gallery9.png"
import Pic11 from "../../assets/gallery5.png"
import Pic12 from "../../assets/gallery8.png"

const InitiativeGallery = () => {
  return (
    <div className={classes.container}>
      <div className={classes.batch}>
        <div className={classes.batch1}>
          <img src={Pic1} alt="Event" />
        </div>
        <div className={classes.batch1}>
          <img src={Pic3} alt="Event" />
        </div>
        <div className={classes.batch1}>
          <img src={Pic2} alt="Event" />
        </div>
      </div>
      <div className={classes.batch}>
        <div className={classes.batch1}>
          <img src={Pic4} alt="Event" />
        </div>
        <div className={classes.batch1}>
          <img src={Pic6} alt="Event" />
        </div>
        <div className={classes.batch1}>
          <img src={Pic5} alt="Event" />
        </div>
      </div>
      <div className={classes.batch}>
        <div className={classes.batch1}>
          <img src={Pic7} alt="Event" />
        </div>
        <div className={classes.batch1}>
          <img src={Pic8} alt="Event" />
        </div>
        <div className={classes.batch1}>
          <img src={Pic9} alt="Event" />
        </div>
      </div>
      <div className={classes.batch}>
        <div className={classes.batch1}>
          <img src={Pic10} alt="Event" />
        </div>
        <div className={classes.batch1}>
          <img src={Pic11} alt="Event" />
        </div>
        <div className={classes.batch1}>
          <img src={Pic12} alt="Event" />
        </div>
      </div>
    </div>
  );
};

export default InitiativeGallery;
