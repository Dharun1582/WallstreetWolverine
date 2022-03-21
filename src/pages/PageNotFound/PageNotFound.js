import React from 'react'
import styles from "./PageNotFound.module.css"

function PageNotFound() {
  return (
    <div className={styles.mainbox}>
      <div className={styles.errbox}>404</div>
      <div className={styles.errmsg}>Whoops, Page not found!</div>
      <div className={styles.btn}>
        <button className={styles.home_btn}><a href="/">BACK TO HOMEPAGE</a></button>
      </div>
    </div>
  )
}

export default PageNotFound