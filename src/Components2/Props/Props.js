import React from 'react'
import classes from './Props.module.css'

const Props = ({head,head2,Tolu,head3, head4, content}) => {
  return (
    <div className={classes.container}>
    <div className={classes.innerContainer}>
      <h6>{head}</h6>
      <h1>{head2}</h1>
    </div>
    <Slider {...settings} className={classes.cardContainer}>
      <div className={classes.cardWrap}>
        <div className={classes.card}>
          <div className={classes.cardText}>
            <div className={classes.imageDiv}>
              <img src={Tolu} alt="tolu" />
            </div>
            <h4>{head3}</h4>
            <h5>{head4}</h5>
            <p>{content}</p>
          </div>
        </div>
      </div>
      <div className={classes.cardWrap}>
        <div className={classes.card}>
          <div className={classes.cardText}>
            <div className={classes.imageDiv}>
              <img src={Tolu} alt="tolu" />
            </div>
            <h4>{head3}</h4>
            <h5>{head4}</h5>
            <p>{content}</p>
          </div>
        </div>
      </div>

      <div className={classes.cardWrap}>
        <div className={classes.card}>
          <div className={classes.cardText}>
            <div className={classes.imageDiv}>
              <img src={Tolu} alt="tolu" />
            </div>
            <h4>{head3}</h4>
            <h5>{head4}</h5>
            <p>{content}</p>
          </div>
        </div>
      </div>

      <div className={classes.cardWrap}>
        <div className={classes.card}>
          <div className={classes.cardText}>
            <div className={classes.imageDiv}>
              <img src={Tolu} alt="tolu" />
            </div>
            <h4>{head3}</h4>
            <h5>{head4}</h5>
            <p>{content}</p>
          </div>
        </div>
      </div>

      <div className={classes.cardWrap}>
        <div className={classes.card}>
          <div className={classes.cardText}>
            <div className={classes.imageDiv}>
              <img src={Tolu} alt="tolu" />
            </div>
            <h4>{head3}</h4>
            <h5>{head4}</h5>
            <p>{content}</p>
          </div>
        </div>
      </div>

      <div className={classes.cardWrap}>
        <div className={classes.card}>
          <div className={classes.cardText}>
            <div className={classes.imageDiv}>
              <img src={Tolu} alt="tolu" />
            </div>
            <h4>{head3}</h4>
            <h5>{head4}</h5>
            <p>{content}</p>
          </div>
        </div>
      </div>
    </Slider>
  </div>
  )
}

export default Props