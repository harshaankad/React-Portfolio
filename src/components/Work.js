import "./WorkCartStyles.css"

import WorkCart from "./WorkCart.js"
import WorkCardData from "./WorkCardData.js"

import React from 'react'


const Work = () => {
  return (
    <div className="work-container">
        <h1 className="project-heading">Projects</h1>
        <div className="project-container">
            {WorkCardData.map((val,ind)=>{
                return(
                    <WorkCart
                    key={ind}
                    imgsrc={val.imgsrc}
                    title={val.title}
                    text={val.text}
                    view={val.view}
                    />
                )
            })}
        </div>
    </div>
  )
}

export default Work