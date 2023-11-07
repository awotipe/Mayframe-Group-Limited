import React, { Component } from "react";
import Slider from "react-slick";
import classes from './Testimonials.module.css'
import Tolu from '../../assets/profile.png'

export default class Autoplay extends Component {
    render() {
      const settings = {
        dots: true,
        arrows: true,
        infinite: true,
        slidesToShow: 3,
        slidesToScroll: 1,
        autoplay: false,
        speed: 2000,
        autoplaySpeed: 2000,
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
                <div className={classes.imageDiv}>
                <img src={Tolu} alt="Tolu" />
                </div>
                <h4>Toyosi Oyeh</h4>
                <h5>Business Woman</h5>
                <p>Choosing Mayframe driving  academy was the best decision 
                I made for learning how to drive. The instructors were patient,
                 knowledgeable, and made me feel at ease behind the wheel. 
                Thanks to their expert guidance, I gained the skills and confidence
                 to pass my driving test with ease.</p>
              </div>
              </div>
              </div>
              <div className={classes.cardWrap}>
              <div className={classes.card}>
              <div className={classes.cardText}>
                <div className={classes.imageDiv}>
                <img src={Tolu} alt="Tolu" />
                </div>
                <h4>Toyosi Oyeh</h4>
                <h5>Business Woman</h5>
                <p>Choosing Mayframe driving  academy was the best decision 
                I made for learning how to drive. The instructors were patient,
                 knowledgeable, and made me feel at ease behind the wheel. 
                Thanks to their expert guidance, I gained the skills and confidence
                 to pass my driving test with ease.</p>
              </div>
              </div>
              </div>
              <div className={classes.cardWrap}>
              <div className={classes.card}>
              <div className={classes.cardText}>
                <div className={classes.imageDiv}>
                <img src={Tolu} alt="Tolu" />
                </div>
                <h4>Toyosi Oyeh</h4>
                <h5>Business Woman</h5>
                <p>Choosing Mayframe driving  academy was the best decision 
                I made for learning how to drive. The instructors were patient,
                 knowledgeable, and made me feel at ease behind the wheel. 
                Thanks to their expert guidance, I gained the skills and confidence
                 to pass my driving test with ease.</p>
              </div>
              </div>
              </div>
              <div className={classes.cardWrap}>
              <div className={classes.card}>
              <div className={classes.cardText}>
                <div className={classes.imageDiv}>
                <img src={Tolu} alt="Tolu" />
                </div>
                <h4>Toyosi Oyeh</h4>
                <h5>Business Woman</h5>
                <p>Choosing Mayframe driving  academy was the best decision 
                I made for learning how to drive. The instructors were patient,
                 knowledgeable, and made me feel at ease behind the wheel. 
                Thanks to their expert guidance, I gained the skills and confidence
                 to pass my driving test with ease.</p>
              </div>
              </div>
              </div>
              <div className={classes.cardWrap}>
              <div className={classes.card}>
              <div className={classes.cardText}>
                <div className={classes.imageDiv}>
                <img src={Tolu} alt="Tolu" />
                </div>
                <h4>Toyosi Oyeh</h4>
                <h5>Business Woman</h5>
                <p>Choosing Mayframe driving  academy was the best decision 
                I made for learning how to drive. The instructors were patient,
                 knowledgeable, and made me feel at ease behind the wheel. 
                Thanks to their expert guidance, I gained the skills and confidence
                 to pass my driving test with ease.</p>
              </div>
              </div>
              </div>
              
             
          </Slider>
          </div>
        </div>
      );
    }
  }