import React from 'react'
import Navbar from '../components/Navbar';
import Footer1 from '../components/Footer1';
import Hero1 from '../components/Hero1';
import PricingCart from '../components/PricingCart';
import WorkData from '../components/WorkData';
const Project = () => {
  return (
    <div>
      <Navbar/>
      <Hero1 heading="  PROJECTS" text="Some of my recent Projects Here" />
      <WorkData/>
      <PricingCart/>
      <Footer1/>
      
    </div>
  )
}

export default Project
