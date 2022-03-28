import React from 'react'
import styles from "./Instructions.module.css"
import Heading from "../../components/Heading/Heading.js";
import Page_transition from '../../components/Animation/Transition';
const IconPath = `${process.env.PUBLIC_URL}/assets/images/Instructions/`;

function Instructions() {
  return (
    <Page_transition>

    
    <div className={styles.mainbox}>    
      <Heading text={"INSTRUCTIONS"}/>
      <div className={styles.contentbox}>
        <div className={styles.subcontentbox} tabIndex="-1">
        <div className={styles.instructionbox}>
            <div>
              <img src={IconPath+'upicon.png'} className={styles.icon}></img>
            </div>
            <p className={styles.instruction}><span>&#x25B2;</span>Wallstreet Wolverine is an imaginary stock exchange event with 6 companies across various sectors.</p>
        </div>
        <div className={styles.instructionbox}>
            <div>
              <img src={IconPath+'downicon.png'} className={styles.icon}></img>
            </div>
            <p className={styles.instruction}><span>&#x25BC;</span>All stocks are purely imaginary and any resemblance is only a coincidence.</p>
        </div>
        <div className={styles.instructionbox}>
            <div>
              <img src={IconPath+'upicon.png'} className={styles.icon}></img>
            </div>
            <p className={styles.instruction}><span>&#x25B2;</span>The fluctuations in stock prices have no relation with the real stock market.</p>
        </div>
        <div className={styles.instructionbox}>
            <div>
              <img src={IconPath+'downicon.png'} className={styles.icon}></img>
            </div>
            <p className={styles.instruction}><span>&#x25BC;</span>The provided news feeds are totally imaginary, created specifically for this event, and do not have any relation with the real world and market.</p>
        </div>
        <div className={styles.instructionbox}>
            <div>
              <img src={IconPath+'upicon.png'} className={styles.icon}></img>
            </div>
            <p className={styles.instruction}><span>&#x25B2;</span>One needs to buy or sell before the market closes or stocks will be squared off.</p>
        </div>
        <div className={styles.instructionbox}>
            <div>
              <img src={IconPath+'downicon.png'} className={styles.icon}></img>
            </div>
            <p className={styles.instruction}><span>&#x25BC;</span>The companies used here are imaginary and any resemblance is only a coincidence.</p>
        </div>
        <div className={styles.instructionbox}>
            <div>
              <img src={IconPath+'upicon.png'} className={styles.icon}></img>
            </div>
            <p className={styles.instruction}><span>&#x25B2;</span>The graph and statistics are subject to change in the provided time interval(30mins), predict the stock value with the news feed, and buy/sell within the time interval.</p>
        </div>
        <div className={styles.instructionbox}>
            <div>
              <img src={IconPath+'downicon.png'} className={styles.icon}></img>
            </div>
            <p className={styles.instruction}><span>&#x25BC;</span>Make sure that the value of no. of stock to be bought does not exceed the available credit and the occurrence of such a case may lead to negative credit and paths to disqualification.</p>
        </div>
        <div className={styles.instructionbox}>
            <div>
              <img src={IconPath+'upicon.png'} className={styles.icon}></img>
            </div>
            <p className={styles.instruction}><span>&#x25B2;</span>The newsfeed displayed is only relevant for the companies in this event. hence, the change in stock value can be predicted from it.</p>
        </div>
        <div className={styles.instructionbox}>
            <div>
              <img src={IconPath+'downicon.png'} className={styles.icon}></img>
            </div>
            <p className={styles.instruction}><span>&#x25BC;</span>For any queries, kindly send them to the mail id on the website.</p>
        </div>
        </div>
      </div>
    </div>
    </Page_transition>
  )
}

export default Instructions