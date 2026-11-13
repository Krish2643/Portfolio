import React from 'react'
import './About.css'
import SideBar from '../SideBar/SideBar'
import { FaLinkedin } from "react-icons/fa";
import { FaGithub } from "react-icons/fa6";
import { SiLeetcode } from "react-icons/si";

const About = () => {
  return (
    <div className='about-Section' >
        <SideBar />
        <img src="Images/krish.png" className='photo' alt="profile photo" />
        <div className="profile-pic">
        </div>
        <div className="about-me">
            <h3 className='first-line' >Hii, I'm</h3>
            <h2 className='second-line' >Krish Parmar</h2>
            <p className='about-description'> Full Stack Developer with 2.5 years of experience designing and building scalable, production-grade web applications using Node.js, Express.js, React.js, and PostgreSQL. Strong knowledge of microservices architecture, event-driven architecture, message queues (AWS SQS, Apache Kafka), RESTful API development, and distributed systems fundamentals. Experienced in database optimization, asynchronous processing, cloud integrations, containerization using Docker, and designing reliable backend services.</p>
        </div> 
         <div className='about-section-button-div'>
          <button className='about-section-button' ><a className='about-section-btn' href="https://leetcode.com/krish2643/"> <SiLeetcode /> </a></button>
          <button className='about-section-button' ><a className='about-section-btn' href="https://www.linkedin.com/in/parmarkrish2643/"> <FaLinkedin /> </a></button>
          <button className='about-section-button' ><a className='about-section-btn' href="https://github.com/Krish2643"> <FaGithub /> </a></button>
         </div>
    </div>
  )
}

export default About