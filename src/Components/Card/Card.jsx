import React,  {useState, useEffect} from 'react'
import Data from '../Data'
import './Card.css'
// import LocomotiveScroll from "locomotive-scroll";

const Card = () => {

   // const locomotiveScroll = new LocomotiveScroll();
   const [data, setData] = useState([]);

   useEffect(()=>{
             setData(Data.proj);
   }, []) 
 
        const element = data.map(item => (
          <div className="card">
          <img src={item.imageUrl} 
          className='small-img'
          alt="" />
      <div className="description">
      <div className="host">
          <a href={item.liveLink} target='_blank'
             className='host-live-btn host-btn'
             >Live Demo</a>
          <a href={item.githubLink} target='_blank'
             className='host-github-btn host-btn' 
              >GitHub</a>
      </div>
           
      <h2 className='small-proj-name '>
      {item.name}</h2>
      <p className='small-proj-des'>{item.description}</p>
      </div>
      </div>
             ))


  return (
        <div className="cards"> 
         {element}
        </div>
  )
}

export default Card