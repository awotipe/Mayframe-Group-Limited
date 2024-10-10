import React, { Component } from "react";
import Slider from "react-slick";
import classes from "./TestimonyInvest.module.css";

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
                  <h4>Adebayo Olukayode</h4>
                  <h5>Investor</h5>
                  <p>
                    "Mayframe Investment has been a reliable partner on my
                    financial journey. Their clear communication and regular
                    updates keep me informed and engaged. I appreciate the
                    transparency and integrity that Mayframe brings to the
                    table. Choosing Mayframe Investment was a smart move for me,
                    and I highly recommend their services."
                  </p>
                </div>
              </div>
            </div>
            <div className={classes.cardWrap}>
              <div className={classes.card}>
                <div className={classes.cardText}>
                  <h4>Dr Daniel Elvis</h4>
                  <h5>Investor</h5>
                  <p>
                    "As someone relatively new to the world of investments,
                    Mayframe has been instrumental in guiding me through the
                    process. Their team patiently explained complex concepts,
                    answered all my questions, and crafted an investment
                    strategy tailored to my needs."
                  </p>
                </div>
              </div>
            </div>
            <div className={classes.cardWrap}>
              <div className={classes.card}>
                <div className={classes.cardText}>
                  <h4>Usman Umar</h4>
                  <h5>Investor</h5>
                  <p>
                    "Mayframe Investment has truly transformed my financial
                    journey. Their expert team provided personalized guidance,
                    helping me navigate the complex world of investments with
                    ease. Thanks to Mayframe, I've seen consistent growth in my
                    portfolio, and I now feel more confident about my financial
                    future."
                  </p>
                </div>
              </div>
            </div>
            <div className={classes.cardWrap}>
              <div className={classes.card}>
                <div className={classes.cardText}>
                  <h4>Adebayo Olukayode</h4>
                  <h5>Investor</h5>
                  <p>
                    "Mayframe Investment has been a reliable partner on my
                    financial journey. Their clear communication and regular
                    updates keep me informed and engaged. I appreciate the
                    transparency and integrity that Mayframe brings to the
                    table. Choosing Mayframe Investment was a smart move for me,
                    and I highly recommend their services."
                  </p>
                </div>
              </div>
            </div>
            <div className={classes.cardWrap}>
              <div className={classes.card}>
                <div className={classes.cardText}>
                  <h4>Dr Daniel Elvis</h4>
                  <h5>Investor</h5>
                  <p>
                    "As someone relatively new to the world of investments,
                    Mayframe has been instrumental in guiding me through the
                    process. Their team patiently explained complex concepts,
                    answered all my questions, and crafted an investment
                    strategy tailored to my needs."
                  </p>
                </div>
              </div>
            </div>
            <div className={classes.cardWrap}>
              <div className={classes.card}>
                <div className={classes.cardText}>
                  <h4>Usman Umar</h4>
                  <h5>Investor</h5>
                  <p>
                    "Mayframe Investment has truly transformed my financial
                    journey. Their expert team provided personalized guidance,
                    helping me navigate the complex world of investments with
                    ease. Thanks to Mayframe, I've seen consistent growth in my
                    portfolio, and I now feel more confident about my financial
                    future."
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
