import React, { useEffect } from 'react'
import styles from "./Landing.module.css"
import { useNavigate, useSearchParams } from "react-router-dom";
import { apigetProfile, apicheckUser } from '../../auth/auth';
import { ReactNotifications, Store } from 'react-notifications-component'
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


function Landing() {
  const [searchParams, setsearchParams] = useSearchParams();
  const navigate = useNavigate();
  useEffect(() => {
    const func = async () => {
      console.log(searchParams.get("message"));
      if (searchParams.get("message") === "Login Successful") {
        // setAuth(true);
        // localStorage.setItem(
        //   "details",
        //   stringifyUserDetails({
        //     kid: searchParams.get("kid"),
        //     email: searchParams.get("email"),
        //     firstname: searchParams.get("firstname"),
        //     lastname: searchParams.get("lastname"),
        //     phone: searchParams.get("phone"),
        //     college: searchParams.get("college"),
        //     dept: searchParams.get("dept"),
        //     year: searchParams.get("year"),
        //     cegian: searchParams.get("cegian"),
        //   })
        // );

        localStorage.setItem("token", searchParams.get("token"));
        const config = {
          headers: {
            authorization: localStorage.getItem("token"),
          }
        };

        const loginRes = await apicheckUser(config);

        showMessage(searchParams.get("message"), 'success');
      } else if (searchParams.get("message") !== null) {
        showMessage("Try again later.", 'danger');

      }
    }
    func();
    return () => { };
  }, []);
  return (
    <div className={styles.wrapper}>
      <div className={styles.mainbox}>
        <div className={styles.wel_text}>WELCOME TO</div>
        <div className={styles.event_tit1}>
          <h1 className={styles.a}>W</h1>
          <h1 className={styles.b}>A</h1>
          <h1 className={styles.g}>L</h1>
          <h1 className={styles.d}>L</h1>
          <h1 className={styles.c}>S</h1>
          <h1 className={styles.e}>T</h1>
          <h1 className={styles.a}>R</h1>
          <h1 className={styles.f}>E</h1>
          <h1 className={styles.b}>E</h1>
          <h1 className={styles.c}>T</h1>
        </div><br></br>
        <div className={styles.event_tit2}>
          <h1 className={styles.d}>W</h1>
          <h1 className={styles.e}>O</h1>
          <h1 className={styles.a}>L</h1>
          <h1 className={styles.g}>V</h1>
          <h1 className={styles.f}>E</h1>
          <h1 className={styles.c}>R</h1>
          <h1 className={styles.b}>I</h1>
          <h1 className={styles.e}>N</h1>
          <h1 className={styles.a}>E</h1>
        </div>
      </div>
    </div>
  )
}

export default Landing