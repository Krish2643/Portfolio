import React from 'react'
import './Reach_out.css'
import { NavLink } from 'react-router-dom'
import Typewriter from 'typewriter-effect';


const Reach_out = () => {
  return (
    <div className='Reach-out-Section' >
        <div className="RO-Upper_Section">
             <NavLink to='/' className='hello-icon' >👋</NavLink>
             <h2 className='RO-heading' >Send me a message !</h2>
             <p className='RO-msg'>
             Got a question or just want to say hello ? <span>&nbsp;</span>
             <Typewriter
                options={{
                  strings: ['Go ahead...'],
                  autoStart: true,
                  loop: true,
                }}
                />
              </p>
             
        </div>
        <form
         className="contact-form"
         method='POST'target='_blank' action='mailto:parmarkrish2643@gmail.com'
         >
              <div className="name-email">
                <input type="text" id='name' placeholder='Enter your name'/>
                <input type="email" id='email' placeholder='Enter your email address' />
               
              </div>
               <textarea name="msg" id="msg" cols="80" rows="7" placeholder='Share your thought with us...'/>
              <button type='submit' className='submit'>Send</button>
        </form>
    </div>
  )
}

export default Reach_out