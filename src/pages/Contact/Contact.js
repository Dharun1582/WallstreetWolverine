import React, {useState, useRef,useEffect} from "react";
import styles from "./Contact.module.css";
import Heading2 from "../../components/Heading/Heading2";
import RoomIcon from "@mui/icons-material/Room";
import PhoneIcon from "@mui/icons-material/Phone";
import ReCAPTCHA from "react-google-recaptcha";
import ContactButton from "../../components/Button/ContactButton";
import { apisendMail } from "../../auth/auth"


function Contact() {
  const [formData,setFormdata] = useState({
    name: "",
    email:"",
    message: "",
  });
 
  
  return (
    <section className={styles.contentbox}>
      <div className={styles.leftcont}>
        <Heading2 text="How Can We Help You?" />
        <div className={styles.formbox}>
          <form onSubmit={(e) => {
            // e.preventDefault();
            apisendMail(formData)
          }
          }>
            <input
              type="text"
              required
              placeholder="Enter your name"
              className={styles.forminput}
              value={formData.name}
              onChange={(e) => setFormdata((prev) => {
                  return {...prev, name: e.target.value}
              })}
            />
            <input
              type="email"
              required
              placeholder="Enter your e-mail"
              value={formData.email}
              className={styles.forminput}
              onChange={(e) => setFormdata((prev) => {
                return {...prev, email: e.target.value}
            })}
            />
            <textarea
              required
              placeholder="Type your message"
              value={formData.query}
              className={styles.formmessage}
              onChange={(e) => setFormdata((prev) => {
                return {...prev, message: e.target.value}
            })}
            />
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
  );
}

export default Contact;
