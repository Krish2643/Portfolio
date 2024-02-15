import React from 'react'
import { NavLink } from 'react-router-dom'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import {faCircleUser, faHome, faPaperPlane, faPaperclip, faPenRuler
} from '@fortawesome/free-solid-svg-icons'
import "./SideBar.css"


const SideBar = () => {

  return (
      <div className="side-bar">
    <div className="upper-Section-icons">
             
             <NavLink to='/project' className='icon-link openlink2' 
             >
              <FontAwesomeIcon 
              className='profile-icon upper-Section-icon' 
              icon={faPenRuler} />
             <span className='icon-text toggleColor' >Project's</span>
             </NavLink>

             <NavLink to='https://drive.google.com/file/d/1XG0KZujpzuN_dFTHdf9Y5LGwnIY0d5S-/view' target='_blank' className='icon-link' >
              <FontAwesomeIcon className='profile-icon upper-Section-icon' icon={faPaperclip} />
             <span className='icon-text' >Resume</span>
             </NavLink>

            <NavLink to='/profile' className='icon-link openlink1'>
              <FontAwesomeIcon 
              className='profile-icon upper-Section-icon'
               icon={faCircleUser} />
              <span className='icon-text' 
              >Profile</span>
             </NavLink> 

             <NavLink to='/reach-out' className='icon-link' >
              <FontAwesomeIcon className='profile-icon upper-Section-icon' icon={faPaperPlane} />
             <span className='icon-text' >Reach Out</span>
             </NavLink> 

             <NavLink to='/' className='icon-link' >
              <FontAwesomeIcon className='profile-icon upper-Section-icon' icon={faHome} />
             <span className='icon-text' >Home</span>
             </NavLink>
                   
           </div>
       </div>
  )
}

export default SideBar