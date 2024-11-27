import React from 'react'
import classes from "./Gallery.module.css"
import Pic1 from "../../assets/gallery8.png"
import Pic2 from "../../assets/gallery11.png"
import Pic3 from "../../assets/gallery9.png"
import { Link } from "react-router-dom";

const Gallery = () => {
  return (
    <div className={classes.container}>
        <div className={classes.heading}>
          <h2>Our Gallery</h2>
        </div>
         <div className={classes.batch}>
        <div className={classes.batch1}>
          <img src={Pic1} alt="Event" />
        </div>
        <div className={classes.batch1}>
          <img src={Pic2} alt="Event" />
        </div>
        <div className={classes.batch1}>
          <img src={Pic3} alt="Event" />
        </div>
      </div>
      <div className={classes.more}>
        <Link to="/gallery">
        <button>View More</button>
        </Link>
      </div>
    </div>
  )
}

export default Gallery
