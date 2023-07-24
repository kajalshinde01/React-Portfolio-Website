import "./HeroStyle.css";
import React from 'react';
import  IntroImg from "../assets/jexo-yVxUC9I9Cik-unsplash.jpg";
import { Link } from "react-router-dom";

const Hero = () => {
  return (
    <div className="hero">
      <div className="mask">
      <img className="intro-img" src={IntroImg} alt="IntroImg"  />
      </div>
      <div className="content">
      <p>Hi I'am Kajal Shinde</p>
      <h1>React JS Developer</h1>
      <h1>Let's build Website </h1>
      <div>
        <Link to="/project" className="btn">Projects</Link>
        <Link to="/contact" className="btn  btn-light">Contact</Link>
      </div>
      </div>
      
    </div>
  )
}

export default Hero
