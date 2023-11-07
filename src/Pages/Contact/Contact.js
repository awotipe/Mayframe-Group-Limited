import React from 'react'
import Navbar from '../../components/Header/Header'
import ContactHero from '../../components/ContactHero/ContactHero'
import ContactForm from '../../components/ContactForm/ContactForm'
import ContactMap from '../../components/ContactMap/ContactMap'
// import Footer from '../../components/Footer/Footer'


const Contact = () => {
  return (
    <div>
        <Navbar/>
        <ContactHero/>
        <ContactForm/>  
        <ContactMap />
        {/* <Footer/> */}
    </div>
  )
}
export default Contact