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
            <p className='about-description'> I am MERN stack developer with a strong passion for problem-solving. I have solved over 300 DSA questions on various platforms like LeetCode and GeeksforGeeks, showcasing my proficiency in data structures and algorithms. My expertise in the MERN stack allows me to build robust and scalable web applications, and I continuously strive to enhance my skills and contribute to impactful projects.</p>
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