import React, { Component } from "react";
import Slider from "react-slick";
import classes from "./TestimonyConsult.module.css";

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
                  <h4>Felix Okon</h4>
                  <h5>Business Man</h5>
                  <p>
                    "Mayframe Consultancy has been a game-changer for our
                    business. Their strategic insights and personalized approach
                    helped us navigate challenges and unlock new opportunities.
                    The team's dedication to our success is evident in every
                    interaction, making them an invaluable partner in our growth
                    journey."
                  </p>
                </div>
              </div>
            </div>
            <div className={classes.cardWrap}>
              <div className={classes.card}>
                <div className={classes.cardText}>
                  <h4>Kayode Bernard</h4>
                  <h5>Entrepreneur</h5>
                  <p>
                    "Working with Mayframe Consultancy has been a truly
                    enriching experience. Their team's deep industry knowledge
                    and innovative solutions have transformed our operations,
                    resulting in measurable improvements. I highly recommend
                    Mayframe to any business seeking expert guidance and a
                    reliable partner."
                  </p>
                </div>
              </div>
            </div>
            <div className={classes.cardWrap}>
              <div className={classes.card}>
                <div className={classes.cardText}>
                  <h4>High-Class Tech Hub</h4>
                  <h5>Information Technology</h5>
                  <p>
                    "Mayframe Consultancy stands out for its professionalism,
                    integrity, and results-driven approach. The team's in-depth
                    analysis and strategic recommendations have significantly
                    impacted our bottom line. If you're looking for a
                    consultancy that delivers on its promises, Mayframe is the
                    name you can trust."
                  </p>
                </div>
              </div>
            </div>
            <div className={classes.cardWrap}>
              <div className={classes.card}>
                <div className={classes.cardText}>
                  <h4>Felix Okon</h4>
                  <h5>Business Man</h5>
                  <p>
                    "Mayframe Consultancy has been a game-changer for our
                    business. Their strategic insights and personalized approach
                    helped us navigate challenges and unlock new opportunities.
                    The team's dedication to our success is evident in every
                    interaction, making them an invaluable partner in our growth
                    journey."
                  </p>
                </div>
              </div>
            </div>
            <div className={classes.cardWrap}>
              <div className={classes.card}>
                <div className={classes.cardText}>
                  <h4>Kayode Bernard</h4>
                  <h5>Entrepreneur</h5>
                  <p>
                    "Working with Mayframe Consultancy has been a truly
                    enriching experience. Their team's deep industry knowledge
                    and innovative solutions have transformed our operations,
                    resulting in measurable improvements. I highly recommend
                    Mayframe to any business seeking expert guidance and a
                    reliable partner."
                  </p>
                </div>
              </div>
            </div>
            <div className={classes.cardWrap}>
              <div className={classes.card}>
                <div className={classes.cardText}>
                  <h4>High-Class Tech Hub</h4>
                  <h5>Information Technology</h5>
                  <p>
                    "Mayframe Consultancy stands out for its professionalism,
                    integrity, and results-driven approach. The team's in-depth
                    analysis and strategic recommendations have significantly
                    impacted our bottom line. If you're looking for a
                    consultancy that delivers on its promises, Mayframe is the
                    name you can trust."
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
