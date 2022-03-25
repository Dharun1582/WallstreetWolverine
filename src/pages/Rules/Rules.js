import React from 'react'
import styles from "../Instructions/Instructions.module.css"
import Heading from "../../components/Heading/Heading.js";
import Page_transition from "../../components/Animation/Transition";
const IconPath = `${process.env.PUBLIC_URL}/assets/images/Instructions/`;

function Rules() {
  return (
    <Page_transition>
    <div className={styles.mainbox}> 
      <Heading text={"RULES"}/>
      <div className={styles.contentbox}>
        <div className={styles.subcontentbox} tabIndex="-1">
        <div className={styles.instructionbox}>
            <div>
              <img src={IconPath+'upicon.png'} className={styles.icon}></img>
            </div>
            <p className={styles.instruction}><span>&#x25B2;</span>An initial capital of 1,00,000 of virtual credit will be provided to trade.</p>
        </div>
        <div className={styles.instructionbox}>
            <div>
              <img src={IconPath+'downicon.png'} className={styles.icon}></img>
            </div>
            <p className={styles.instruction}><span>&#x25BC;</span>To enable the sell option for stock, at least 1 stock of its own kind must be bought initially.</p>
        </div>
        <div className={styles.instructionbox}>
            <div>
              <img src={IconPath+'upicon.png'} className={styles.icon}></img>
            </div>
            <p className={styles.instruction}><span>&#x25B2;</span>The stock statistics are subject to change in regular intervals (30 mins).</p>
        </div>
        <div className={styles.instructionbox}>
            <div>
              <img src={IconPath+'downicon.png'} className={styles.icon}></img>
            </div>
            <p className={styles.instruction}><span>&#x25BC;</span>The Stock value graph updates every 30mins throughout the event session.</p>
        </div>
        <div className={styles.instructionbox}>
            <div>
              <img src={IconPath+'upicon.png'} className={styles.icon}></img>
            </div>
            <p className={styles.instruction}><span>&#x25B2;</span>Newsfeed updates 5mins before the graph changes.</p>
        </div>
        <div className={styles.instructionbox}>
            <div>
              <img src={IconPath+'downicon.png'} className={styles.icon}></img>
            </div>
            <p className={styles.instruction}><span>&#x25BC;</span>The Buy/sell button will be enabled only for 20mins after the graph updates.</p>
        </div>
        <div className={styles.instructionbox}>
            <div>
              <img src={IconPath+'upicon.png'} className={styles.icon}></img>
            </div>
            <p className={styles.instruction}><span>&#x25B2;</span>The trading for a particular stock value can be only done with the time interval before the graph updates and changes to a new value. Once changes trade for new stock value open.</p>
        </div>
        <div className={styles.instructionbox}>
            <div>
              <img src={IconPath+'downicon.png'} className={styles.icon}></img>
            </div>
            <p className={styles.instruction}><span>&#x25BC;</span>Once a stock is bought/sold, it cannot be reverted back within the interval. Choose wisely!</p>
        </div>
        <div className={styles.instructionbox}>
            <div>
              <img src={IconPath+'upicon.png'} className={styles.icon}></img>
            </div>
            <p className={styles.instruction}><span>&#x25B2;</span>Any player without a valid K! Id or invalid details can be Disqualified.</p>
        </div>
        <div className={styles.instructionbox}>
            <div>
              <img src={IconPath+'downicon.png'} className={styles.icon}></img>
            </div>
            <p className={styles.instruction}><span>&#x25BC;</span>At the end of the event, the player with the highest total assets (credit holding with healthy trades) across the series will be declared the winner.</p>
        </div>
        <div className={styles.instructionbox}>
            <div>
              <img src={IconPath+'upicon.png'} className={styles.icon}></img>
            </div>
            <p className={styles.instruction}><span>&#x25B2;</span>For any trade missed during the session may/may not affect the end result and can be continued from the current interval.</p>
        </div>
        <div className={styles.instructionbox}>
            <div>
              <img src={IconPath+'downicon.png'} className={styles.icon}></img>
            </div>
            <p className={styles.instruction}><span>&#x25BC;</span>Participants should strictly adhere to time constraints. No extra time will be given at any circumstances.</p>
        </div>
        <div className={styles.instructionbox}>
            <div>
              <img src={IconPath+'upicon.png'} className={styles.icon}></img>
            </div>
            <p className={styles.instruction}><span>&#x25B2;</span>Any malpractice or misbehavior will lead to disqualification.</p>
        </div>
        <div className={styles.instructionbox}>
            <div>
              <img src={IconPath+'downicon.png'} className={styles.icon}></img>
            </div>
            <p className={styles.instruction}><span>&#x25BC;</span>Organizer’s decision is final.</p>
        </div>
        </div>
      </div>
    </div>
    </Page_transition>
  )
}

export default Rules