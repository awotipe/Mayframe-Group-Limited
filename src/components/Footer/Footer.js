import React, { useEffect } from "react";
import classes from "./Footer.module.css";
import Footlogo from "../../assets/Logo.png";
import Location from "../../assets/location.png";
import Call from "../../assets/call.png";
import Twitter from "../../assets/twitter.png";
import Instagram from "../../assets/instagram.png";
import Linkedin from "../../assets/linkedin.png";
import Facebook from "../../assets/facebook.png";
import Whatsapp from "../../assets/whatsapp.png";
import { Link } from "react-router-dom";
import { BsFillArrowUpCircleFill } from "react-icons/bs";

const Footer = () => {
  useEffect(() => {
    window.scrollTo({ top: 0, left: 0, behavior: "smooth" });
  }, []);
  return (
    <div className={classes.container}>
      <div className={classes.innerContainer}>
        <div className={classes.logoSide}>
        <Link to="/" onClick={() => {
              window.location.href = "/"
            }}>
              <img src={Footlogo} className={classes.footerLogo} alt="logo" />
            </Link>
          {/* <img src={Footlogo} alt="Footer Logo" /> */}
          <p>We are all about empowering growth and transforming industries</p>

          <div className={classes.logoAddress}>
            <img src={Location} alt="Location Icon" />
            <p>Osun State, Nigeria</p>
          </div>
          <div className={classes.logoAddress}>
            <img src={Call} alt="Call Icon" />
            <p>08024443466</p>
          </div>
          <div className={classes.logoAddress}>
            <img src={Whatsapp} alt="Whatsapp Icon" />
            <p>08066758355</p>
          </div>
        </div>
        <div className={classes.followUs}>
          <div className={classes.follow}>
            <h4>Quick Links</h4>
            <Link to="/" onClick={() => {
              window.location.href = "/"
            }}>
              <p>Home</p>
            </Link>
            <Link to="/services" onClick={() => {
              window.location.href = "/services"
            }}>
              <p>Services</p>
            </Link>
            <Link to="/about" onClick={() => {
              window.location.href = "/about"
            }}>
              <p>About Us</p>
            </Link>
            <Link to="/contact" onClick={() => {
              window.location.href = "/contact"
            }}>
              <p>Contact Us</p>
            </Link>
          </div>
          <div className={classes.follow}>
            <h4>Follow Us</h4>
            <div className={classes.followIcons}>
              <img src={Twitter} alt="twitter icon" />
              <img src={Instagram} alt="instagram Icon" />
              <img src={Linkedin} alt="linkedin Icon" />
              <img src={Facebook} alt="facebook Icon" />
            </div>
          </div>
          <div className={classes.follow}>
            <h4>Email</h4>
            <p>info@mayframe-group.com</p>
          </div>
        </div>
      </div>
      <div className={classes.scrollUp} onClick={() => {
          window.scrollTo({ top: 0, left: 0, behavior: "smooth" });
        }}
      >
        <BsFillArrowUpCircleFill className={classes.iconscroll} />
      </div>
    </div>
  );
};

export default Footer;
