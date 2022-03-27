import React, { useState, useEffect } from "react";
import styles from "./Modal.module.css";
import Button from "../Button/Button";
import graph from "../../data/graph.json";
import { ReactNotifications, Store } from 'react-notifications-component'
import { apiGetWallet, apiFetchGraphData, apiBuyStock, apiSellStock } from "../../auth/auth";

function Modal(props) {
    const [modal, setModal] = useState(false);
    const [modal2, setModal2] = useState(false);
    const company = props.name;

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

    const config = {
        headers: {
            authorization: localStorage.getItem("token"),
        },
    };

    const fetchWallet = async (flag, nos) => {
        const response = await apiGetWallet(config);

        if (response === undefined) {
            console.log("Error");
        }
        else {
            if (response.status >= 200 && response.status <= 299) {
                const res = response.data;
                if (res) {
                    // console.log(res);
                    const graphData = await apiFetchGraphData();
                    if (graphData === undefined) {
                        console.log("Error2");
                    }
                    else {
                        if (graphData.status >= 200 && graphData.status <= 299) {
                            const graphresp = graphData.data;
                            // gData.index = graphresp.i;
                            if (graphresp) {

                                console.log(res.Wallet);
                                if (flag == 1) {
                                    if (res.Wallet >= ((graph[graphresp.i][company][5]) * nos)) {
                                        //do call transaction
                                        const buyStock = await apiBuyStock(company, res.Wallet - ((graph[graphresp.i][company][5]) * nos), nos, config);
                                        if (buyStock === undefined) {
                                            // console.log("Error");
                                            showMessage("Error",'danger')
                                        }
                                        else {
                                            if (buyStock.status >= 200 && buyStock.status <= 299) {
                                                //transaction successful;
                                                // console.log(buyStock.data.message)
                                                showMessage(buyStock.data.message,'success');

                                            }
                                            else if (buyStock.status >= 400 && buyStock.status < 500) {
                                                //about to fill
                                            }
                                            else if (buyStock.status >= 500 && buyStock.status < 600) {
                                                // console.log("Server Side Error");
                                                // console.log(buyStock.data.message)
                                                showMessage(buyStock.data.message,'danger');


                                            }
                                        }
                                    }
                                    else {
                                        // console.log("Insufficient amount");
                                        showMessage("Insufficient amount",'danger');

                                    }
                                }
                                else if (flag == 2) {
                                    if (res[company] >= nos) {
                                        const sellStock = await apiSellStock(company, res.Wallet + ((graph[graphresp.i][company][5]) * nos), nos, config);
                                        if (sellStock === undefined) {
                                            // console.log("Error");
                                            showMessage("Error",'danger')
                                        }
                                        else {
                                            if (sellStock.status >= 200 && sellStock.status <= 299) {
                                                //transaction successful;
                                                // console.log('transaction success')
                                                // console.log(sellStock.data.message)
                                                showMessage(sellStock.data.message,'success')
                                            }
                                            else if (sellStock.status >= 400 && sellStock.status < 500) {
                                                showMessage("Unauthorized Access",'danger')
                                            }
                                            else if (sellStock.status >= 500 && sellStock.status < 600) {
                                                // console.log("Server Side Error");
                                                // console.log(sellStock.data.message)
                                                showMessage(sellStock.data.message,'danger')
                                            }
                                        }
                                    }
                                    else {
                                        // console.log("Insufficient stocks");
                                        showMessage("Insufficient stocks",'danger')

                                    }
                                }

                            }
                        }
                        else if (graphData.status >= 400 && graphData.status < 500) {
                            //about to fill
                        }
                        else if (graphData.status >= 500 && graphData.status < 600) {
                            // console.log("Server Side Error");
                            showMessage("Server Side Error",'danger')
                        }
                    }
                }
                else if (response.status >= 400 && response.status < 500) {
                    showMessage("Unauthorized Access",'danger')
                }
                else if (response.status >= 500 && response.status < 600) {
                    // console.log("Server Side Error");
                    showMessage("Server Side Error",'danger')

                }
            }
        }
    }

    //     var buttonState = 1;
    // console.log(buttonState);
    const buySell = async (flag) => {
        localStorage.setItem('buttonState', flag);
        setModal(!modal);
    };

    const proceedTransaction = (nos) => {
        fetchWallet(localStorage.getItem('buttonState'), nos);
        setModal(!modal);
    }

    const getTime = () => {
        var date = new Date();
        var h = date.getHours();
        var m = date.getMinutes();
        return `${h}:${m}`;
    }

    const getIndex = async () => {
        const graphData = await apiFetchGraphData();
        if (graphData === undefined) {
            console.log("Error2");
        }
        else {
            if (graphData.status >= 200 && graphData.status <= 299) {
                const graphresp = graphData.data;
                if (graphresp) {
                    return graphresp.i;
                    // i = graphresp.i;
                }
            }
            else if (graphData.status >= 400 && graphData.status < 500) {
                //about to fill
            }
            else if (graphData.status >= 500 && graphData.status < 600) {
                // console.log("Server Side Error");
                showMessage("Server Side Error",'danger')
            }
        }
    }


    if (modal) {
        document.body.classList.add('active-modal')
    } else {
        document.body.classList.remove('active-modal')
    }
    var i;

    useEffect(() => {
        //Runs only on the first render
        const setIndex = async () => {
            i = await getIndex();
            localStorage.setItem('index', i);
            console.log(i);
            setModal2(modal2);
        };

        setIndex();
    }, [modal]);


    return (
        <>
            <div className={`${styles.btns}`}>
                <div className={`${styles.lbtn}`}>
                    <Button text='Buy' onClickMethod={() => buySell(1)} color={"#70AD47"} />
                    {/* #00FF01 */}
                </div>
                <div className={`${styles.rbtn}`}>
                    <Button text='Sell' onClickMethod={() => buySell(2)} color={"#C00000"} />
                    {/* #FE0000 */}
                </div>
            </div>

            {modal && (
                <div className={`${styles.modal}`}>
                    <div onClick={() => { setModal(!modal) }} className={`${styles.overlay}`}></div>
                    <div className={`${styles.modalContent}`}>
                        <button className={`${styles.closeModal}`} onClick={() => { setModal(!modal) }}>
                            x
                        </button>
                        <h2>{company}</h2>
                        <table>
                            <tbody>
                                <tr>
                                    <td><label>Price per stock:</label></td>
                                    {/* {console.log(i)} */}
                                    <td>{graph[localStorage.getItem('index')][company][5]}</td>
                                </tr>
                                <tr>
                                    <td><label>Time:</label></td>
                                    <td>{getTime()}</td>
                                </tr>
                                <tr>
                                    <td><label>No. of stocks:</label></td>
                                    <td><input type={"number"} id={`${styles.stocks}`}></input></td>
                                </tr>
                            </tbody>
                        </table>
                        {/* <p>Current price per stock : </p>
                        <p>Time :</p>
                        <p>No. of Stocks :</p> */}
                        <Button text='Proceed' onClickMethod={() => { let n = document.getElementById(`${styles.stocks}`).value; console.log(n); proceedTransaction(n) }} />
                    </div>
                </div>
            )}
        </>
    );
}

export default Modal;