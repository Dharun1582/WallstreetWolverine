import React from 'react'
import styles from "./StockMain.module.css"
import Graph from "./Graph";
import Button from './../../components/Button/Button';



function StockMain() {

  function onclk() {
    window.open('/');
  }

  return (
    <div className={`${styles.container}`}>
      <Graph />
      <div className={`${styles.btns}`}>
        <div className={`${styles.lbtn}`}>
          <Button text='Buy' onClickMethod={onclk} />
        </div>
        <div className={`${styles.rbtn}`}>
          <Button text='Sell' onClickMethod={onclk} />
        </div>
      </div>
    </div>
  )
}

export default StockMain