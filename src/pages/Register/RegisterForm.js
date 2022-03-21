import React, { useState, useRef } from "react";
import Button from "../../components/Button/Button";
import FormField from "../../components/FormField/FormField";
import { REGISTER_FORM_FIELDS, LOGIN_FORM_FIELDS } from "../../data/RegisterDetails";
import styles from "./Register.module.css"; 
import ReCAPTCHA from "react-google-recaptcha";
import SimpleLoader from "../../components/SimpleLoader/SimpleLoader";
import "react-responsive-modal/styles.css";
import { Modal } from "react-responsive-modal";
import Heading from "../../components/Heading/Heading";
import Popup from "../../components/Popup/Popup";
import { validateForm  } from "../../validators/registerFormValidator";
import { ReactNotifications, Store } from 'react-notifications-component'
import 'react-notifications-component/dist/theme.css'
import "animate.css"
import { useNavigate } from "react-router-dom";
const registerDetailsFormat = {
    name: "",
    kId: "",
    number: "",
    email: "",
    college: "",
    department: "",
    password: "",
    confirmPassword: "",

};

const loginDetailsFormat = {
    kId: "",
    password: ""
}

function RegisterForm({ pageType }) {
    const navigate = useNavigate()
    const [checked, setChecked] = useState(false);
    const [isDisabled, setIsDisabled] = useState(true);
    let reCaptchaRef = useRef(null);

    const [registerDetails, setRegisterDetails] = useState(registerDetailsFormat);
    const [loginDetails, setLoginDetails] = useState(loginDetailsFormat);
    const [isModalOpen, setIsModalOpen] = useState(false)
    const [loader, setloader] = useState(false);

    const changeRegisterFormState = (args) => {
        let prevState = registerDetails;
        prevState[args.key] = args.value;
        setRegisterDetails({ ...prevState });
    };

    const changeLoginFormState = (args) => {
        let prevState = loginDetails
        prevState[args.key] = args.value
        setLoginDetails({ ...prevState })
    }

    const clickedSubmit = async (pageType) => {
        // Form Validation
        if (pageType === 'Register') {
            let validation = validateForm({ ...registerDetails, pageType: pageType })

            if (validation.status === false) {
                Store.addNotification({
                    title: "Note:",
                    message: validation.message,
                    type: "danger",
                    insert: "bottom",
                    container: "top-right",
                    animationIn: ["animate__animated", "animate__fadeIn"],
                    animationOut: ["animate__animated", "animate__fadeOut"],
                    dismiss: {
                        duration: 4000,
                        onScreen: true
                    }
                })
                return;
            } else {
                setIsModalOpen(true)    
            }
        } else if (pageType === 'Login') {
            let validation = validateForm({ ...loginDetails, pageType: pageType })
            if (validation.status === false) {                
                Store.addNotification({
                    title: "Note:",
                    message: validation.message,
                    type: "danger",
                    insert: "bottom",
                    container: "top-right",
                    animationIn: ["animate__animated", "animate__fadeIn"],
                    animationOut: ["animate__animated", "animate__fadeOut"],
                    dismiss: {
                        duration: 4000,
                        onScreen: true
                    }
                })
                return;
            } else {
                Store.addNotification({
                    title: "Login successful!",
                    type: "success",
                    insert: "bottom",
                    container: "top-right",
                    animationIn: ["animate__animated", "animate__fadeIn"],
                    animationOut: ["animate__animated", "animate__fadeOut"],
                    dismiss: {
                        duration: 3000,
                        onScreen: true
                    }
                })
                navigate('/profile')
                return
            }
        }
    };

    if (isModalOpen) {
        document.body.style.overflowY = "hidden"
    } else {
        document.body.style.overflowY = "visible"

    }
    if (pageType === 'Register') {
        return (
            <>
                {loader && <SimpleLoader message={"Registering"} />}
                <div
                    style={{ display: loader ? "none" : "flex" }}
                    className={`${styles.formWrapper}`}
                >
                    <Heading text='Register' />
                    {REGISTER_FORM_FIELDS.map((field, key) => {
                        return (
                            <FormField
                                key={key}
                                type={field.type}
                                name={field.name}
                                heading={field.heading}
                                value={registerDetails}
                                setter={changeRegisterFormState}
                            />
                        );
                    })}
                    <div>
                        <Button text={"Agree to rules and instructions"} onClickMethod={clickedSubmit} pageType="Register" />
                        <Modal showCloseIcon={false} open={isModalOpen} onClose={() => { setIsModalOpen(false) }} center autofocus={false} classNames={{
                            overlay: `${styles.customOverlay}`,
                            modal: `${styles.customModal}`,
                        }}>
                            <Popup funcToExec={setIsModalOpen} checked={checked} setChecked={setChecked} isDisabled={isDisabled} setIsDisabled={setIsDisabled} details={registerDetails} />
                        </Modal>
                    </div>
                </div>
            </>
        );
    } else if (pageType === 'Login') {
        return (
            <>
                {loader && <SimpleLoader message={"Logging in"} />}
                <div
                    style={{ display: loader ? "none" : "flex" }}
                    className={`${styles.formWrapper}`}
                >
                    <Heading text='Login' />
                    {LOGIN_FORM_FIELDS.map((field, key) => {
                        return (
                            <FormField
                                key={key}
                                type={field.type}
                                name={field.name}
                                heading={field.heading}
                                value={loginDetails}
                                setter={changeLoginFormState}
                            />
                        );
                    })}
                    <div>
                        <Button text={"Login"} onClickMethod={ clickedSubmit } pageType="Login" />
                    </div>
                </div>
            </>
        );
    }

}

export default RegisterForm;
