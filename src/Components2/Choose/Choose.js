import React from 'react'
import classes from './Choose.module.css'
import Term from '../../assets/Term.png'
import Detail from '../../assets/Detail.png'
import Safety from '../../assets/Safety.png'
import Design from '../../assets/Design.png'
import Reliability from '../../assets/Reliability.png'
import Focus from '../../assets/Focus.png'

const Choose = (props) => {
  return (
    <div className= {classes.outerContainer}>
    <div className= {classes.container}>
        <div className={classes.val}>
            <h1>{props.home1}</h1>
                </div>
        <div className= {classes.innerContainer}>
                <div className= {classes.value}>
                    <img src={Term} alt="Term" />
                        <h1>{props.home2}</h1>
                        <p>{props.home3}</p>
                </div>
                <div className= {classes.teamwork}>
                    <img src={Detail} alt="Detail" />
                        <h1>{props.home4}</h1>
                        <p>{props.home5}</p>
                </div>
                <div className= {classes.liberty}>
                    <img src={Safety} alt="Safety" />
                        <h1>{props.home6}</h1>
                        <p>{props.home7}</p>
                </div>
             </div>
             <div className= {classes.innerContainer}>
                <div className= {classes.communication}>
                    <img src={Design} alt="Design" />
                        <h1>{props.home8}</h1>
                        <p>{props.home9}</p>
                </div>
                <div className= {classes.quality}>
                    <img src={Reliability} alt="Reliability" />
                        <h1>{props.home10}</h1>
                        <p>{props.home11}</p>
                </div>
                <div className= {classes.spirit}>
                    <img src={Focus} alt="Focus" />
                        <h1>{props.home12}</h1>
                        <p>{props.home13}</p>
                </div>
             </div>
             </div>
     </div>
  )
}

export default Choose