import { useState, createContext, useEffect, useRef } from "react";
import styles from './../Register/Register.module.css'
import RegisterForm from "./../Register/RegisterForm";
import Page_transition from "../../components/Animation/Transition";
import Heading from "../../components/Heading/Heading.js";

const Login = () => {
  return (
    <Page_transition>
      <div className={`${styles.login_wrapper_main}`}>
        <div className={`${styles.login_wrapper}`}>
          <Heading text='LOGIN' />
          <div className={`${styles.register_container}`}>
            <div className={`${styles.registerFormContainer}`}>
              <RegisterForm pageType="Login" />
            </div>
          </div>
        </div>
      </div>
    </Page_transition>
  )
}

export default Login