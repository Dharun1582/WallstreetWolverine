import { useState, createContext, useEffect, useRef } from "react";
import styles from './../Register/Register.module.css'
import RegisterForm from "./../Register/RegisterForm";
import Page_transition from "./../../components/Animation/Transition"
const Login = () => {
  return (
    <Page_transition>
    <div className={`${styles.login_wrapper_main}`}>
      <div className={`${styles.login_wrapper}`}>
        <div className={`${styles.register_container}`}>
          <div className={`${styles.registerFormContainer}`}>
            <RegisterForm />
          </div>
        </div>
      </div>
    </div>
    </Page_transition>
  )
}

export default Login