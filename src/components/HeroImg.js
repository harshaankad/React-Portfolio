import "./HeroImgStyles.css"

import React from 'react'
import IntroImg from "../assets/hero.jpg"
import { Link } from "react-router-dom"

const HeroImg = () => {
  return (
    <div className="hero">
      <div className="mask">
        <img className="into-img" src={IntroImg} alt="introimg"></img>
      </div>
      <div className="content">
        <p>HI, I AM HARSHA</p>
        <h1>Blockchain Developer</h1>
        <div>
          <Link to="/project" className="btn">PROJECTS</Link>
          <Link to="/contact" className="btn btn-light">CONTACT</Link>
        </div>

      </div>
    </div>
  )
}

export default HeroImg