import React from 'react'
import Boxes from '../Boxes/Boxes'
import './Main.css'
import { FaPenRuler } from 'react-icons/fa6'
import { FaPaperclip, FaPaperPlane, FaUser } from 'react-icons/fa'

const Main = () => {

 
  return (
       
    <div className="container">
    <h1 className='my_name' >Hello, I'm <span className="my_name_text-color"> <strong>Krish</strong></span> Full <br/> Stack Developer</h1>
    <div className="socialButtons">
         <Boxes 
          to='/project'
          className="button b1"
          icon={FaPenRuler}
          text="Projects 🔗"
        />
         <Boxes 
          to='https://drive.google.com/drive/folders/1-XmKi2d-e6SkQD29m8mPtZAl-veTTE39'
          className="button b2"
          icon={FaPaperclip}
          text="Resume 🔗"
          target='_blank'
        />
        <Boxes 
          to='/reach-out'
          className="button b3"
          icon={FaPaperPlane}
          text="Reach out 🔗"
        />
        <Boxes 
          to='/profile'
          className="button b4"
          icon={FaUser}
          text="Profile 👨‍💻"
        />
        <Boxes 
          to='https://leetcode.com/krish2643/'
          target="_blank"
          className="button b5"
          text="LeetCode 🔗"
          src="Images/Leetcode.svg"
          alt="Leetcode"
        />
         
    </div>
    <div className="socialButtonsMobile">
        <div className="top">
            <Boxes
              to="/project"
              className="button"
              icon={FaPenRuler}
            />
            <Boxes
              to='https://drive.google.com/drive/folders/1-XmKi2d-e6SkQD29m8mPtZAl-veTTE39'
              target='_blank'
              className="button"
              icon={FaPaperclip}
            />
        </div>
        <div className="bottom">
        <Boxes
              to="/reach-out"
              className="button"
              icon={FaPaperPlane}
            />
        <Boxes
              to="/profile"
              className="button"
              icon={FaUser}
            />
        <Boxes
              to="https://leetcode.com/krish2643/"
              target="_blank"
              className="button"
              src="Images/Leetcode.svg"
              alt="Leetcode"
            />
            
        </div>
    </div>
    <div className="current">
        <div className="workBadge" aria-label="Current"><span>CURRENTLY</span></div>
        <br/>
        <br/>
        <h4 className='clg_name' >Full Stack Developer at BluParrot Venture</h4>
    </div>
</div>

  )
}

export default Main
