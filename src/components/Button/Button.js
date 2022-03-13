import React from 'react'
import styles from "./Button.module.css"

function Button({ text, onClickMethod, color="rgb(0, 156, 222)"}) {
  return (
    <button className={`${styles.button}`} onClick={ onClickMethod} style={{backgroundColor: color}}>
      {text}
    </button>
  );
}



export default Button;