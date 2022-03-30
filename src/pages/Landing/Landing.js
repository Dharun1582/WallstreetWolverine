import React from 'react'
import styles from "./Landing.module.css"

function Landing() {
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