import React, { useRef, useState } from "react";
import classes from "./ContactForm.module.css";
import Logoa from "../../assets/ContactA/call.png";
import Logob from "../../assets/ContactA/message-text.png";
import { BsFacebook, BsInstagram, BsLinkedin, BsTwitter } from "react-icons/bs";
import emailjs from "@emailjs/browser";

const Result = () => {
  return <p>Thank you for signing up, sit tight for the Mayframe experience.</p>;
};

const ContactForm = () => {
  const [result, showResult] = useState(false, true);
  const form = useRef();
  const sendEmail = (e) => {
    e.preventDefault();

    emailjs
      .sendForm(
        "service_fm9wxbi",
        "template_82zwegb",
        form.current,
        "A6AptbzQPnXjuVgNa"
      )
      .then(
        (result) => {
          console.log(result.text);
          console.log(
            "Thank you for signing up, sit tight for the Mayframe experience."
          );
        },
        (error) => {
          console.log(error.text);
          console.log("Messae not sent");
        }
      );

    form.current.reset();
    showResult(true);
  };
  setTimeout(() => {
    showResult(false);
  }, 5000);

  return (
    <div className={classes.container}>
      <div className={classes.innercontainer}>
        <h2>Get In Touch With Us</h2>
        <div className={classes.maincontainer}>
          <div className={classes.sectionText}>
            <p>
              We would love to speak with you. Feel free to reach out using the
              details below.
            </p>

            <div className={classes.aboutInfo}>
              <div className={classes.aboutLogo}>
                <img src={Logoa} alt="Phone" />
              </div>
              <div className={classes.aboutText}>
                <p>08066758355, 09050507071, 08024443466 </p>
              </div>
            </div>

            <div className={classes.aboutInfo}>
              <div className={classes.aboutLogo}>
                <img src={Logob} alt="Mail" />
              </div>
              <div className={classes.aboutText}>
                <p>info@mayframe-group.com</p>
              </div>
            </div>
            <h5>Hours</h5>
            <p>Mon-Sat 9:00AM - 5:00PM</p>
            <h5>Follow Us</h5>
            <div className={classes.socials}>
              <div>
                <BsTwitter className={classes.TwitterSocial} />
              </div>
              <div>
                <BsInstagram className={classes.TwitterSocial} />
              </div>
              <div>
                <BsLinkedin className={classes.TwitterSocial} />
              </div>
              <div>
                <BsFacebook className={classes.TwitterSocial} />
              </div>
            </div>
          </div>

          <div className={classes.sectionFormA}>
            <form ref={form} onSubmit={sendEmail}>
              <input
                type="text"
                name="FirstName"
                placeholder="First Name"
                required
              ></input>
              <input
                type="text"
                name="LastName"
                placeholder="Last Name"
                required
              ></input>
              <input
                type="text"
                name="Email"
                placeholder="Email Address"
                required
              ></input>
              <input
                type="text"
                name="Phone"
                placeholder="Phone Number"
                required
              ></input>
              <input
                type="text"
                name="Message"
                placeholder="Message"
                className={classes.MessagesA}
              ></input>
              <button>Send Message</button>
              <div className={classes.MyRow}>{result ? <Result /> : null} </div>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ContactForm;
