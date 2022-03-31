

import React, { useEffect, useRef } from "react";
import styles from "./Heading2.module.css";

function Heading2({ text}) {
  let headingRef = useRef();

  return (
    <div className={styles.headbox}>
        <h1 className={styles.headsmall} data-text={text}>{text} </h1>
    </div>
  );
}

export default Heading2;