import React from 'react'
import classes from './Compete.module.css'
import Star from '../../assets/Star 1.png'


const Compete = () => {
  return (
    <div className={classes.outerContainer}>
      <div className= {classes.container}>
        <div className= {classes.innerContainer}>
            <div className={classes.sta}>
               <img src={Star} alt="Star" />
                    <h1>Our competence is confirmed by a decade of experience</h1>
              </div>
                <div className= {classes.lay}>
                          <div className= {classes.line1}>
                            </div>
                        </div>
                      <div className= {classes.velt}>
                          <h1>125k</h1>
                        <p>met sint. Velit officia consequat duis enim velit mollit. Exercitation veniam consequat sunt nostrud amet. </p>
                          <div className= {classes.line2}>
                        </div>
                        <h1>20%</h1>
                        <p>met sint. Velit officia consequat duis enim velit mollit. Exercitation veniam consequat sunt nostrud amet. </p>
                      </div>
            </div>
        </div>
    </div>
  )
}

export default Compete