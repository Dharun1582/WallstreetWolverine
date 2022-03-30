import { Container } from '@mui/material'
import React from 'react'
// import styles from './Navbar.module.css'
import { Auth, SetAuth } from "../../App";
import "./navbar.css"





function Navbar() {

  const[val,setState]=React.useState(true);
  const auth = React.useContext(Auth);
  const setAuth = React.useContext(SetAuth);  
  console.log(auth);

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
    <a href="/profile">Profile</a>
    <a href="/instructions">Instructions</a>
    <a href="/rules" target="_blank">Rules</a>
    <a href="/contact">Contact</a>
    {/* <a href="mailto:someone@example.com" target="_blank">Feedback</a> */}
    {/* <a href="/login">Login</a> */}

    {!(auth) && <a href="/login" onClick={() => {
      
      setState(!val)
      
      }} id="navbarLoginButton">Login</a>}
    {(auth) && <a href="/" onClick={() => {
      setState(!val);
      setAuth(false);
      console.log(auth);
      Object.keys(localStorage).forEach(function(key) {
      if (key !== 'firstTimeLogin') {
        localStorage.removeItem(key)
      }
      // console.log(key)
      })
    }} id="navbarLoginButton">Logout</a>}


  </div>
</div> 
      </div>

  )
}

export default Navbar