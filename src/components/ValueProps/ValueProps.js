import React from 'react'
import classes from "./ValueProps.module.css";


const ValueProps = (props)  => {
  const { Honesty, Team, Liberty, Communication, Service, Spirit } = props;
  return (
    <div className={classes.container}>
    <div className={classes.innerContainer}>
      <div className={classes.topValue}>
        <h2>{props.head}</h2>
      </div>
      <div className={classes.valueCards}>
        <div className={classes.card}>
          <div className={classes.cardImage}>
            <img src={Honesty} alt="honesty" />
          </div>
          <h5>{props.head1}</h5>
          <p>
            {props.paragraph1}
          </p>
        </div>

        <div className={classes.card}>
          <div className={classes.cardImage}>
            <img src={Team} alt="team" />
          </div>
          <h5>{props.head2}</h5>
          <p>
          {props.paragraph2}
          </p>
        </div>

        <div className={classes.card}>
          <div className={classes.cardImage}>
            <img src={Liberty} alt="liberty" />
          </div>
          <h5>{props.head3}</h5>
          <p>
          {props.paragraph3}
          </p>
        </div>
      </div>
      <div className={classes.valueCards}>
        <div className={classes.card}>
          <div className={classes.cardImage}>
            <img src={Communication} alt="communication" />
          </div>
          <h5>{props.head4}</h5>
          <p>
          {props.paragraph4}
          </p>
        </div>

        <div className={classes.card}>
          <div className={classes.cardImage}>
            <img src={Service} alt="service" />
          </div>
          <h5>{props.head5}</h5>
          <p>
          {props.paragraph5}
          </p>
        </div>

        <div className={classes.card}>
          <div className={classes.cardImage}>
            <img src={Spirit} alt="spirit" />
          </div>
          <h5>{props.head6}</h5>
          <p>
          {props.paragraph6}
          </p>
        </div>
      </div>
    </div>
  </div>
  )
}

export default ValueProps