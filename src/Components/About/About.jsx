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
            <p className='about-description'> I am a fresher front-end React developer with a passion for building user-friendly web applications. I have a strong foundation in C++ and data structures and algorithms, which allows me to develop efficient and scalable solutions. I am also proficient in HTML, CSS, JavaScript and Reactjs. and I am always eager to learn new technologies and frameworks. <br /> My portfolio showcases not just my technical expertise but also my enthusiasm for building innovative solutions.</p>
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