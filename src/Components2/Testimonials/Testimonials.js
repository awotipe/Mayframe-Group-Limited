import classes from "./Testimonials.module.css";
import React, { Component } from "react";
import Slider from "react-slick";
import Tolu from "../../assets/tolu.png";

export default class Testimonials extends Component {
  render() {
    const settings = {
      dots: true,
      infinite: true,
      autoplay: true,
      arrows: true,
      speed: 2000,
      slidesToShow: 3,
      slidesToScroll: 1,
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
          breakpoint: 768,
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
        </div>
        <Slider {...settings} className={classes.cardContainer}>
          <div className={classes.cardWrap}>
            <div className={classes.card}>
              <div className={classes.cardText}>
                <div className={classes.imageDiv}>
                  <img src={Tolu} alt="tolu" />
                </div>
                <h4>Toyosi Wale</h4>
                <h5>Business Woman</h5>
                <p>
                  Choosing Mayframe driving academy was the best decision I made
                  for learning how to drive. The instructors were patient,
                  knowledgeable, and made me feel at ease behind the wheel.
                  Thanks to their expert guidance, I gained the skills and
                  confidence to pass my driving test with ease.
                </p>
              </div>
            </div>
          </div>
          <div className={classes.cardWrap}>
            <div className={classes.card}>
              <div className={classes.cardText}>
                <div className={classes.imageDiv}>
                  <img src={Tolu} alt="tolu" />
                </div>
                <h4>Toyosi Wale</h4>
                <h5>Business Woman</h5>
                <p>
                  Choosing Mayframe driving academy was the best decision I made
                  for learning how to drive. The instructors were patient,
                  knowledgeable, and made me feel at ease behind the wheel.
                  Thanks to their expert guidance, I gained the skills and
                  confidence to pass my driving test with ease.
                </p>
              </div>
            </div>
          </div>

          <div className={classes.cardWrap}>
            <div className={classes.card}>
              <div className={classes.cardText}>
                <div className={classes.imageDiv}>
                  <img src={Tolu} alt="tolu" />
                </div>
                <h4>Toyosi Wale</h4>
                <h5>Business Woman</h5>
                <p>
                  Choosing Mayframe driving academy was the best decision I made
                  for learning how to drive. The instructors were patient,
                  knowledgeable, and made me feel at ease behind the wheel.
                  Thanks to their expert guidance, I gained the skills and
                  confidence to pass my driving test with ease.
                </p>
              </div>
            </div>
          </div>

          <div className={classes.cardWrap}>
            <div className={classes.card}>
              <div className={classes.cardText}>
                <div className={classes.imageDiv}>
                  <img src={Tolu} alt="tolu" />
                </div>
                <h4>Toyosi Wale</h4>
                <h5>Business Woman</h5>
                <p>
                  Choosing Mayframe driving academy was the best decision I made
                  for learning how to drive. The instructors were patient,
                  knowledgeable, and made me feel at ease behind the wheel.
                  Thanks to their expert guidance, I gained the skills and
                  confidence to pass my driving test with ease.
                </p>
              </div>
            </div>
          </div>

          <div className={classes.cardWrap}>
            <div className={classes.card}>
              <div className={classes.cardText}>
                <div className={classes.imageDiv}>
                  <img src={Tolu} alt="tolu" />
                </div>
                <h4>Toyosi Wale</h4>
                <h5>Business Woman</h5>
                <p>
                  Choosing Mayframe driving academy was the best decision I made
                  for learning how to drive. The instructors were patient,
                  knowledgeable, and made me feel at ease behind the wheel.
                  Thanks to their expert guidance, I gained the skills and
                  confidence to pass my driving test with ease.
                </p>
              </div>
            </div>
          </div>

          <div className={classes.cardWrap}>
            <div className={classes.card}>
              <div className={classes.cardText}>
                <div className={classes.imageDiv}>
                  <img src={Tolu} alt="tolu" />
                </div>
                <h4>Toyosi Wale</h4>
                <h5>Business Woman</h5>
                <p>
                  Choosing Mayframe driving academy was the best decision I made
                  for learning how to drive. The instructors were patient,
                  knowledgeable, and made me feel at ease behind the wheel.
                  Thanks to their expert guidance, I gained the skills and
                  confidence to pass my driving test with ease.
                </p>
              </div>
            </div>
          </div>
        </Slider>
      </div>
    );
  }
}