import React from 'react'
import classes from './Values.module.css'
import Honesty from '../../assets/Honesty.png'
import Teamwork from '../../assets/Teamwork.png'
import Liberty from '../../assets/Liberty.png'
import Coms from '../../assets/Coms.png'
import Quality from '../../assets/Quality.png'
import Spirit from '../../assets/Spirit.png'


const Values = (props) => {
  return (
    <div className= {classes.outerContainer}>
        <div className= {classes.container}>
            <div className={classes.val}>
                <h1>{props.home1}</h1>
                    </div>
            <div className= {classes.innerContainer}>
                    <div className= {classes.value}>
                        <img src={Honesty} alt="Honesty" />
                            <h1>{props.home2}</h1>
                            <p>{props.home3}</p>
                    </div>
                    <div className= {classes.teamwork}>
                        <img src={Teamwork} alt="Teamwork" />
                            <h1>{props.home4}</h1>
                            <p>{props.home5}</p>
                    </div>
                    <div className= {classes.liberty}>
                        <img src={Liberty} alt="Liberty" />
                            <h1>{props.home6}</h1>
                            <p>{props.home7}</p>
                    </div>
                 </div>
                 <div className= {classes.innerContainer}>
                    <div className= {classes.communication}>
                        <img src={Coms} alt="Coms" />
                            <h1>{props.home8}</h1>
                            <p>{props.home9}</p>
                    </div>
                    <div className= {classes.quality}>
                        <img src={Quality} alt="Quality" />
                            <h1>{props.home10}</h1>
                            <p>{props.home11}</p>
                    </div>
                    <div className= {classes.spirit}>
                        <img src={Spirit} alt="Spirit" />
                            <h1>{props.home12}</h1>
                            <p>{props.home13}</p>
                    </div>
                 </div>
        </div>
    </div>
  )
}

export default Values