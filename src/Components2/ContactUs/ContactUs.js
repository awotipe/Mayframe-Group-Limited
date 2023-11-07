import React,  {useRef, useState} from 'react'
import classes from './ContactUs.module.css'
import emailjs from '@emailjs/browser'


const Result = () => {
    return(
        <p>Your message is successfull sent!</p>
    )
}

const ContactUs = () => {
     const [result, showResult] = useState (false, true)
     const form = useRef ()
     const sendEmail = (e) => {
        e.preventDefault();

        emailjs.sendForm("service_sq3qgfw", "template_sjgp1bk", form.current, "zGdcgj5if6kLr1UShnnpm ")
        .then(
            (result) => {
                console.log(result.text);
                console.log("Your message has been successfully sent")
            },
            (error) => {
                console.log(error.text);
                console.log("Message not sent");
            }
        );
      form.current.reset();
      showResult(true);  
        };
     setTimeout(() => {
        showResult(false);
     }, 5000 );


  return (
    <div className= {classes.container}>
        <div className= {classes.innerContainer}>
            <div className= {classes.textContainer}>
                <h1>Start Your Driving Training With Us Now!</h1>
            </div>
                <div className= {classes.formContainer}>
                        <form ref={form} onSubmit={sendEmail}>
                            <div className= {classes.row} > {result ? <Result /> : null}</div>
                            <h3>Contact Us</h3>
                            <input type="text" name="FullName" placeholder="Full Name"></input>
                            <input type="text" name="Email" placeholder="Email Address"></input>
                            <input type="text" name="Phone" placeholder="Phone Number"></input>
                             <div className={classes.textArea}>
                            <input type="text" name="Message" placeholder="Messages"></input>
                            </div>
                            <button>Send Message</button>
                        </form>
                </div>
             </div>
        </div>    
  )
}

export default ContactUs