import React from "react";
import style from "./InvestServ.module.css";
import bullet from "../../assets/bullet.png";
import invest3 from "../../assets/invest3.png";
const InvestServ = () => {
  return (
    <div className={style.container}>
      <h1>Our Services </h1>
      <div className={style.content}>
        <div className={style.contentText}>
          <h2>Investment, Portfolio Management & Stockbroking</h2>

          <div className={style.Text2}>
            <div className={style.Text2Image}>
              <img src={bullet} alt="Icon" />
            </div>
            <p>Buying of shares</p>
          </div>

          <div className={style.Text2}>
            <div className={style.Text2Image}>
              <img src={bullet} alt="Icon" />
            </div>
            <p>Selling of shares</p>
          </div>

          <div className={style.Text2}>
            <div className={style.Text2Image}>
              <img src={bullet} alt="Icon" />
            </div>
            <p>Processing of unclaimed dividend</p>
          </div>

          <div className={style.Text2}>
            <div className={style.Text2Image}>
              <img src={bullet} alt="Icon" />
            </div>
            <p>Processing of letter of loss shares</p>
          </div>

          <div className={style.Text2}>
            <div className={style.Text2Image}>
              <img src={bullet} alt="Icon" />
            </div>
            <p>
              Processing of letter of administration for survivor of deceased
              shareholder
            </p>
          </div>
        </div>

        <div className={style.contentImage}>
          <img src={invest3} alt="Investment" />
        </div>
      </div>
    </div>
  );
};

export default InvestServ;
