import React from 'react'
import './Boxes.css'
import { NavLink } from 'react-router-dom'


const Boxes = ({to, className, icon:Icon, text, target, src, alt}) => {
  return (
    <NavLink to={to} tabIndex="1"
     target={target}
     className={className}>
            <span className="tooltiptext">{text}
            </span>
            <div className="placeholder">
           {Icon && <Icon />}
            <img src={src} alt={alt} />        
            </div>
        </NavLink>
  )
}

export default Boxes