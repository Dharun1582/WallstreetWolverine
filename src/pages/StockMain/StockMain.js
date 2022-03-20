import React from 'react'
import { useParams } from 'react-router-dom'
import styles from "./StockMain.module.css"
import Modal from '../../components/Modal/Modal';
import StockGraph from '../../components/StockGraph/StockGraph';
import Heading from "../../components/Heading/Heading.js";
import NewsFeed from '../../components/NewsFeed/NewsFeed';


function StockMain() {

  let { name } = useParams();
  var nrows;
  console.log(window.innerWidth);
  if (window.innerWidth >= 1024) {
    nrows = 7;
  } else {
    nrows = 2;
  }


  return (
    <>
      <Heading text={"MARKET"} />
      <div className={`${styles.outercontainer}`}>
        <div className={`${styles.item}`}>
          <NewsFeed nrows={nrows} />
        </div>
        <div className={`${styles.container}`}>
          <div className={`${styles.graph}`}>
            <StockGraph name={name} />
          </div>

          <br />

          <Modal name={name} />

          <br />
        </div>
      </div>

    </>


  )
}

export default StockMain