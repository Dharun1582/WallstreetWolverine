import React, { useEffect, useRef } from "react";
import styles from "./Heading.module.css";

function Heading({ text}) {
  let headingRef = useRef();

  return (
    <div className={styles.headbox}>
        <h1 className={styles.insthead} data-text={text}>{text}</h1>
    </div>
  );
}

export default Heading;
