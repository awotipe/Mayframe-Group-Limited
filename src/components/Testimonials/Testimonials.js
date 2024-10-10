import React, { Component } from "react";
import Slider from "react-slick";
import classes from "./Testimonials.module.css";
// import Tolu from '../../assets/profile.png'

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
          <h1>What Our Students Says About Us</h1>

          <Slider {...settings} className={classes.cardContainer}>
            <div className={classes.cardWrap}>
              <div className={classes.card}>
                <div className={classes.cardText}>
                  <h4>Toyosi Oyeh</h4>
                  <h5>Student</h5>
                  <p>
                    "Mayframe Driving Academy exceeded my expectations in every
                    aspect. The instructors were not only professional but also
                    friendly, creating a comfortable learning environment. I can
                    now navigate the roads with confidence, all thanks to the
                    top-notch training I received at Mayframe."
                  </p>
                </div>
              </div>
            </div>
            <div className={classes.cardWrap}>
              <div className={classes.card}>
                <div className={classes.cardText}>
                  <h4>Adeniyi Amos</h4>
                  <h5>Student</h5>
                  <p>
                    "Choosing Mayframe Driving Academy was a game-changer for
                    me. The emphasis on defensive driving
                    techniques and practical scenarios during lessons made a
                    significant difference. Thanks to Mayframe, I not only
                    passed my driving test but also feel confident and safe
                    whenever I'm behind the wheel."
                  </p>
                </div>
              </div>
            </div>
            <div className={classes.cardWrap}>
              <div className={classes.card}>
                <div className={classes.cardText}>
                  <h4>Esther Davies</h4>
                  <h5>Student</h5>
                  <p>
                    "Enrolling in Mayframe Driving Academy was one of the best
                    decisions I made for my journey on the road. I felt
                    confident behind the wheel. I passed my driving test with
                    flying colors. Highly recommend Mayframe for anyone looking
                    to learn how to drive safely and skillfully."
                  </p>
                </div>
              </div>
            </div>
            <div className={classes.cardWrap}>
              <div className={classes.card}>
                <div className={classes.cardText}>
                  <h4>Toyosi Oyeh</h4>
                  <h5>Student</h5>
                  <p>
                    "Mayframe Driving Academy exceeded my expectations in every
                    aspect. The instructors were not only professional but also
                    friendly, creating a comfortable learning environment. I can
                    now navigate the roads with confidence, all thanks to the
                    top-notch training I received at Mayframe."
                  </p>
                </div>
              </div>
            </div>
            <div className={classes.cardWrap}>
              <div className={classes.card}>
                <div className={classes.cardText}>
                  <h4>Adeniyi Amos</h4>
                  <h5>Student</h5>
                  <p>
                    "Choosing Mayframe Driving Academy was a game-changer for
                    me. The emphasis on defensive driving
                    techniques and practical scenarios during lessons made a
                    significant difference. Thanks to Mayframe, I not only
                    passed my driving test but also feel confident and safe
                    whenever I'm behind the wheel."
                  </p>
                </div>
              </div>
            </div>
            <div className={classes.cardWrap}>
              <div className={classes.card}>
                <div className={classes.cardText}>
                  <h4>Esther Davies</h4>
                  <h5>Student</h5>
                  <p>
                    "Enrolling in Mayframe Driving Academy was one of the best
                    decisions I made for my journey on the road. I felt
                    confident behind the wheel. I passed my driving test with
                    flying colors. Highly recommend Mayframe for anyone looking
                    to learn how to drive safely and skillfully."
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
