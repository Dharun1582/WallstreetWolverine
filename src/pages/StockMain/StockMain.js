import React from 'react'
import {useParams} from 'react-router-dom'
import styles from "./StockMain.module.css"
import Modal from '../../components/Modal/Modal';
import StockGraph from '../../components/StockGraph/StockGraph';


function StockMain() {

  let {name}=useParams();
  return (
    <div className={`${styles.container}`}>
      <StockGraph name={name}/>
      <br/>
      <Modal name={name}/>
    </div>
  )
}

export default StockMain