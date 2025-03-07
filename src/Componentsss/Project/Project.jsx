import React from 'react'
import './Project.css'
import SideBar from '../SideBar/SideBar'
import Card from '../Card/Card'


const Project = () => {

  return ( 
    <div className='project-container'>
      <div className="upper-Section">
          <h2 className='project-heading'>My Most Recent  Works</h2>
          <hr className='upper-Section-underLine' />     
                <SideBar />     
      </div>
                <Card />
    </div>
  )
}

export default Project