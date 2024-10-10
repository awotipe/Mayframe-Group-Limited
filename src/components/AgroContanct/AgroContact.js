import React, { useRef, useState } from 'react'
import classes from './Agrocontact.module.css'
import emailjs from '@emailjs/browser'

const response = () => {
  return(
    <p>Thank you! Your massage has been sent successfully</p>
  );
}

const ContactUs = () => {
  const [response, showResponse] = useState (false, true);
  const form =useRef()
  const sendEmail = (e) => {e.preventDefalt();
    emailjs.sendForm("service_qj45srq", "template_82zwegb",form.current, "A6AptbzQPnXjuVgNa")
    .then(
      (response) => {
        console.log(response.text);
        console.log("Thank you! Your massage has been sent successfully"); 
      },
      (error) => {
        console.log(error.text);
        console.log("Message not sent");
      }
    );
    form.current.reset();
    showResponse(true);
  };
  setTimeout(() => {showResponse(false);}, 5000);
  return (
    <div className={classes.container}>
        <div className={classes.contactflex}>
            <div className={classes.text}>
                  <h2>Get In Touch To See How We Can Help.</h2>
            </div>
        <form ref={form} onSubmit={sendEmail}>
            <h3>ContactUs</h3>

            <input type='text' name='First Name' placeholder='First Name' required/><br/>
            <input type='email' name='email' placeholder='Email' required/><br/>
            <input type='number' name='number' placeholder='Phone Number' required/><br/>
            <textarea placeholder='Message'></textarea><br/>
            <button>Send Message</button>
            <div className={classes.row}>{response ? <response /> : null}</div>
        </form>
        </div>
    </div>
  )
}

export default ContactUs