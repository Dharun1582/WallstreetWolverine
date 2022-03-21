import React, { useEffect } from 'react'
import styles from "./Button.module.css"


function Button({ text, onClickMethod, pageType, color = "rgb(0, 156, 222)" }) {
  return (
    <button className={`${styles.button}`} onClick={() => onClickMethod(pageType)} style={{ backgroundColor: color }}>
      {text}
    </button>
  );
}

export default Button
// used in RegisterForm.js
