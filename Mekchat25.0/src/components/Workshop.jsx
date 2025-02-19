import React from 'react'
import work1 from "../assets/workshop1.png";
import work2 from "../assets/workshop2.png";
import work3 from "../assets/workshop3.png";
import work4 from "../assets/workshop4.png";
import "../styles/workshop.css";
import { Link } from "react-router-dom";

const Workshop = () => {
  return (
    <div className='Workshop-container'>
        <h1>Workshop</h1>
        <div className="workshop1">
            <h1>🚀IoT, Robotics & CNC in Modern Manufacturing</h1>
            <div className="inner-c1">
            <div className="w-content1">
                <p>"The Smart Engineering Era: IoT, Robotics & CNC in Modern Manufacturing" delves into the transformative impact of smart technologies on manufacturing. It explores how IoT, robotics, and CNC automation are revolutionizing production processes, enhancing efficiency, and enabling intelligent decision-making. Covering real-world applications, case studies, and future trends, this book is a valuable resource for engineers, researchers, and industry professionals seeking to navigate the era of smart manufacturing.</p>
                <div className="home-btn">
                            <Link to="/mechregister" id="neon-btn">
                              <button className="register-btn">REGISTER</button>
                            </Link>
                          </div>
            </div>
            <div className="w-content2">
                <img src={work1} alt="ewaste" />
            </div>

            </div>
        </div>
        <div className="workshop2">
        <h1>🚀V6 Engine design using Solidworks</h1>
            <div className="inner-c1">
            <div className="w-content2">
                <img src={work3} alt="ewaste" />
            </div>
            <div className="w-content1">
                <p>"V6 Engine Design Using SolidWorks" provides a step-by-step guide to designing a V6 engine using SolidWorks, covering 3D modeling, assembly, motion analysis, and simulation. This book offers practical insights into engine component design, including pistons, crankshafts, camshafts, and cylinder heads, with a focus on precision and performance. Ideal for engineers, students, and automotive enthusiasts, it bridges the gap between theoretical concepts and hands-on CAD modeling for efficient engine development.</p>
                <div className="home-btn">
                            <Link to="/mechregister" id="neon-btn">
                              <button className="register-btn">REGISTER</button>
                            </Link>
                          </div>
            </div>
            </div>
        </div>
    </div>
  )
}

export default Workshop