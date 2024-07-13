import React from 'react'
import { NavLink } from 'react-router-dom'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import {faCircleUser, faHome, faPaperPlane, faPaperclip, faPenRuler
} from '@fortawesome/free-solid-svg-icons'
import "./SideBar.css"


const SideBar = () => {

// className = {({isActive}) => isActive ? "icon-link active-link" : "active-link" }

  return (
      <div className="side-bar">
    <div className="upper-Section-icons">
             
             <NavLink to='/project' className = {({isActive}) => isActive ? "icon-link active-link" : "icon-link" } 
             >
              <FontAwesomeIcon 
              className='profile-icon upper-Section-icon' 
              icon={faPenRuler} />
             <span className='icon-text toggleColor' >Project's</span>
             </NavLink>

             <NavLink to='https://drive.google.com/file/d/1jeysSdE0Q_Ypt6hnC8t0AQgUMmMeSZQH/view' target='_blank' className='icon-link' >
              <FontAwesomeIcon className='profile-icon upper-Section-icon' icon={faPaperclip} />
             <span className='icon-text' >Resume</span>
             </NavLink>

            <NavLink to='/profile' className = {({isActive}) => isActive ? "icon-link active-link" : "icon-link" }>
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