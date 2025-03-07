import React from 'react'
import Boxes from '../Boxes/Boxes'
import './Main.css'
import { faPaperPlane, faPaperclip, faPenRuler, faUser } from '@fortawesome/free-solid-svg-icons'


const Main = () => {
 
  return (
       
    <div className="container">
    <h1 className='my_name' >Hello, I'm <span className="my_name_text-color"> <strong>Krish</strong></span> MERN <br/> Stack Developer</h1>
    <div className="socialButtons">
         <Boxes 
          to='/project'
          className="button b1"
          icon={faPenRuler}
          text="Projects 🔗"
        />
         <Boxes 
          to='https://drive.google.com/file/d/1CjEX79L8Bz25defqTH8JxU6VDI27yVoJ/view'
          className="button b2"
          icon={faPaperclip}
          text="Resume 🔗"
          target='_blank'
        />
        <Boxes 
          to='/reach-out'
          className="button b3"
          icon={faPaperPlane}
          text="Reach out 🔗"
        />
        <Boxes 
          to='/profile'
          className="button b4"
          icon={faUser}
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
              icon={faPenRuler}
            />
            <Boxes
              to='https://drive.google.com/file/d/1CjEX79L8Bz25defqTH8JxU6VDI27yVoJ/view'
              target='_blank'
              className="button"
              icon={faPaperclip}
            />
        </div>
        <div className="bottom">
        <Boxes
              to="/reach-out"
              className="button"
              icon={faPaperPlane}
            />
        <Boxes
              to="/profile"
              className="button"
              icon={faUser}
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
        <h4 className='clg_name' >Pursuing a B.Tech degree at Panjab University</h4>
    </div>
</div>

  )
}

export default Main
