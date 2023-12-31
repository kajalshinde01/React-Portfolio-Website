import "./WorkStyle.css";
 
import React from 'react' 
import { NavLink } from "react-router-dom";

const Work = (props) => {
  return (
    <div className="project-card">
    <img  src={props.imgsrc} alt="im"/>
    <h2 className="project-title">{props.title}</h2>
    <div className="pro-details">
    <p>{props.text}</p>
    <div className="pro-btns">
    <NavLink to={props.view} className="btn">VIEW</NavLink>
    <NavLink to="url.com" className="btn">SOURCE</NavLink>
    </div>
   </div>
    </div>
    
  );
};

export default Work
