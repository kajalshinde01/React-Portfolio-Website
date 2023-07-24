import "./WorkStyle.css";
 import Work from "./Work";
 import WorkDataCart from "./WorkDataCart"
import React from 'react' 


const WorkData = () => {
  return (
    <div className="work-container">
       <h1 className="project-heading">Projects</h1>
       <div className="project-container">
        {WorkDataCart.map((val,index)=>{
            return(
                <Work
                key={index}
                imgsrc={val.imgsrc}
                title={val.text}
                view={val.view}/>
            )
        })}
    </div>
    </div>
  );
};

export default WorkData
