import React from 'react'
import classes from './Property.module.css'
import Eng from '../../assets/Eng.png'
import Mod from '../../assets/Mod.png'
import Wom from '../../assets/Wom.png'
import Road from '../../assets/Road.png'
import Key from '../../assets/Key.png'
import Real from '../../assets/Real.png'
import Crane from '../../assets/Crane.png'
import Engr from '../../assets/Engr.png'


const Property = () => {
  return (
    <div className= {classes.container}>
        <div className= {classes.construct}>
            <div className= {classes.engine}>
               <h1>Building Construction</h1>
                <p>As a company, we provide end-to-end solutions for building projects, offering their expertise and services throughout the entire construction process. Our services include; comprehensive project management, design & engineering, procurement & supply chain management, construction execution, quality assurance and inspections and post-construction services.</p>
                         </div>  
             <div className= {classes.engg}>
                <img src = {Eng} alt='Eng' />
                </div>              
        </div>
        <div className= {classes.construct}>
             <div className= {classes.engg}>
                <img src = {Mod} alt='Mod' />
                </div>              
            <div className= {classes.mode}>
               <h1>Reconstruction and Remodeling</h1>
                <p>We provide comprehensive solutions for renovating and upgrading existing buildings or spaces. This service encompasses various aspects, including project planning, design, demolition, construction, and finishing touches, to transform an existing structure according to the client's requirements.</p>
                         </div>  
        </div>
        <div className= {classes.construct}>
            <div className= {classes.wom}>
               <h1>Housing Estate Development</h1>
                <p>We offer a wide range of activities and offerings aimed at creating and managing residential communities such as land acquisition and planning, infrastructure development, housing construction, amenities and facilities, security and safety, community management,  and environmental sustainability. We create a well-designed, well-maintained, and harmonious residential environment that meets the needs and expectations of residents within the housing estate.</p>
                         </div>  
             <div className= {classes.engg}>
                <img src = {Wom} alt='Wom' />
                </div>              
        </div>
        <div className= {classes.construct}>
             <div className= {classes.engg}>
                <img src = {Road} alt='Road' />
                </div>              
            <div className= {classes.rod}>
               <h1>Road, Site and Services</h1>
                <p> We simplify the property development process by providing developers with readily available infrastructure and sites, allowing them to focus on their core projects and maximize their productivity.  </p>
                         </div>  
        </div>
        <div className= {classes.construct}>
            <div className= {classes.rents}>
               <h1>Property Rents Management</h1>
                <p>We specialized offering within the realm of property development that focuses on managing and optimizing rental properties on behalf of property owners. This  is designed to streamline the rental process, alleviate the burdens of property management, and ensure a smooth and profitable rental experience for property owners. We offer services such as legal compliance, market analysis and rent optimization, tenant communication and conflict resolution, property maintenance and repairs, and tenant acquisition and screening. </p>
                         </div>  
             <div className= {classes.engg}>
                <img src = {Key} alt='Key' />
                </div>              
        </div>
        <div className= {classes.construct}>
             <div className= {classes.engg}>
                <img src = {Real} alt='Real' />
                </div>              
            <div className= {classes.real}>
               <h1>Real Estate Consultancy</h1>
                <p>As a real estate consultancy, we provide  expert advice and guidance to individuals, companies, or organizations involved in real estate projects. We ensure  that clients can optimize their real estate investments, mitigate risks, and achieve their development goals effectively. </p>
                         </div>  
        </div>
      <div className= {classes.development}>
         <div className= {classes.ltd}>
            <h3>About Us</h3>
            <h1>Mayframe Property Development LTD</h1>
            <p>Mayframe is actively involved in the real estate sector, offering a comprehensive range of property services. This includes property development, sales, leasing, and property management. The company identifies promising real estate opportunities, and offers flexible leasing options to suit the needs of tenants. The property management services ensure efficient operations, maintenance, and tenant satisfaction, thereby maximizing the value of the properties under their care.</p>
         </div>
         <div className= {classes.pict}>
         <div className= {classes.cran}>
            <img src = {Crane} alt = 'crane' />
         </div>
         <div className= {classes.engrr}>
            <img src = {Engr} alt = 'engr' />
            </div>
         </div>
      </div>
    </div>
  )
}

export default Property