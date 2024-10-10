import React from 'react'
import classes from './Benefits.module.css'

const Benefits = () => {
  return (
    <div className={classes.container}>
        <h2>Benefits Of Choosing Us</h2>
        <div className={classes.Benefitscards}>
            <div className={classes.card}>
                <h1>01.</h1>
                <h4>Comprehensive Expertise</h4>
                <p>Benefit from our extensive knowledge and experience in both farming and agro-allied ventures. We possess a deep understanding of various agricultural practices, from livestock rearing to crop cultivation. Our team of experts is equipped with the skills 
                    and insights to provide tailored solutions that address your unique farm and agro-allied needs.</p>
            </div>
            <div className={classes.card}>
                <h1>02.</h1>
                <h4>Sustainable Approach</h4>
                <p>We are committed to sustainable agriculture practices that prioritize the long-term health of the environment and promote ecological balance. Our methods emphasize resource efficiency, biodiversity conservation, and organic farming techniques. By partnering with us, you can contribute
                     to a greener future while ensuring the profitability and resilience of your agricultural operations.</p>
            </div>
            <div className={classes.card}>
                <h1>03.</h1>
                <h4>Holistic Support</h4>
                <p>We We provide comprehensive support throughout your farming journey. From assisting with land preparation, crop selection, and livestock management to offering guidance on market trends and value-added agro-processing,
                     we are dedicated to helping you achieve success at every stage.</p>
            </div>
        </div>
    </div>
  )
}

export default Benefits