import React, { useState, useRef, useEffect } from "react";
import styles from "./Contact.module.css";
import Heading2 from "../../components/Heading/Heading2";
import RoomIcon from "@mui/icons-material/Room";
import PhoneIcon from "@mui/icons-material/Phone";
// import { ReactNotifications, Store } from 'react-notifications-component'
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
      showMessage(<p>{validation.message}</p>,"danger");
      return;
    }

    // reCaptcha Validation
    if (reCaptchaRef.current.getValue() === "") {
      showMessage(<p>reCaptcha verification failed</p>);
      return;
    }

    setloader(true);

    const resp = await apisendMail({
      ...formData,
      captcha: reCaptchaRef.current.getValue(),
    });

    reCaptchaRef.current.reset();

    // setloader(false);

    if (resp === undefined) {
      showMessage(<p>Please try again after sometime</p>);
    } else {
      if (resp.status === 200) {
        showMessage(<p>{resp.data.message}</p>, "success");
        setFormdata(contactDetailsFormat);
      } else if (resp.status >= 400 && resp.status < 500) {
        showMessage(<p>{resp.data.message}</p>);
      } else if (resp.status >= 500 && resp.status < 600) {
        showMessage(<p>{resp.data.message}</p>);
      }
    }
  };

  return (
    <Page_transition>
      <section className={styles.contentbox}>
        <div className={styles.leftcont}>
          <Heading2 text="How Can We Help You?" />
          <div className={styles.formbox}>
            <form onSubmit={
              clickedSubmit
            }>
              <input
                type="text"
                required
                placeholder="Enter your name"
                className={styles.forminput}
                value={formData.name}
                onChange={(e) => setFormdata((prev) => {
                  return { ...prev, name: e.target.value }
                })}
              />
              <input
                type="email"
                required
                placeholder="Enter your e-mail"
                value={formData.email}
                className={styles.forminput}
                onChange={(e) => setFormdata((prev) => {
                  return { ...prev, email: e.target.value }
                })}
              />
              <textarea
                required
                placeholder="Type your message"
                value={formData.query}
                className={styles.formmessage}
                onChange={(e) => setFormdata((prev) => {
                  return { ...prev, message: e.target.value }
                })}
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

              <div>
                <ContactButton text="SUBMIT" />
              </div>
            </form>
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
                <span> Name - +91 99999 99999</span>
              </div>
              <div className={styles.ph_number}>
                <PhoneIcon fontSize="1rem" />
                <span> Name - +91 88888 88888</span>
              </div>
            </center>
          </div>
        </div>
      </section>
    </Page_transition>
  );
}

export default Contact;
