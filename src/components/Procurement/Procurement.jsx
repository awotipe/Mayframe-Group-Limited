import React from "react";
import style from "./Procurement.module.css";
import invest4 from "../../assets/invest4.png";

const Procurement = () => {
  return (
    <div className={style.container}>
      <div className={style.proImage}>
        <img src={invest4} alt="Procurement" />
      </div>
      <div className={style.proText}>
        <h1>Procurement & General Supplies Management</h1>
        <p>
          We are involved in acquiring goods, materials, and services necessary
          for the operation of an organization or business. This enclose
          sourcing, purchasing, inventory management, and ensuring the
          availability of of essential resources. Our dedicated team handles the
          entire process, from sourcing and vendor management to order
          fulfillment and inventory control. Maximize cost savings, minimize
          administrative burden, and ensure seamless operations with our expert
          assistance.
        </p>
      </div>
    </div>
  );
};

export default Procurement;
