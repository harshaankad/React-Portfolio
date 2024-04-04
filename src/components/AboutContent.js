import "./AboutContentStyles.css"
import eth from "../assets/eth.jpg"
import bitcoin from "../assets/bitcoin.jpg"

import React from 'react'
import {Link} from "react-router-dom"

const AboutContent = () => {
  return (
    <div className="about">
        <div className="left">
            <h1>Who am I?</h1>
            <p>I am a blockchain developer who holds keen interest in learning new technologies currently upgrading my skills on React</p>
            <Link to="/contact">
                <button className="btn">Contact</button>
            </Link>
        </div>
        <div className="right">
            <div className="img-container">
                <div className="img-stack top">
                    <img src={eth} className="img" alt="eth" />
                </div>
                <div className="img-stack bottom">
                    <img src={bitcoin} className="img" alt="bitcoin" />
                </div>
            </div>
        </div>
    </div>
  )
}

export default AboutContent