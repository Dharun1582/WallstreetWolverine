import { Container } from '@mui/material'
import React from 'react'
// import styles from './Navbar.module.css'
import "./navbar.css"





function Navbar() {
  return (
      <div>

		{/* <div className={`${styles.nav}`}>
  <input type="checkbox" id="nav-check" />
  <div className={`${styles.nav_header}`}>
    <div className={`${styles.nav_title}`}>
		<img className={`${styles.logo}`} src='images/logos/logo.png' />
      
    </div>
  </div>
  <div className={`${styles.nav_btn}`}>
    <label htmlFor="nav-check">
      <span></span>
      <span></span>
      <span></span>
    </label>
  </div>
  
  <div className={`${styles.nav_links}`}>
    <a href="//github.io/jo_geek" target="_blank">Github</a>
    <a href="/market" target="_blank">Market</a>
    <a href="https://in.linkedin.com/in/jonesvinothjoseph" target="_blank">LinkedIn</a>
    <a href="https://codepen.io/jo_Geek/" target="_blank">Codepen</a>
    <a href="https://jsfiddle.net/user/jo_Geek/" target="_blank">JsFiddle</a>
  </div>
</div> */}

         
		<div className="nav">
  <input type="checkbox" id="nav-check" />
  <div className="nav-header">
    <div className="nav-title">
		<img className='logo' src='../images/logos/logo.png' />
      
    </div>
  </div>
  <div className="nav-btn">
    <label htmlFor="nav-check">
      <span></span>
      <span></span>
      <span></span>
      {/* <span></span> */}

    </label>
  </div>
  
  <div className="nav-links">
    <a href="/market">Market</a>
    <a href="/profile">Check Credit</a>
    <a href="/instructions" target="_blank">Instructions</a>
    <a href="/rules" target="_blank">Rules</a>
    <a href="/contact" target="_blank">Contacts</a>
    <a href="https://mail.google.com/mail/?view=cm&fs=1&tf=1&to=target@email.com" target="_blank">Feedback</a>
    <a href="/login">Login</a>

  </div>
</div> 
      </div>

  )
}

export default Navbar