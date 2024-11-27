import React from "react";
import style from "./InvestAbout.module.css";
import invest2 from "../../assets/invest2.png";

const InvestAbout = () => {
  return (
    <div className={style.container}>
      <div className={style.aboutText}>
        <h1>About Us</h1>
        <h2>Mayframe Investment Limited</h2>
        <p>
          Mayframe provides investment services to individuals and businesses
          seeking financial growth and diversification. The company offers a
          range of investment opportunities across different sectors, including
          real estate, stocks, bonds, and emerging markets. With a diligent
          approach to risk management and a deep understanding of market
          dynamics, Mayframe group guides its clients in making informed
          investment decisions that align with their goals and risk tolerance.
        </p>
      </div>

      <div className={style.aboutImage}>
        <img src={invest2} alt="About" />
      </div>
    </div>
  );
};

export default InvestAbout;
