import React, { Component } from "react";
import Slider from "react-slick";
import classes from "./TestimonyFarm.module.css";

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
                  <h4>Adegoke Jones</h4>
                  <h5>Client</h5>
                  <p>
                    "I've been a loyal customer of Mayframe Agro & Farms for the
                    past two years, and I couldn't be happier with the quality
                    of their produce. I appreciate their commitment to
                    sustainable farming practices. Mayframe has become my go-to
                    source for organic and locally sourced produce."
                  </p>
                </div>
              </div>
            </div>
            <div className={classes.cardWrap}>
              <div className={classes.card}>
                <div className={classes.cardText}>
                  <h4>Ebenezer Jacobs</h4>
                  <h5>Client</h5>
                  <p>
                    "I recently visited Mayframe Agro & Farms for a farm tour,
                    and I was thoroughly impressed with their commitment to
                    sustainable and ethical farming. The team's passion for
                    agriculture and environmental responsibility is evident in
                    every aspect of their operation. I now have a deeper
                    appreciation for where my food comes from and how it's
                    grown."
                  </p>
                </div>
              </div>
            </div>
            <div className={classes.cardWrap}>
              <div className={classes.card}>
                <div className={classes.cardText}>
                  <h4>Ola David</h4>
                  <h5>Client</h5>
                  <p>
                    "I have been a supporter of local businesses, and Mayframe
                    has exceeded my expectations. Their dedication
                    to supporting the local community, providing employment
                    opportunities, and promoting sustainable agriculture makes
                    me proud to be a customer. The quality of their produce is
                    unmatched, and I'm happy to a part of their company."
                  </p>
                </div>
              </div>
            </div>
            <div className={classes.cardWrap}>
              <div className={classes.card}>
                <div className={classes.cardText}>
                  <h4>Adegoke Jones</h4>
                  <h5>Client</h5>
                  <p>
                    "I've been a loyal customer of Mayframe Agro & Farms for the
                    past two years, and I couldn't be happier with the quality
                    of their produce. I appreciate their commitment to
                    sustainable farming practices. Mayframe has become my go-to
                    source for organic and locally sourced produce."
                  </p>
                </div>
              </div>
            </div>
            <div className={classes.cardWrap}>
              <div className={classes.card}>
                <div className={classes.cardText}>
                  <h4>Ebenezer Jacobs</h4>
                  <h5>Client</h5>
                  <p>
                    "I recently visited Mayframe Agro & Farms for a farm tour,
                    and I was thoroughly impressed with their commitment to
                    sustainable and ethical farming. The team's passion for
                    agriculture and environmental responsibility is evident in
                    every aspect of their operation. I now have a deeper
                    appreciation for where my food comes from and how it's
                    grown."
                  </p>
                </div>
              </div>
            </div>
            <div className={classes.cardWrap}>
              <div className={classes.card}>
                <div className={classes.cardText}>
                  <h4>Ola David</h4>
                  <h5>Client</h5>
                  <p>
                    "I have been a supporter of local businesses, and Mayframe
                    has exceeded my expectations. Their dedication
                    to supporting the local community, providing employment
                    opportunities, and promoting sustainable agriculture makes
                    me proud to be a customer. The quality of their produce is
                    unmatched, and I'm happy to a part of their company."
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
