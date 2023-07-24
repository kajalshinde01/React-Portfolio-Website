import React from 'react'
import Navbar from '../components/Navbar';
import Footer1 from '../components/Footer1';
import Hero1 from '../components/Hero1';
import Form from '../components/Form';

const Contacts = () => {
  return (
    <div>
      <Navbar/>
      <Hero1 heading="Contact" text="Lets Have Chat Together ! !"/>
      <Form/>
      <Footer1/>
    </div>
  )
}

export default Contacts
