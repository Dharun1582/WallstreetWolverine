import React from 'react'
import styles from "./StockMain.module.css"
import {useParams} from 'react-router-dom'

function StockMain() {
  let {name}=useParams();
  return (
    <div>{name}</div>
  )
}

export default StockMain