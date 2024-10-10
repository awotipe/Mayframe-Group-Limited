import React, { useState } from "react";
import classes from "./HeaderProperty.module.css";
import Logo from "../../assets/LogoProperty.png";
import { Link } from "react-router-dom";
import { HiOutlineMenuAlt4 } from "react-icons/hi";
import { AiOutlineClose } from "react-icons/ai";


const HeaderProperty = () => {
    const [navOpen, setNavOpen] = useState(false);

    const handleNavToggle = () => {
      setNavOpen(!navOpen);
    };
  
    const handleNavLinkClick = () => {
      setNavOpen(false);
    };
  return (
    <div className={classes.container}>
      <div className={classes.innerContainer}>
        <header>
          <div className={classes.logo}>
            <Link to="/">
              <img src={Logo} alt="logo" />
            </Link>
          </div>
          <nav className={classes.navMenu}>
            <Link to="/" className={classes.navlink} onClick={handleNavLinkClick}>
              <li>Home</li>
            </Link>
            <Link to="/services" className={classes.navlink} onClick={handleNavLinkClick}>
              <li>Services</li>
            </Link>
            <Link to="/about" className={classes.navlink} onClick={handleNavLinkClick}>
              <li>About Us</li>
            </Link>
            <Link to="/initiative" className={classes.navlink} onClick={handleNavLinkClick}>
              <li>Initiative</li>
            </Link>
            <Link to="/contact" className={classes.navlink} onClick={handleNavLinkClick}>
              <li>Contact Us</li>
            </Link>
          </nav>
      <div className={classes.hamburger} onClick={handleNavToggle}>
        {!navOpen ? (
          <HiOutlineMenuAlt4 className={classes.Icons} />
        ) : (
          <AiOutlineClose className={classes.Icons} />
        )}
      </div>
      <div className={navOpen ? classes.active : classes.mobileMenu}>
      <nav className={classes.mobileNav}>
            <Link to="/" className={classes.navlink} onClick={handleNavLinkClick}>
              <li>Home</li>
            </Link>
            <Link to="/services" className={classes.navlink} onClick={handleNavLinkClick}>
              <li>Services</li>
            </Link>
            <Link to="/about" className={classes.navlink} onClick={handleNavLinkClick}>
              <li>About Us</li>
            </Link>
            <Link to="/initiative" className={classes.navlink} onClick={handleNavLinkClick}>
              <li>Initiative</li>
            </Link>
            <Link to="/contact" className={classes.navlink} onClick={handleNavLinkClick}>
              <li>Contact Us</li>
            </Link>
          </nav>
          </div>
        </header>
      </div>
    </div>
  )
}

export default HeaderProperty
