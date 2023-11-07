import React from "react";
import classes from "./Footer2.module.css";
import { Link } from "react-router-dom/cjs/react-router-dom.min";
import Logo from "../../assets/Logo.png";
import Icon from "../../assets/location.png";
import Call from "../../assets/call.png";
import Whatsapp from "../../assets/whatsapp.png";
import Twitter from "../../assets/twitter.png";
import Instagram from "../../assets/instagram.png";
import Linkedin from "../../assets/linkedin.png";
import Facebook from "../../assets/facebook.png";
import { BsFillArrowUpCircleFill } from "react-icons/bs";
import { useEffect } from "react";

const Footer2 = () => {
  useEffect(() => {
    window.scrollTo({ top: 0, left: 0, behavior: "smooth" });
  }, []);

  return (
    <div className={classes.Container}>
      <div className={classes.innerContainer}>
        <div className={classes.columnOne}>
          <div className={classes.mfLogo}>
            <Link to="/">
              <img src={Logo} alt="Logo" />
            </Link>
          </div>
          <>
            <div className={classes.footerText}>
              <p>
                We are all about empowering growth and transforming industries
              </p>
              <div className={classes.Footerinfo}>
                <div>
                  <img src={Icon} alt="Location" />
                </div>
                <div>
                  <p>Osun State, Nigeria</p>
                </div>
              </div>
              <div className={classes.Footerinfo}>
                <div>
                  <img src={Call} alt="Call" />
                </div>
                <div>
                  <p>08066758355</p>
                </div>
              </div>
              <div className={classes.Footerinfo}>
                <div>
                  <img src={Whatsapp} alt="Whatsapp" />
                </div>
                <div>
                  <p>08066758355</p>
                </div>
              </div>
            </div>
          </>
        </div>

        <div className={classes.columnTwo}>
          <h4>Quick Links</h4>
          <ul className={classes.navlink}>
            <Link to="./">
              <li>Home</li>
            </Link>
            <Link to="./services">
              <li>Services</li>
            </Link>
            <Link to="./about">
              <li>About Us</li>
            </Link>
            <Link to="./contact">
              <li>Contact Us</li>
            </Link>
          </ul>
        </div>

        <div className={classes.columnThree}>
          <h4>Follow Us</h4>
          <div className={classes.socials}>
            <div>
              <img src={Twitter} alt="Twitter" />
            </div>
            <div>
              <img src={Instagram} alt="Instagram" />
            </div>
            <div>
              <img src={Linkedin} alt="Linkedin" />
            </div>
            <div>
              <img src={Facebook} alt="Facebook" />
            </div>
          </div>
        </div>
        <div className={classes.Email}>
          <h4>Email</h4>

          <p>consulting@mayframe-group.com</p>
        </div>
      </div>
      <div
        className={classes.scrollUp}
        onClick={() => {
          window.scrollTo({ top: 0, left: 0, behavior: "smooth" });
        }}
      >
        <BsFillArrowUpCircleFill className={classes.iconscroll} />
      </div>
    </div>
  );
};

export default Footer2;
