import React from 'react'
import classes from './WelcomeDrive.module.css'
import Vector from '../../assets/Vector.png'
import Vectora from '../../assets/briefcase.png'
import Vectorb from '../../assets/headphone.png'
import Vectorc from '../../assets/chart.png'
import whiteCar from '../../assets/white car.png'
import Instructor from '../../assets/instructor.png'

const WelcomeDrive = () => {
  return (
    <div className={classes.container}>
        <div className ={classes.mainContainer}>
        <div className={classes.innercontainer}>
          <div className={classes.firstText}>
              <h3>Welcome to Mayframe Driving Academy</h3>
              <p>Mayframe operates a leading driving academy that aims to provide comprehensive and professional driver training. 
                Whether it's for beginners or experienced drivers looking to enhance their skills,
                 the academy offers a structured curriculum and qualified instructors to ensure safe and confident driving.
                  The driving academy covers both theoretical knowledge and practical training,
                 equipping individuals with the necessary skills to navigate the roads with responsibility.</p>
             </div>
          <div className={classes.firstPack}>
          <div className={classes.welcomeMain}>
            <div className={classes.cardWrap}>
              <div className ={classes.Logo}>
              <img src= {Vector} alt='logo' />
              </div>
              <h4>Safety</h4>
            </div>
           <p> We teach our students how to drive responsibly, 
            follow traffic rules, and minimize risks on road.</p>
          </div>
          <div className={classes.welcomeMain}>
            <div className={classes.cardWrap}>
              <div className ={classes.Logo}>
              <img src= {Vectora} alt='logo' />
              </div>
              <h4>Professionalism</h4>
            </div>
           <p> We maintain high level of professionalism in all aspect of our operations..</p>
          </div>
          </div>
          <div className={classes.firstPack}>
          <div className={classes.welcomeMain}>
            <div className={classes.cardWrap}>
              <div className ={classes.Logo}>
              <img src= {Vectorb} alt='logo' />
              </div>
              <h4>Customer Service</h4>
            </div>
           <p> We aim to be responsive, attentive, and accommodating to 
            the needs and concerns of students and their families..</p>
          </div>
          <div className={classes.welcomeMain}>
            <div className={classes.cardWrap}>
              <div className ={classes.Logo}>
              <img src= {Vectorc} alt='logo' />
              </div>
              <h4>Continuous Improvement</h4>
            </div>
           <p> We stay updated with the latest traffic laws and regulations,
             incorporate new technologies, and seek 
             feedback to enhance the learning experience.
             </p>
          </div>
          </div>
        </div>
        <div className={classes.picsPacks}>
        <div className={classes.imageCar}>
          <img src={whiteCar} alt='Carage' />
        </div>
        <div className={classes.instructor}>
          <img src={Instructor} alt ='Instructor' />
        </div>
        </div>
        </div>
    </div>
  )
}

export default WelcomeDrive;