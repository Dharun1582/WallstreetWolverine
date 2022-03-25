import React, { useEffect, useRef } from "react";
import styles from "./Footer.module.css";

function Footer({ text }) {
  return <div className={styles.footerbox}>
      Designed and Developed by <a href="/developer">CEG Tech Forum</a>
  </div>;
}

export default Footer;
