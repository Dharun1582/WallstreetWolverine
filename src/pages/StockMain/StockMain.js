import React from 'react'
import { useParams } from 'react-router-dom'
import styles from "./StockMain.module.css"
import Modal from '../../components/Modal/Modal';
import StockGraph from '../../components/StockGraph/StockGraph';
import Heading from "../../components/Heading/Heading.js";
import NewsFeed from '../../components/NewsFeed/NewsFeed';
import Page_transition from "../../components/Animation/Transition";
import { ReactNotifications, Store } from 'react-notifications-component'


const showMessage = (title, type) => {
  Store.addNotification({
      title: title,
      type: type,
      insert: "bottom",
      container: "top-right",
      animationIn: ["animate__animated", "animate__fadeIn"],
      animationOut: ["animate__animated", "animate__fadeOut"],
      dismiss: {
          duration: 3000,
          onScreen: true
      }
  })
}
function StockMain() {

  if(localStorage.getItem('token')==null){
    window.location='/login';
    showMessage('Login to continue','danger')
  }

  let { name } = useParams();


  return (
    <Page_transition>
    <>
      <Heading text={"MARKET"} />
      <div className={`${styles.outercontainer}`}>
        <div className={`${styles.item}`}>
          <NewsFeed />
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
    </Page_transition>

  )
}

export default StockMain