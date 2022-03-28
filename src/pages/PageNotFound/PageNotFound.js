import React from 'react'
import styles from "./PageNotFound.module.css"
import Page_transition from "../../components/Animation/Transition";

function PageNotFound() {
  return (
    <Page_transition>
      <div className={styles.mainbox}>
        <div className={styles.errbox}>404</div>
        <div className={styles.errmsg}>Whoops, Page not found!</div>
        <div className={styles.btn}>
          <button className={styles.home_btn}><a href="/">BACK TO HOMEPAGE</a></button>
        </div>
      </div>
    </Page_transition>
  )
}

export default PageNotFound