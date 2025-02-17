import React from 'react'
import "../styles/mechregister.css";
import Header from './Header';

const MechRegiser = () => {
  return (

    <div className="hole">
        <Header/>
        <div className='mr-container'>
        <h1 className='mr-main-head'>Registration</h1>
        <div className="mr-content">
        <div className="mr-tech">
            <h1>🚀Events</h1>
            <p>1.For only Tech Events, the entry fee will be ₹250.</p>
            <p>2.For both Tech and Non-Tech Events, the entry fee will be ₹300.</p>
            <a to="/register" id="neon-btn" href="https://docs.google.com/forms/d/e/1FAIpQLSe2pJ-8mqd92tvxI4Dv_883YsJ38sFp7gvHqko7W4XMFmJUzg/viewform" target="_blank">
                    <button className="custom-btn1 btn-12">Register</button>
            </a>
        </div>
        <div className="mr-workshop">
            <h1>🚀Workshop</h1>
            <p>Industry 4.O - ₹390</p>
            <p>Solidworks - ₹350</p>
            <p>Both Industry 4.O & Solidworks - ₹550</p>
        </div>
        <div className="mr-ewaste">
            <h1>🚀E-waste</h1>
            <p>The Enrollment fee for e-waste management is ₹200</p>
        </div>
        </div>
    </div>
    </div>
    
  )
}

export default MechRegiser