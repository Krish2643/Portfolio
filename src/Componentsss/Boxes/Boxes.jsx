import React from 'react'
import './Boxes.css'
import { NavLink } from 'react-router-dom'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'


const Boxes = (props) => {
  return (
    <NavLink to={props.to} tabindex="1"
     target={props.target}
     className={props.className}>
            <span className="tooltiptext">{props.text}
            </span>
            <div className="placeholder">
            <FontAwesomeIcon icon={props.icon} />    
            <img src={props.src} alt={props.alt} />        
            </div>
        </NavLink>
  )
}

export default Boxes