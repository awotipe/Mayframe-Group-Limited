import React from 'react'
import classes from "./Benefits.module.css"
import ValueProps from "../../components/ValueProps/ValueProps"
import Cost from "../../assets/cost.png";
import Flexibility from "../../assets/flexibility.png";
import Asset from "../../assets/asset.png";
import Risk from "../../assets/risk.png";
import Global from "../../assets/global.png";
import Portfolio from "../../assets/portfolio.png";


const Benefits = () => {

  return (
    <div className={classes.container}>
        <ValueProps
        Honesty= {Cost}
        Team= {Flexibility}
        Liberty= {Asset}
        Communication= {Risk}
        Service= {Global}
        Spirit= {Portfolio}
        head="Benefits"
        head1="Cost Appreciation"
        head2="Flexibility & Liquidity"
        head3="Asset Recovery"
        head4="Risk Mitigation"
        head5="Global Sourcing"
        head6="Portfolio Diversification"
        paragraph1="If the stock's value increases over time, you can sell your shares at a higher price than what you paid, generating a profit."
        paragraph2="You can typically buy and sell shares relatively quickly. liquidity provides flexibility, allowing you to adjust your investment positions based on changing market conditions or investment goals."
        paragraph3="With the process of recovering lost shares, shareholders can regain control over their investments."
        paragraph4="Your businesses can minimize disruptions and ensure continuity of supply by diversifying suppliers, implementing robust quality control measures, and monitoring supplier performance."
        paragraph5="You can explore global markets, identify cost-effective suppliers, and tap into specialized expertise or resources available in different regions."
        paragraph6="By investing in different companies across various industries, you can spread your risk and reduce the impact of any single company's performance on your overall portfolio."
        />
    </div>
  )
}

export default Benefits