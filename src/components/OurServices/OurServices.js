import React from "react";
import classes from "./OurServices.module.css";
import Consult from "../../assets/consultancy2.png";
import Investment from "../../assets/investment2.png";
import Property from "../../assets/property2.png";
import Farms from "../../assets/farms2.png";
import Driving from "../../assets/driving2.png";
import { Link } from "react-router-dom";

const OurServices = () => {
  return (
    <div className={classes.container}>
      <div className={classes.innerContainer}>
        <div className={classes.topService}>
          <h4>WHAT WE DO</h4>
          <h2>
            We provide perfect solution to your business and personal growth
          </h2>
        </div>
        <div className={classes.service}>
          <div className={classes.serviceCard1}>
            <img src={Consult} alt="consultancy" className={classes.myImage} />
            <div className={classes.myText}>
              <h2>Mayframe Consultancy</h2>
              <p>
                Mayframe has a dedicated consultancy services division that
                assists businesses in various domains. The consultancy services
                cover a wide range of areas, including strategic planning,
                operations management, financial analysis, marketing strategies,
                and more. By leveraging industry expertise and employing a
                results-driven approach, the consultancy team at Mayframe Group
                helps businesses optimize their operations, overcome challenges,
                and achieve sustainable growth.
              </p>
              <Link to="/consultancy">
                <h5>Learn more → </h5>
              </Link>
            </div>
          </div>
          <div className={classes.serviceCard1}>
            <img
              src={Investment}
              alt="investment"
              className={classes.myImage}
            />
            <div className={classes.myText}>
              <h2>Mayframe Investment</h2>
              <p>
                Mayframe provides investment services to individuals and
                businesses seeking financial growth and diversification. The
                company offers a range of investment opportunities across
                different sectors, including real estate, stocks, bonds, and
                emerging markets. With a diligent approach to risk management
                and a deep understanding of market dynamics, Mayframe Group
                guides its clients in making informed investment decisions that
                align with their goals and risk tolerance.
              </p>
              <Link to="/investment">
                <h5>Learn more →</h5>
              </Link>
            </div>
          </div>
        </div>

        <div className={classes.service2}>
          <div className={classes.serviceCard3}>
            <img src={Property} alt="property" className={classes.myImage} />
            <div className={classes.myText2}>
              <h2>Property Development</h2>
              <p>
                Property Development Mayframe is actively involved in the real
                estate sector, offering a comprehensive range of property
                services. This includes property development, sales, leasing,
                and property management. The company identifies promising real
                estate opportunities, develops residential and commercial
                properties, and offers flexible leasing options to suit the
                needs of tenants Learn more Property Development
              </p>
              <Link to="/property">
                <h5>Learn more →</h5>
              </Link>
            </div>
          </div>
          <div className={classes.serviceCard3}>
            <img src={Farms} alt="farms" className={classes.myImage} />
            <div className={classes.myText2}>
              <h2>Farms & Agro-Allied</h2>
              <p>
                Farms & Agro-Allied With a focus on agriculture and farming,
                Mayframe has established a strong presence in the agro-industry.
                The company owns and manages a portfolio of farms that cultivate
                a variety of crops and engage in livestock rearing. By
                implementing modern farming techniques, sustainable practices,
                and leveraging technology. Learn more Property Development
              </p>
              <Link to="/farm">
                <h5>Learn more →</h5>
              </Link>
            </div>
          </div>
          <div className={classes.serviceCard3}>
            <img src={Driving} alt="driving" className={classes.myImage} />
            <div className={classes.myText2}>
              <h2>Driving Academy</h2>
              <p>
                Driving Academy Mayframe operates a leading driving academy that
                aims to provide comprehensive and professional driver training.
                Whether it's for beginners or experienced drivers looking to
                enhance their skills, the academy offers a structured curriculum
                and qualified instructors to ensure safe and confident driving..
                Learn more Property Development.
              </p>
              <Link to="/driving">
                <h5>Learn more →</h5>
              </Link>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default OurServices;
