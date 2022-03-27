import { useState, createContext, useEffect, useRef } from "react";
import styles from './../Register/Register.module.css'
import RegisterForm from "./../Register/RegisterForm";
const Login = () => {
  return (
    <div className={`${styles.login_wrapper_main}`}>
      <div className={`${styles.login_wrapper}`}>
        <div className={`${styles.register_container}`}>
          <div className={`${styles.registerFormContainer}`}>
            <RegisterForm />
          </div>
        </div>
      </div>
    </div>
  )
}

export default Login