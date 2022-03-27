import { Container } from '@mui/material'
import React from 'react'
// import styles from './Navbar.module.css'
import "./navbar.css"





function Navbar() {

  const[val,setState]=React.useState(true)

  return (
      <div>


         
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
    <a href="mailto:someone@example.com" target="_blank">Feedback</a>
    {/* <a href="/login">Login</a> */}

    {localStorage.getItem('email') === null && <a href="/login" onClick={() => setState(!val)} id="navbarLoginButton">Login</a>}
    {!(localStorage.getItem('email') === null) && <a href="/" onClick={() => {
      setState(!val);
      Object.keys(localStorage).forEach(function(key) {
      if (key !== 'firstTimeLogin') {
        localStorage.removeItem(key)
      }
      console.log(key)
      })
    }} id="navbarLoginButton">Logout</a>}


  </div>
</div> 
      </div>

  )
}

export default Navbar