import React from 'react'
import styles from "./Button.module.css"

function Button({ text, onClickMethod}) {
  return (
    <button className={`${styles.button}`} onClick={ onClickMethod()}>
      {text}
    </button>
  );
}



export default Button;