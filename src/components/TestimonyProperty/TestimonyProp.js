import React, { Component } from "react";
import Slider from "react-slick";
import classes from "./TestimonyProp.module.css";

export default class Autoplay extends Component {
  render() {
    const settings = {
      dots: true,
      arrows: true,
      infinite: true,
      slidesToShow: 3,
      slidesToScroll: 1,
      autoplay: true,
      speed: 10000,
      autoplaySpeed: 4000,
      cssEase: "linear",

      responsive: [
        {
          breakpoint: 1024,
          settings: {
            slidesToShow: 2,
            slidesToScroll: 1,
            infinite: true,
          },
        },
        {
          breakpoint: 600,
          settings: {
            slidesToShow: 2,
            slidesToScroll: 1,
            initialSlide: 1,
          },
        },
        {
          breakpoint: 480,
          settings: {
            slidesToShow: 1,
            slidesToScroll: 1,
          },
        },
        {
          breakpoint: 425,
          settings: {
            slidesToShow: 1,
            slidesToScroll: 1,
          },
        },
        {
          breakpoint: 375,
          settings: {
            slidesToShow: 1,
            slidesToScroll: 1,
          },
        },
      ],
    };
    return (
      <div className={classes.container}>
        <div className={classes.innerContainer}>
          <h6>Testimonials</h6>
          <h1>What Our Customers Says About Us</h1>

          <Slider {...settings} className={classes.cardContainer}>
            <div className={classes.cardWrap}>
              <div className={classes.card}>
                <div className={classes.cardText}>
                  <h4>Adekunle Emmanuel</h4>
                  <h5>Cliient</h5>
                  <p>
                    "I am absolutely thrilled with my decision to invest in a
                    Mayframe Property Development. The attention to detail and
                    commitment to quality are evident in every aspect of my new
                    home. The entire process, from purchase to move-in, was
                    seamless, and the team at Mayframe demonstrated
                    professionalism and expertise throughout."
                  </p>
                </div>
              </div>
            </div>
            <div className={classes.cardWrap}>
              <div className={classes.card}>
                <div className={classes.cardText}>
                  <h4>Francis Ashley</h4>
                  <h5>Client</h5>
                  <p>
                    "My family and I are thoroughly impressed with the level of
                    excellence delivered by Mayframe Property Development. Our
                    new home is a testament to their dedication to creating
                    spaces that not only meet but exceed the needs of
                    contemporary families. The Mayframe team's commitment to
                    customer satisfaction sets them apart, ."
                  </p>
                </div>
              </div>
            </div>
            <div className={classes.cardWrap}>
              <div className={classes.card}>
                <div className={classes.cardText}>
                  <h4>Flora Akingbade</h4>
                  <h5>Client</h5>
                  <p>
                    "Choosing Mayframe Property Development was one of the best
                    decisions I've made. The entire process, from the
                    eco-conscious planning to the seamless execution, showcases
                    their commitment to creating not just houses but
                    sustainable, future-forward homes."
                  </p>
                </div>
              </div>
            </div>
            <div className={classes.cardWrap}>
              <div className={classes.card}>
                <div className={classes.cardText}>
                  <h4>Adekunle Emmanuel</h4>
                  <h5>Cliient</h5>
                  <p>
                    "I am absolutely thrilled with my decision to invest in a
                    Mayframe Property Development. The attention to detail and
                    commitment to quality are evident in every aspect of my new
                    home. The entire process, from purchase to move-in, was
                    seamless, and the team at Mayframe demonstrated
                    professionalism and expertise throughout."
                  </p>
                </div>
              </div>
            </div>
            <div className={classes.cardWrap}>
              <div className={classes.card}>
                <div className={classes.cardText}>
                  <h4>Francis Ashley</h4>
                  <h5>Client</h5>
                  <p>
                    "My family and I are thoroughly impressed with the level of
                    excellence delivered by Mayframe Property Development. Our
                    new home is a testament to their dedication to creating
                    spaces that not only meet but exceed the needs of
                    contemporary families. The Mayframe team's commitment to
                    customer satisfaction sets them apart."
                  </p>
                </div>
              </div>
            </div>
            <div className={classes.cardWrap}>
              <div className={classes.card}>
                <div className={classes.cardText}>
                  <h4>Flora Akingbade</h4>
                  <h5>Client</h5>
                  <p>
                   "Choosing Mayframe Property Development was one of the best
                    decisions I've made. The entire process, from the
                    eco-conscious planning to the seamless execution, showcases
                    their commitment to creating not just houses but
                    sustainable, future-forward homes."
                  </p>
                </div>
              </div>
            </div>
          </Slider>
        </div>
      </div>
    );
  }
}
