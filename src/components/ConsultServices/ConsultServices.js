import React from 'react'
import classes from './ConsultServices.module.css'
import Keyboard from '../../assets/ConsultancyA/meeting.png'
import Signature from '../../assets/ConsultancyA/document-signing.png'
import Hall from '../../assets/ConsultancyA/hall.png'
import Metrics from '../../assets/ConsultancyA/glasses.png'


const ConsultServices = () => {
  return (
    <div className={classes.container}>
        <div className={classes.innerContainer}>
            
            <h3>Our Services</h3>

            <div className={classes.mainContainer}>
                <div className={classes.picsContainer}>
                <img src={Keyboard} alt='Keyboard'/>
                </div>
                <div className={classes.textContainer}>
                    <h4>Business Development</h4>
                    <p>
                    We assists businesses in achieving growth and 
                    expansion through strategic planning, market analysis, 
                    and relationship-building activities. 
                    We also act as strategic partners, helping businesses
                     identify new opportunities, form strategic alliances, 
                     and enhance their competitive advantage. 
                    </p>
                </div>
            </div>

            <div className={classes.mainContainer2}>
                <div className={classes.textContainer}>
                    <h4>Company Registration</h4>
                    <p>We assist in business registration through 
                    corporate affairs commission (CAC). We assist
                     businesses in navigating the complex process of
                      company formation and ensure compliance with 
                      legal and regulatory requirements.
                       Our registration services include:</p>
                    <ul>
                        <li>Limited Liability Registration</li>
                        <li>Cooperative Society Registration</li>
                        <li>Mosque Registration</li>
                        <li>Church Registration</li>
                        <li>Association Registration</li>
                        <li>Business Name Registration</li>
                        <li>NGO Registration</li>
                        <li>Company annual returns & Reactivation of Inactive Company</li>
                    </ul>
                </div>

                <div className={classes.picsContainer}>
                <img src={Signature} alt="Signature"/>
                </div>
            </div>
            <div className={classes.mainContainer}>
                <div className={classes.picsContainer}>
                <img src={Hall} alt='Hall'/>
                </div>
                <div className={classes.textContainer}>
                    <h4>Conferences, Trade Expo & B2B  Consultancy</h4>
                    <p>
                    We provide valuable opportunities for businesses to 
                    network, gain industry insights, and drive growth 
                    through strategic partnerships. By offering conferences,
                    trade fairs, and B2B consultancy services, our firm provides 
                    businesses with opportunities to gain industry insights, 
                    build connections, and drive growth through strategic 
                    collaborations which empower businesses  to stay competitive, 
                    explore new markets, and capitalize on emerging trends 
                    in their respective industries.
                    </p>
                </div>
            </div>

            <div className={classes.mainContainer2}>
                <div className={classes.textContainer}>
                    <h4>Tax Consultancy </h4>
                    <p>We provide specialized guidance and support
                    to businesses and individuals in navigating
                    complex tax regulations, optimizing their tax strategies,
                    and ensuring compliance with tax laws. 
                    Our expertise and guidance enable businesses to 
                    make informed tax decisions, minimize tax liabilities, 
                    and maximize tax savings, contributing to overall 
                    financial stability and growth.</p>
                </div>

                <div className={classes.picsContainer}>
                <img src={Metrics} alt="Metrics"/>
                </div>
            </div>

        </div>
    </div>
  )
}

export default ConsultServices