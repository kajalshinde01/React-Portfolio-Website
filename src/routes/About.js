import React from 'react'
import Navbar from '../components/Navbar';
import Footer1 from '../components/Footer1';
import Hero1 from '../components/Hero1';
import AboutContent from '../components/AboutContent';
const About = () => {
  return (
    <div>
    <Navbar/>
    <Hero1 heading="About"  text="I am friendly Frontend Developer.Build a well designed and responsive Website. "/>
    <AboutContent/>
    <Footer1/>
    </div>
  )
}

export default About
