import React, { useState } from "react";
import classes from "./Header.module.css";
import Logo from "../../assets/Logo.png";
import { Link, NavLink } from "react-router-dom";
import { HiOutlineMenuAlt4 } from "react-icons/hi";
import { AiOutlineClose } from "react-icons/ai";

const Header = () => {
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
            <NavLink to="/" className={({ isActive }) => (isActive ? classes.active : "")} onClick={handleNavLinkClick}>
              <li>Home</li>
            </NavLink>
            <NavLink to="/services" className={({ isActive }) => (isActive ? classes.active : "")} onClick={handleNavLinkClick}>
              <li>Services</li>
            </NavLink>
            <NavLink to="/about" className={({ isActive }) => (isActive ? classes.active : "")} onClick={handleNavLinkClick}>
              <li>About Us</li>
            </NavLink>
            <NavLink to="/initiative" className={({ isActive }) => (isActive ? classes.active : "")} onClick={handleNavLinkClick}>
              <li>Initiative</li>
            </NavLink>
            <NavLink to="/contact" className={({ isActive }) => (isActive ? classes.active : "")} onClick={handleNavLinkClick}>
              <li>Contact Us</li>
            </NavLink>
          </nav>
      <div className={classes.hamburger} onClick={handleNavToggle}>
        {!navOpen ? (
          <HiOutlineMenuAlt4 className={classes.Icons} />
        ) : (
          <AiOutlineClose className={classes.Icons} />
        )}
      </div>
      <div className={navOpen ? classes.actives : classes.mobileMenu}>
      <nav className={classes.mobileNav}>
            <NavLink to="/" className={({ isActive }) => (isActive ? classes.active : "")} onClick={handleNavLinkClick}>
              <li>Home</li>
            </NavLink>
            <NavLink to="/services" className={({ isActive }) => (isActive ? classes.active : "")} onClick={handleNavLinkClick}>
              <li>Services</li>
            </NavLink>
            <NavLink to="/about" className={({ isActive }) => (isActive ? classes.active : "")} onClick={handleNavLinkClick}>
              <li>About Us</li>
            </NavLink>
            <NavLink to="/initiative" className={({ isActive }) => (isActive ? classes.active : "")} onClick={handleNavLinkClick}>
              <li>Initiative</li>
            </NavLink>
            <NavLink to="/contact" className={({ isActive }) => (isActive ? classes.active : "")} onClick={handleNavLinkClick}>
              <li>Contact Us</li>
            </NavLink>
          </nav>
          </div>
        </header>
      </div>
    </div>
  );
};

export default Header;