import { FaFacebook, FaHome, FaLinkedin, FaMailBulk, FaPhone, FaTwitter } from "react-icons/fa"
import "./FooterStyles.css"

import React from 'react'

const Footer = () => {
  return (
    <div className="footer">
        <div className="footer-container">
            <div className="left">
                <div className="location">
                    <FaHome size={20} style={{color:"#fff",marginRight:"2rem"}} />
                
                <div className="location">
                  <p>PES University , Banglore</p>
                  
                  
                </div>
              </div>
                <div className="phone">
                  <h4><FaPhone size={20} style={{color:"#fff",marginRight:"2rem"}} /> 7338110229</h4>
                </div>
                 <div className="email">
                  <h4><FaMailBulk size={20} style={{color:"#fff",marginRight:"2rem"}} /> harshaankad2003@gmail.com</h4>
                </div>
            </div>
            <div className="right">
              <h4>About Me</h4>
              <p>Hi I am Harsha, a passionate developer with a keen interest in React and blockchain technologies.</p>
              <div className="social">
                <FaFacebook size={30} style={{color:"#fff",marginRight:"1rem"}} />
                <FaTwitter size={30} style={{color:"#fff",marginRight:"1rem"}} />
                <FaLinkedin size={30} style={{color:"#fff",marginRight:"1rem"}} />
              </div>
            </div>
            </div>
    </div>
  )
}

export default Footer