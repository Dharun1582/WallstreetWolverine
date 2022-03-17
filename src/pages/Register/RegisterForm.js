import React, { useState, useRef } from "react";
import Button from "../../components/Button/Button";
import FormField from "../../components/FormField/FormField";
import { REGISTER_FORM_FIELDS, LOGIN_FORM_FIELDS } from "../../data/RegisterDetails";
import styles from "./Register.module.css"; // ContactUs
import ReCAPTCHA from "react-google-recaptcha";
import SimpleLoader from "../../components/SimpleLoader/SimpleLoader";
import "react-responsive-modal/styles.css";
import { Modal } from "react-responsive-modal";
import Heading from "../../components/Heading/Heading";
import Popup from "../../components/Popup/Popup";
const contactDetailsFormat = {
    name: "",
    email: "",
    message: "",
};

function RegisterForm({ pageType }) {

    const [checked, setChecked] = useState(false);
    const [isDisabled, setIsDisabled] = useState(true);
    let reCaptchaRef = useRef(null);

    const [contactDetails, setcontactDetails] = useState(contactDetailsFormat);
    const [isModalOpen, setIsModalOpen] = useState(false)
    const [loader, setloader] = useState(false);

    const changeContactFormState = (args) => {
        let prevState = contactDetails;
        prevState[args.key] = args.value;
        setcontactDetails({ ...prevState });
    };

    const clickedSubmit = async () => {
        // Form Validation
        setIsModalOpen(true)
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
                                value={contactDetails}
                                setter={changeContactFormState}
                            />
                        );
                    })}
                    {/* <div className={`${styles.recaptcha_container}`}>
          <ReCAPTCHA
            sitekey="6LcMoTUdAAAAAGFo2lgEFl5sIpitgdT-lExG05FL"
            theme="dark"
            size="compact"
            className={`${styles.recaptcha}`}
            ref={reCaptchaRef}
          />
        </div> */}
                    <div>
                        <Button text={"Agree to rules and instructions"} onClickMethod={clickedSubmit} />
                        <Modal showCloseIcon={false} open={isModalOpen} onClose={() => { setIsModalOpen(false) }} center autofocus={false} classNames={{
                            overlay: `${styles.customOverlay}`,
                            modal: `${styles.customModal}`,
                        }}>
                            <Popup funcToExec={setIsModalOpen} checked={checked} setChecked={setChecked} isDisabled={isDisabled} setIsDisabled={setIsDisabled} />
                        </Modal>
                    </div>
                </div>
            </>
        );
    } else {
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
                                value={contactDetails}
                                setter={changeContactFormState}
                            />
                        );
                    })}
                    {/* <div className={`${styles.recaptcha_container}`}>
          <ReCAPTCHA
            sitekey="6LcMoTUdAAAAAGFo2lgEFl5sIpitgdT-lExG05FL"
            theme="dark"
            size="compact"
            className={`${styles.recaptcha}`}
            ref={reCaptchaRef}
          />
        </div> */}
                    <div>
                        <Button text={"Login"} onClickMethod={clickedSubmit} />
                        {/* a notif modal might come */}
                        {/* change below modal fr that */}
                        {/* <Modal showCloseIcon={false} open={isModalOpen} onClose={() => { setIsModalOpen(false) }} center autofocus={false} classNames={{
              overlay: `${styles.customOverlay}`,
              modal: `${styles.customModal}`,
            }}>
              <Popup funcToExec={setIsModalOpen} checked={checked} setChecked={setChecked} isDisabled={isDisabled} setIsDisabled={setIsDisabled} />
            </Modal> */}
                    </div>
                </div>
            </>
        );
    }

}

export default RegisterForm;
