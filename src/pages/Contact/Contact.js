import React, { useState, useRef, useEffect } from "react";
import styles from "./Contact.module.css";
import Heading2 from "../../components/Heading/Heading2";
import RoomIcon from "@mui/icons-material/Room";
import PhoneIcon from "@mui/icons-material/Phone";
import emailIcon from "@mui/icons-material/Email";
import messageIcon from "@mui/icons-material/Message";
import nameIcon from "@mui/icons-material/People";
import FormField from "../../components/FormField/FormField";
import { validateContactForm } from "../../validators/contactValidator";
import ReCAPTCHA from "react-google-recaptcha";
import ContactButton from "../../components/Button/ContactButton";
import { apisendMail } from "../../auth/auth"
import Page_transition from "../../components/Animation/Transition";
import { ReactNotifications, Store } from 'react-notifications-component'


function Contact() {

  const contactDetailsFormat = {
    name: "",
    email: "",
    message: "",
  };
  const changeContactFormState = (args) => {
    let prevState = formData;
    prevState[args.key] = args.value;
    setFormdata({ ...prevState });
  };


  const [loader, setloader] = useState(false);
  let reCaptchaRef = useRef(null);

  const [formData, setFormdata] = useState({
    contactDetailsFormat
  });

  


  const showMessage = (title, type = "danger") => {
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

  const clickedSubmit = async () => {
    // Form Validation
    let validation = validateContactForm(formData);

    if (validation.status === false) {
      showMessage(<p>{validation.message}</p>, "danger");
      return;
    }

    // reCaptcha Validation
    if (reCaptchaRef.current.getValue() === "") {
      showMessage(<p>reCaptcha verification failed</p>);
      return;
    }

    setloader(true);

    // const resp = await apisendMail({
    //   ...formData,
    //   captcha: reCaptchaRef.current.getValue(),
    // });

    reCaptchaRef.current.reset();

    setloader(false);
    showMessage(<p>Our organizers will get back to you soon!.</p>, "success");
    setFormdata(contactDetailsFormat);
  };

  return (
    <Page_transition>
      <section className={styles.contentbox}>
        <div className={styles.leftcont}>
          <Heading2 text="How Can We Help You?" />

            <div
              style={{ display: loader ? "none" : "flex" }}
              className={`${styles.formWrapper}`}
            >
              <FormField
                className={styles.formField}
                type={"text"}
                fieldIcon={nameIcon}
                placeholder="Enter Name"
                name="name"
                value={formData}
                setter={changeContactFormState}
              />
              <FormField
                className={styles.formField}
                type={"text"}
                fieldIcon={emailIcon}
                placeholder="Enter Email"
                name="email"
                value={formData}
                setter={changeContactFormState}
              />
              <FormField
                className={styles.formField}
                type={"textarea"}
                fieldIcon={messageIcon}
                placeholder="Your Message"
                name="message"
                value={formData}
                setter={changeContactFormState}
              />
              <div className={`${styles.recaptcha_container}`}>
                <ReCAPTCHA
                  sitekey="6LcMoTUdAAAAAGFo2lgEFl5sIpitgdT-lExG05FL"
                  theme="dark"
                  size="compact"
                  className={`${styles.recaptcha}`}
                  ref={reCaptchaRef}
                />
              </div>
              {/* <div> */}
              <ContactButton text="SUBMIT" onClickMethod={clickedSubmit}/>
              {/* </div> */}
            </div>

          </div>
        <div className={styles.rightcont}>
          <Heading2 text="Reach Us" />
          <div
            className={styles.reachus}
            style={{ display: "flex", alignItems: "center", width: "100%" }}
          >
            <div className={styles.loc_link}>
              <a
                href="https://goo.gl/maps/EKJJ6P9qvhNcYVH97"
                target="_blank"
                style={{ display: "block" }}
              >
                <RoomIcon className={styles.loc_icon} />
              </a>
            </div>
            <div className={styles.location}>
              12, CEG Tech Forum, College of Engineering Guindy, Sardar Patel
              Road, Chennai-25
            </div>
          </div>

          <div className={styles.contact}>
            <Heading2 text="Contact Us" />
            <center>
              <div className={styles.ph_number}>
                <PhoneIcon fontSize="1rem" />
                <span> Deepak - +91 79043 91142</span>
              </div>
              <div className={styles.ph_number}>
                <PhoneIcon fontSize="1rem" />
                <span> Sivadanus - +91 75500 35799</span>
              </div>
            </center>
          </div>
        </div>
      </section>
    </Page_transition>
  );
}

export default Contact;
