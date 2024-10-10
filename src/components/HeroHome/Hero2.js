import React, { Component } from "react";
import classes from "./Hero2.module.css";
import { Link } from "react-router-dom";
import Slider from "react-slick";

export default class Hero extends Component {
  render() {
    const settings = {
      dots: true,
      infinite: true,
      slidesToShow: 1,
      slidesToScroll: 1,
      autoplay: true,
      fade: true,
      autoplaySpeed: 3000,
      cssEase: "linear",
    };

    return (
      <div className={classes.container}>
        <Slider {...settings} className={classes.slider}>
          <div className={classes.text1}>
            <div className={classes.text}>
              <h1 data-text="Build and Grow Your Business with Expert Guidance.">
                Welcome To Mayframe Group
              </h1>
              <p>
                At Mayframe Group, we specialized in driving transformative
                growth and success that assist businesses in various domains.
              </p>
              <Link to="/services">
                <button>Explore More</button>
              </Link>
            </div>
          </div>
          <div className={classes.text2}>
            <div className={classes.text}>
              <h1 data-text="Build and Grow Your Business with Expert Guidance.">
                Build and Grow Your Business with Expert Guidance.
              </h1>
              <p>
                At Mayframe Group, we specialized in driving transformative
                growth and success that assist businesses in various domains.
              </p>
              <Link to="/services">
                <button>Explore More</button>
              </Link>
            </div>
          </div>
        </Slider>
      </div>
    );
  }
}
