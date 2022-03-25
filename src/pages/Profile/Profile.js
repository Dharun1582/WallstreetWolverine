import React from 'react';
import styles from "./Profile.module.css";
import Heading from "../../components/Heading/Heading.js";
import Page_transition from "../../components/Animation/Transition";

function Profile() {
  return (
    <Page_transition>
      <div className={styles.mainbox}>
        <Heading text={"PROFILE"}/>
        <div className={styles.contentbox}>
            <div className={styles.subcontentbox}>
                <div>
                  <h1>Name:</h1>
                </div>
                <p className={styles.content}></p>
            </div>
        </div>
        <div className={styles.contentbox}>
            <div className={styles.subcontentbox}>
                <div>
                  <h1>KID:</h1>
                </div>
                <p className={styles.content}>Wallstreenies</p>
            </div>
        </div>
        <div className={styles.contentbox}>
            <div className={styles.subcontentbox}>
                <div>
                  <h1>Current Balance:</h1>
                </div>
                <p className={styles.content}>2000</p>
            </div>
        </div>
        
        <div className={styles.cont}>
        
            <div className={styles.subcontentbox}>
              <table className={styles.table}>
                <th className={styles.list}>List of Comapnies:</th>
                <th className={styles.list}>No of Stocks:</th>
                  <tr>
                <td className={styles.list}>Reliance</td>
                <td className={styles.list}>20</td>
                  </tr>
              </table>
            
        </div>
        </div>
      </div>
    </Page_transition>
  )
}

export default Profile