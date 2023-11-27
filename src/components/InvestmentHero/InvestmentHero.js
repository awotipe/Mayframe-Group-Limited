import React from 'react'
import classes from "./InvestmentHero.module.css";
import OtherHeroProps from "../../components/OtherHeroProps/OtherHeroProps";

const InvestmentHero = () => {
  return (
    <div className={classes.container}>
    <OtherHeroProps
     headA = "Unlock Investment Opportunities for Financial Success"
     btnText = "Start Investing"
     paragraph ="Empower your financial future and embark on a journey towards prosperity today."
     link = "/contact"
    />
</div>
  )
}

export default InvestmentHero