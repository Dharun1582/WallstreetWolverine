import React, { useEffect, useRef } from "react";
import styles from "./ContactButton.module.css";

function ContactButton({ text, onClickMethod}) {
  let contactRef = useRef();

  function changeBackground(e){
    e.target.style.background = '#cacaca';
    e.target.style.color = 'black';
    // e.target.style.padding = '0.7rem';
  }

  function returnBackground(e){
    e.target.style.background = 'rgb(83, 83, 83)';
    e.target.style.color = 'white';
    // e.target.style.padding = '0.5rem';
  }

  return (
    <div className={styles.buttonbox}>
        <button type="submit" onClick={() => onClickMethod()} className={styles.btn_el} onMouseOver={changeBackground} onMouseLeave={returnBackground} data-text={text}>{text}</button>
    </div>
  );
}

export default ContactButton;