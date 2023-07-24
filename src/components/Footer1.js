import "./FooterStyle.css";
import React from 'react';
import {FaHome ,FaPhone,FaMailBulk, FaFacebook, FaTwitter, FaLinkedin} from 'react-icons/fa';

const footer = () => {
  return (
    <div className="footer">
        <div className="footer-container">
        <div className="left">
            <div className="location">
                <FaHome size={20} style={{color:"#fff" ,marginRight:"2rem"}}/>
                <div>
                  <p>123 Housing Society.</p>
                  <p>Mumbai</p>
                </div>
            </div>
            <div className="phone">
              <h4><FaPhone size={20} style={{color:"#fff" ,marginRight:"2rem"}}/>+91-8565452178</h4>
           </div>

           <div className="email">
              <h4><FaMailBulk size={20} style={{color:"#fff" ,marginRight:"2rem"}}/>info@gmail.com</h4>
           </div>
        </div>
       
        <div className="right">
          <h4>About The Company</h4>
          <p> Hi Im Kajal Shinde.Founder and CEO of tech20.React.js, a comprehensive JavaScript library for building user interfaces, has changed the way we think about front-end development. React.js has grasped the interest of the open source community and it is here to stay. However, the nuances and idiosyncrasies of React.js require extra caution when distinguishing between good JavaScript developers and true experienced React.js developers.</p>
          <div className="social">
          <FaFacebook size={30} style={{color:"#fff" ,marginRight:"1rem"}}/>
          <FaTwitter size={30} style={{color:"#fff" ,marginRight:"1rem"}}/>
          <FaLinkedin size={30} style={{color:"#fff" ,marginRight:"1rem"}}/>
        
          </div>

        </div>
      
    </div>
    </div>
  )
}

export default footer
