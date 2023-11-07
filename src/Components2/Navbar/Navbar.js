import React, {useState} from 'react'
import classes from './Navbar.module.css'
import {Link} from "react-router-dom"
import Logo from '../../assets/Logo2.png'
import {HiOutlineMenuAlt4} from 'react-icons/hi'
import {AiOutlineClose} from 'react-icons/ai'


const Navbar = () => {
  const [navOpen, setNavOpen] = useState(false);

  const handleNavToggle = () => {
    setNavOpen(!navOpen)
  };

  const handleNavLinkClick = () => {
    setNavOpen(false);
  };

  return (
    <div className = {classes.container}>
      <div className = {classes.innercontainer}>
      <div className = {classes.logo}>
          <Link to='/'>
            <img src = {Logo} alt ="/"/>
          </Link>
      </div>
          <ul className={classes.navMenu}>
            <Link to='/' className= {classes.navLink} onClick={handleNavLinkClick}>
              <li>Home</li>
            </Link>
            <Link to='/services' className={classes.navLink} onClick={handleNavLinkClick}>
              <li>Services</li>
            </Link>
            <Link to='/about' className={classes.navLink} onClick={handleNavLinkClick}>
              <li>About Us</li>
            </Link>
            <Link to='/contact' className={classes.navLink} onClick={handleNavLinkClick}>
              <li>Contact Us</li>
            </Link>
            </ul>
          <div className= {classes.hamburger} onClick={handleNavToggle}>
            { !navOpen ? (
              < HiOutlineMenuAlt4 className = {classes.Icons} />
            ) : (
              <AiOutlineClose className = {classes.Icons} />
            )}
          </div>
          <div className= {navOpen ? classes.active : classes.mobileMenu}>
          <ul className={classes.mobileNav}>
            <Link to='/' className= {classes.navLink} onClick={handleNavLinkClick}>
              <li>Home</li>
            </Link>
            <Link to='/services' className={classes.navLink} onClick={handleNavLinkClick}>
              <li>Services</li>
            </Link>
            <Link to='/about' className={classes.navLink} onClick={handleNavLinkClick}>
              <li>About Us</li>
            </Link>
            <Link to='/contact' className={classes.navLink} onClick={handleNavLinkClick}>
              <li>Contact Us</li>
            </Link>
            </ul>
          </div>
      </div>
    </div>
  )
}

export default Navbar