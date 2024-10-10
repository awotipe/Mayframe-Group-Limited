import React from "react";
import classes from "./Services.module.css";
import Managementimg from "../../assets/agriBusiness.png";
import Arable from "../../assets/arable.png";
import LiveStock from "../../assets/liveStock.png";
import Consultancyimg from "../../assets/famr.png";
import Allied from "../../assets/agroAllied.png";
// import AgroAllied from "../../assets/agroAllied2.png";

const Services = () => {
  return (
    <div className={classes.container}>
      <h2>What Services We’re Offering</h2>
      <div className={classes.Consultancy}>
        <div className={classes.Consultancytext}>
          <h3>Farm Management Consultancy</h3>
          <p>
            We provides specialized advisory services to farmers and
            agribusinesses, helping them optimize their operations and achieve
            sustainable success by offering expertise in strategic planning,
            financial analysis, risk management, and operational efficiency. We
            are also focus on providing tailored solutions and guidance to
            enhance farm performance, maximize resource utilization, and ensure
            long-term viability.
          </p>
        </div>
        <img src={Consultancyimg} alt="Consultancy" />
      </div>
      <div className={classes.LiveStock}>
        <img src={LiveStock} alt="LiveStock" />
        <div className={classes.LiveStocktext}>
          <h3>Live Stock Farm Products</h3>
          <p>
            Our customers can access livestock products without the need for
            direct ownership or management of animals. Additionally, we allow
            businesses to manage the production and distribution process more
            efficiently, ensuring consistent quality and availability of
            livestock products.
          </p>
        </div>
      </div>
      <div className={classes.Arable}>
        <div className={classes.Arabletext}>
          <h3>Arable Farm Products</h3>
          <p>
            We help our customers to enjoy the benefits of locally grown,
            sustainable, and high-quality produce while relieving them of the
            complexities and time commitment associated with farming. We offer
            convenience and flexibility to customers, as they can enjoy the
            benefits of farm-fresh products without the responsibility of
            farming operations.
          </p>
        </div>
        <img src={Arable} alt="Arable" />
      </div>
      <div className={classes.Management}>
        <img src={Managementimg} alt="managementimg" />
        <div className={classes.Managementtext}>
          <h3>Agribusiness Enumeration Management</h3>
          <p>
            We assist agribusinesses in efficiently organizing, recording, and
            managing their agricultural assets, such as crops, livestock,
            machinery, and inventory. Businesses can benefit from improved data
            accuracy, reduced paperwork, and enhanced operational efficiency.
          </p>
        </div>
      </div>
      <div className={classes.about}>
        <h4>About Us</h4>
        <div className={classes.aboutWrap}>
        <div className={classes.aboutText}>
          <h3>Mayframe Farms & Agro-Allied</h3>
          <p>
            The company owns and manages a portfolio of farms that cultivate a
            variety of crops and engage in livestock rearing. By Implementing
            modern farming techniques, sustainable practices, and leveraging
            technology, Mayframe group ensures high-quality produce and promotes
            environmentally friendly agricultural practices. The farms also
            serve as a platform for reserach and development to enhance
            productivity and introduce innovation in the agro-sector.
          </p>
        </div>
        <div className={classes.aboutImage}>
          <img src={Allied} alt="Agro Allied" />
          {/* <img src={AgroAllied} alt="Agro Allied" /> */}
        </div>
      </div>
      </div>
    </div>
  );
};

export default Services;
