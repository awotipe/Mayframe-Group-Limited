import React, {useRef, useState} from 'react'
import classes from "./ContactUsProps.module.css" 
import emailjs from '@emailjs/browser'

const Result = () => {
  return(
    <p>Thank you for signing up, sit tight for the Mayfare experience.</p>
  );
}

const ContactUsProps = (props) => {
    const [result, showResult] = useState (false, true)
    const form = useRef()
    const sendEmail = (e) => {e.preventDefault();
    
      emailjs.sendForm("service_fm9wxbi", "template_82zwegb", form.current, "A6AptbzQPnXjuVgNa")
      .then(
        (result) => {
          console.log(result.text);
          console.log("Thank you for signing up, sit tight for the Mayfare experience.")
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
                <div className={classes.row}>{result ? <Result /> : null } </div>
                <h3>Contact Us</h3>
              <input type='text' name='FullName' placeholder='Full Name'></input>
              <input type='text' name='Email' placeholder='Email Address'></input>
              <input type='text' name='Phone' placeholder='Phone Number'></input>
              <input type='text' name='Message' placeholder='Message' className={classes.Messages}></input>
              <button>Send Message</button>
              </form>
            </div>
          
       </div>
    </div>
  )
}

export default ContactUsProps