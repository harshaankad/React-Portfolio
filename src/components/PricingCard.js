import "./PricingCardStyles.css"

import {Link} from "react-router-dom"

import React from 'react'

const PricingCard = () => {
  return (
    <div className="pricing">
        <div className="card-container">
            <div className="card">
                <h3>--Hackathon--</h3>
                <span className="bar"></span>
                <p className="btc">WINNER</p>
                <p>-ISFCR-</p>
                <p>-7K Won-</p>
                <p>-Proof of Stake-</p>
                <p>-Second Winner-</p>

                <Link to="/contact" className="btn">
                    CONGRATULATE ME
                </Link>
            </div>

            <div className="card">
                <h3>--Internship--</h3>
                <span className="bar"></span>
                <p className="btc">HYPERLEDGER</p>
                <p>-ISFCR-</p>
                <p>-Summer Intern-</p>
                <p>-SetUp + Code-</p>
                <p>-HYPERLEDGER FABRIC + GO-</p>

                <Link to="/contact" className="btn">
                    WANNA KNOW MORE?
                </Link>
            </div>

            <div className="card">
                <h3>--Club--</h3>
                <span className="bar"></span>
                <p className="btc">APPEX</p>
                <p>-EVM Head-</p>
                <p>-App Development-</p>
                <p>-App Genesis-</p>
                <p>-Full Time Member-</p>

                <Link to="/contact" className="btn">
                    KNOW MORE!
                </Link>
            </div>
        </div>
    </div>
  )
}

export default PricingCard