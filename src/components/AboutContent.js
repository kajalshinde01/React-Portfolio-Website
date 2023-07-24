import "./AboutContentStyle.css"
import React from 'react'
import { Link } from "react-router-dom"
import react1 from "../assets/react1.jpg"
import react2 from "../assets/react2.jpg"

const AboutContent = () => {
  return (
    <div className="about">
      <div className="left">
        <h1>Who Am I?</h1>
        <p>I am react Frontend Developer and  I create responsive website for my client.</p>
        <Link to="/contacts">
            <button className="btn">Contact</button>
        </Link>
      </div>
      
      <div className="right">
        <div className="img-container">
            <div className="img-Stack top">
               <img  src={react1} className="img" alt="true"/>
            </div>
            <div className="  img-stack bottom">
               <img  src={react2}  className="img" alt="true"/>
            </div>
        </div>
      </div>
    </div>
  )
}

export default AboutContent
