import React, {useRef, useState} from 'react'
import classes from "./ContactUsProps.module.css" 
import emailjs from '@emailjs/browser'

const Result = () => {
  return(
    <p>Thank you! Your message has been sent successfuly.</p>
  );
}

const ContactUsProps = (props) => {
    const [result, showResult] = useState (false, true)
    const form = useRef()
    const sendEmail = (e) => {e.preventDefault();
    
      emailjs.sendForm("service_eneqvnx", "template_va1rmwr", form.current, "quapwaVwgmnNAcf1N")
      .then(
        (result) => {
          console.log(result.text);
          console.log("Thank you! Your message has been sent successfuly.")
        },
      (error) => {
        console.log(error.text);
        console.log("Messae not sent")
      }
      );

      form.current.reset();
      showResult(true);
    };
    setTimeout(() => { showResult(false); }, 5000);
  return (
    <div className={classes.container}>
        <div className={classes.innerContainer}>
          <div className={classes.textssContainer}>
            <h1>{props.sideText}</h1>
            </div>
            <div className={classes.formContainer}>
              <form ref={form} onSubmit={sendEmail}>
                <h3>Contact Us</h3>
              <input type='text' name='FullName' placeholder='Full Name' required></input>
              <input type='email' name='Email' placeholder='Email Address' required></input>
              <input type='phone' name='Phone' placeholder='Phone Number' required></input>
              <input type='text' name='Message' placeholder='Message' className={classes.Messages}></input>
              <button>Send Message</button>
              <div className={classes.row}>{result ? <Result /> : null } </div>
              </form>
            </div>
          
       </div>
    </div>
  )
}

export default ContactUsProps