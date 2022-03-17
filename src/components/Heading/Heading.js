import React, { useRef } from "react";
import styles from "./Heading.module.css";

function Heading({ text}) {

  return (
    <div className={styles.headbox}>
        <h1 className={styles.insthead} data-text={text}>{text}</h1>
    </div>
  );
}

export default Heading;
