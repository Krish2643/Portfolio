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
             <div className='RO-msg-div' >
             <p className='RO-msg'>
             Got a question or just want to say hello ? <span>&nbsp;</span>
             </p>
             <p className='RO-msg RO-msg-typewriter ' >
             <Typewriter
                options={{
                  strings: ['Go ahead...'],
                  autoStart: true,
                  loop: true,
                }}
                />
              </p>
           </div>
        </div>
        <form
         className="contact-form"
         method='POST'target='_blank' action='https://formspree.io/f/xoqgwvgk'
         >
              <div className="name-email">
                <input 
                type="text" 
                name='Name'
                id='name' 
                placeholder='Enter your name'
                autoComplete='off'
                required
                />
                <input type="email" 
                id='email' 
                name='Email'
                placeholder='Enter your email address' 
                autoComplete='off'
                required
                />
               
              </div>
               <textarea
                name="msg"
                id="msg"
                cols="80" 
                rows="7" 
                placeholder='Share your thought with us...'
                autoComplete='off'
                required
                  />
              <button type='submit' className='submit'>Send</button>
        </form>
    </div>
  )
}

export default Reach_out