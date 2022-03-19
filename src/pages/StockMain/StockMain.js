import React from 'react'
import {useParams} from 'react-router-dom'
import styles from "./StockMain.module.css"
import Modal from '../../components/Modal/Modal';
import StockGraph from '../../components/StockGraph/StockGraph';
import Heading from "../../components/Heading/Heading.js";


function StockMain() {

  let {name}=useParams();


  return (
    <>
      <Heading text={"MARKET"}/>
      <div className={`${styles.container}`}>
        <StockGraph name={name}/>
        <br/>
        <Modal name={name}/>
        <br/>
      </div>
    </>
    

  )
}

export default StockMain