import React from "react";
import classes from './Map.module.css'

function App() {
   
    return (

      <div className={classes.container}>
        <iframe title="myFrame"
          src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d1012564.3747779531!2d3.8957547041667318!3d7.53898745133182!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x103788dbf714e12b%3A0x9f5c322d54afdb38!2sKobo%20St%2C%20230104%2C%20Osogbo%2C%20Osun!5e0!3m2!1sen!2sng!4v1689846114700!5m2!1sen!2sng"
          style={{ border: "0" }}
          allowfullscreen=""
          loading="lazy"
        ></iframe>
      </div>
    );
  }
  
  export default App;