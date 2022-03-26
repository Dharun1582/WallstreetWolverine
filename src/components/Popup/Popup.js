import React, { useState } from 'react'
import "react-responsive-modal/styles.css";
import { Modal } from "react-responsive-modal";
import styles from "./Popup.module.css";
import {useNavigate} from 'react-router-dom';
import { apiPostRegisterDetails } from '../../auth/auth';
import axios from 'axios';
const Popup = (props) => {

    const [isDisabled, setIsDisabled] = useState(true)
    const [checked, setChecked] = useState(false)
    const canBeSubmitted = () => {
        return checked ? setIsDisabled(true) : setIsDisabled(false);
    };
    const handleChange = () => {
        setChecked(!checked);
        return canBeSubmitted();
    };

    let navigate = useNavigate();

    async function store(){
        // console.log(props.details);
        const res = await apiPostRegisterDetails(props.details);

        try {if (res === undefined) {
            console.log("Error");
          }
          else {
            if (res.status >=200 && res.status<=299) {
                console.log("registration Success");
                navigate('/login');
            }
            else if (res.status >= 400 && res.status < 500) {
                throw Error(res.statusText);
            }
            else if (res.status >= 500 && res.status < 600) {
              console.log("Server Side Error");
              throw Error(res.statusText);
            }
          }} catch(err){
            if(err){
                // console.log("ERROR");
                console.log(err);
                navigate('/register');
            }
        }
        

    //     // console.log(props.details);
    //     axios.post('http://localhost:3001/register',props.details).then(res=>{
    //         // console.log('jsdcnidnc');
    //         console.log(res);
    //         if(res.status >=200 && res.status<=299){
    //             // console.log();
    //             navigate('/login');
    //         }else{
    //             // console.log("Error");
    //             throw Error(res.statusText);
    //         }
    //     }).catch(err=>{
    //         if(err){
    //             // console.log("ERROR");
    //             console.log(err);
    //             navigate('/register');
    //         }
    //     })


     }

    return (
        <>
            <div className={styles.contentbox}>
                <div className={styles.subcontentbox} tabIndex="-1">
                    <h1 className={styles.head}>INSTRUCTIONS</h1>
                    <div className={styles.instructionbox}>
                        <p className={styles.instruction}><span>&#x25B2;</span>Wallstreet Wolverine is an imaginary stock exchange event with 6 companies across various sectors.</p>
                    </div>
                    <div className={styles.instructionbox}>
                        <p className={styles.instruction}><span>&#x25BC;</span>All stocks are purely imaginary and any resemblance is only a coincidence.</p>
                    </div>
                    <div className={styles.instructionbox}>
                        <p className={styles.instruction}><span>&#x25B2;</span>The fluctuations in stock prices have no relation with the real stock market.</p>
                    </div>
                    <div className={styles.instructionbox}>
                        <p className={styles.instruction}><span>&#x25BC;</span>The provided news feeds are totally imaginary, created specifically for this event, and do not have any relation with the real world and market.</p>
                    </div>
                    <div className={styles.instructionbox}>
                        <p className={styles.instruction}><span>&#x25B2;</span>One needs to buy or sell before the market closes or stocks will be squared off.</p>
                    </div>
                    <div className={styles.instructionbox}>
                        <p className={styles.instruction}><span>&#x25BC;</span>The companies used here are imaginary and any resemblance is only a coincidence.</p>
                    </div>
                    <div className={styles.instructionbox}>
                        <p className={styles.instruction}><span>&#x25B2;</span>The graph and statistics are subject to change in the provided time interval(30mins), predict the stock value with the news feed, and buy/sell within the time interval.</p>
                    </div>
                    <div className={styles.instructionbox}>
                        <p className={styles.instruction}><span>&#x25BC;</span>Make sure that the value of no. of stock to be bought does not exceed the available credit and the occurrence of such a case may lead to negative credit and paths to disqualification.</p>
                    </div>
                    <div className={styles.instructionbox}>
                        <p className={styles.instruction}><span>&#x25B2;</span>The newsfeed displayed is only relevant for the companies in this event. hence, the change in stock value can be predicted from it.</p>
                    </div>
                    <div className={styles.instructionbox}>
                        <p className={styles.instruction}><span>&#x25BC;</span>For any queries, kindly send them to the mail id on the website.</p>
                    </div>
                </div>
                <div className={styles.subcontentbox}>
                    <h1 className={styles.head}>RULES</h1>
                    <div className={styles.instructionbox}>
                        <p className={styles.instruction}><span>&#x25B2;</span>An initial capital of 1,00,000 of virtual credit will be provided to trade.</p>
                    </div>
                    <div className={styles.instructionbox}>
                        <p className={styles.instruction}><span>&#x25BC;</span>To enable the sell option for stock, at least 1 stock of its own kind must be bought initially.</p>
                    </div>
                    <div className={styles.instructionbox}>
                        <p className={styles.instruction}><span>&#x25B2;</span>The stock statistics are subject to change in regular intervals (30 mins).</p>
                    </div>
                    <div className={styles.instructionbox}>
                        <p className={styles.instruction}><span>&#x25BC;</span>The Stock value graph updates every 30mins throughout the event session.</p>
                    </div>
                    <div className={styles.instructionbox}>
                        <p className={styles.instruction}><span>&#x25B2;</span>Newsfeed updates 5mins before the graph changes.</p>
                    </div>
                    <div className={styles.instructionbox}>
                        <p className={styles.instruction}><span>&#x25BC;</span>The Buy/sell button will be enabled only for 20mins after the graph updates.</p>
                    </div>
                    <div className={styles.instructionbox}>
                        <p className={styles.instruction}><span>&#x25B2;</span>The trading for a particular stock value can be only done with the time interval before the graph updates and changes to a new value. Once changes trade for new stock value open.</p>
                    </div>
                    <div className={styles.instructionbox}>
                        <p className={styles.instruction}><span>&#x25BC;</span>Once a stock is bought/sold, it cannot be reverted back within the interval. Choose wisely!</p>
                    </div>
                    <div className={styles.instructionbox}>
                        <p className={styles.instruction}><span>&#x25B2;</span>Any player without a valid K! Id or invalid details can be Disqualified.</p>
                    </div>
                    <div className={styles.instructionbox}>
                        <p className={styles.instruction}><span>&#x25BC;</span>At the end of the event, the player with the highest total assets (credit holding with healthy trades) across the series will be declared the winner.</p>
                    </div>
                    <div className={styles.instructionbox}>
                        <p className={styles.instruction}><span>&#x25B2;</span>For any trade missed during the session may/may not affect the end result and can be continued from the current interval.</p>
                    </div>
                    <div className={styles.instructionbox}>
                        <p className={styles.instruction}><span>&#x25BC;</span>Participants should strictly adhere to time constraints. No extra time will be given at any circumstances.</p>
                    </div>
                    <div className={styles.instructionbox}>
                        <p className={styles.instruction}><span>&#x25B2;</span>Any malpractice or misbehavior will lead to disqualification.</p>
                    </div>
                    <div className={styles.instructionbox}>
                        <p className={styles.instruction}><span>&#x25BC;</span>Organizer’s decision is final.</p>
                    </div>
                </div>
            </div>
            <div className={styles.lastbox}>
                <Checkbox
                    label="I have read the above instructions and rules carefully. if any violation of the rules is found, I agree to disqualify me from the event "
                    value={checked}
                    onChange={handleChange}
                /><br></br>
                <div className={styles.buttonContainer}>
                    <div style={{ width: '50%' }}>
                        {/*onclick wont work when button is disabled */}
                        <button type={'submit'} disabled={isDisabled} className={styles.regButton} onClick={() => {
                            localStorage.setItem('firstTimeLogin', 'false')
                            navigate('/profile')
                        }}>Register for Wall Street Wolverine</button>
                    </div>
                    {/* <div style={{ width: '50%', display: 'inline' }}>
                        <button type={'submit'} className={styles.regButton} onClick={() => { funcToExec(false) }}>Back to form</button>
                    </div> */}
                </div>
            </div>
        </>
    );
};

const Checkbox = ({ label, value, onChange }) => {
    return (
        <label className={styles.chklabel}>
            <input type="checkbox" checked={value} onChange={onChange} className={styles.checkbox} autoFocus={false} />
            {label}
        </label>
    );
};


export default Popup;
