import React, { useState, useRef } from "react";
import Button from "../../components/Button/Button";
import FormField from "../../components/FormField/FormField";
import { LOGIN_FORM_FIELDS } from "../../data/RegisterDetails";
import styles from "./Register.module.css";
import ReCAPTCHA from "react-google-recaptcha";
import SimpleLoader from "../../components/SimpleLoader/SimpleLoader";
import "react-responsive-modal/styles.css";
import { Modal } from "react-responsive-modal";
import Heading from "../../components/Heading/Heading";
import Popup from "../../components/Popup/Popup";
import { ReactNotifications, Store } from 'react-notifications-component'
import 'react-notifications-component/dist/theme.css'
import "animate.css"
import { useNavigate } from "react-router-dom";
const axios = require('axios');

const loginDetailsFormat = {
    email: "",
    pwd: ""
}

const k_api = axios.create({
    // baseURL: "http://localhost:3001/",
    baseURL: "https://api.kurukshetraceg.org.in/",
});

const url_login = "api/user/login";

const apiLogin = async (data) => {
    try {
        const response = await k_api.post(`${url_login}`, data);
        return response;
    } catch (error) {
        return error.response;
    }
};

const showMessage = (title, type) => {
    Store.addNotification({
        title: title,
        type: type,
        insert: "bottom",
        container: "top-right",
        animationIn: ["animate__animated", "animate__fadeIn"],
        animationOut: ["animate__animated", "animate__fadeOut"],
        dismiss: {
            duration: 3000,
            onScreen: true
        }
    })
}

function RegisterForm() {
    const navigate = useNavigate()
    let reCaptchaRef = useRef(null);
    const [checked, setChecked] = useState(false);
    const [isDisabled, setIsDisabled] = useState(true);
    // const [registerDetails, setRegisterDetails] = useState(registerDetailsFormat);
    const [loginDetails, setLoginDetails] = useState(loginDetailsFormat);
    const [isModalOpen, setIsModalOpen] = useState(false)
    const [loader, setloader] = useState(false);


    const changeLoginFormState = (args) => {
        let prevState = loginDetails
        prevState[args.key] = args.value
        setLoginDetails({ ...prevState })
    }

    const clickedSubmit = async () => {
        if (reCaptchaRef.current.getValue() === "") {
            showMessage("reCaptcha verification failed", "danger")
            return;
        }
        setloader(true)
        //   console.log({...loginDetails,captcha: reCaptchaRef.current.getValue()});

        const resp = await apiLogin({
            ...loginDetails,
            captcha: reCaptchaRef.current.getValue(),
        });

        reCaptchaRef.current.reset();
        setloader(false)
        if (resp === undefined) {
            showMessage("Please try again after sometime", "danger")
        } else {
            if (resp.status === 200) {
                //  setAuth(true);
                console.log(resp.data.message);
                showMessage("Login successful!", "success")

                //   Success
                //       showSuccessToastNotification(<p>Logged in!</p>)
                //   localStorage.setItem("details", stringifyUserDetails(resp.data));
                localStorage.setItem("token", resp.data.token);
                localStorage.setItem("email", resp.data.email);
                localStorage.setItem("kid", resp.data.kid);
                localStorage.setItem("firstname", resp.data.firstname);
                localStorage.setItem("lastname", resp.data.lastname);
                localStorage.setItem("phone", resp.data.phone)
                localStorage.setItem("dept", resp.data.dept)
                if (localStorage.getItem("firstTimeLogin") === null) {
                    setIsModalOpen(true);
                } else {
                    navigate("/profile");
                }
                console.log(resp.data)
            } else if (resp.status >= 400 && resp.status < 500) {
                console.log(resp.data.message);
                showMessage(resp.data.message, "danger")
            } else if (resp.status >= 500 && resp.status < 600) {
                console.log(resp.data.message);
                showMessage(resp.data.message, "danger")
            }
        }
        //   window.location.href="/";

    }


    if (isModalOpen) {
        document.body.style.overflowY = "hidden"
    } else {
        document.body.style.overflowY = "visible"
    }

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
                        <>
                            <FormField
                                key={key}
                                type={field.type}
                                name={field.name}
                                heading={field.heading}
                                value={loginDetails}
                                setter={changeLoginFormState}
                            />

                        </>
                    );
                })}
                <ReCAPTCHA
                    sitekey={"6LcMoTUdAAAAAGFo2lgEFl5sIpitgdT-lExG05FL"}
                    theme="dark"
                    size="normal"
                    className="recaptcha"
                    ref={reCaptchaRef}
                />
                <div>
                    <Button text={"Login"} onClickMethod={clickedSubmit} />
                    <Modal showCloseIcon={false} open={isModalOpen} onClose={() => { setIsModalOpen(false) }} center autofocus={false} classNames={{
                        overlay: `${styles.customOverlay}`,
                        modal: `${styles.customModal}`,
                    }}>
                        <Popup />
                    </Modal>
                </div>
                <button
                    className={styles.btn_s}
                    onClick={() => window.open("https://kurukshetraceg.org.in/register")}
                >
                    Sign Up for K!
                </button>

            </div>
        </>
    );
}

export default RegisterForm;
