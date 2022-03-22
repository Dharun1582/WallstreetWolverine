import React, { useState } from "react";
import styles from "./Modal.module.css";
import Button from "../Button/Button";
import graph from "../../../public/data/graph.json";
import { apiGetWallet, apiFetchGraphData } from "../../auth/auth";

function Modal(props) {
    const [modal, setModal] = useState(false);
    const company = props.name;

    const config = {
        headers: {
          authorization: localStorage.getItem("token"),
        },
      };
     
    var buttonState = 1;

    fetchWallet = async (flag, nos) => {
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
                            const index = graphData.data;
                            if (index) {
                                // console.log(res);
                                if (flag === 1) {
                                    if (res.Wallet >= ((graph[index.i][company][5]) * nos)) {
                                        //do call transaction
                                    }
                                    else {
                                        console.log("Insufficient amount");
                                    }
                                }
                                else if (flag === 2) {
                                    if (res[company] >= nos) {
                                        //do call transaction
                                    }
                                    else {
                                        console.log("Insufficient stocks");
                                    }
                                }

                            }
                        }
                        else if (graphData.status >= 400 && graphData.status < 500) {
                            //about to fill
                        }
                        else if (graphData.status >= 500 && graphData.status < 600) {
                            console.log("Server Side Error");
                        }
                    }
                }
                else if (response.status >= 400 && response.status < 500) {
                    //about to fill
                }
                else if (response.status >= 500 && response.status < 600) {
                    console.log("Server Side Error");
                }
            }
        }
    }

    const buySell = (flag) => {
        buttonState = flag;
        setModal(!modal);
    };

    const proceedTransaction = (flag, nos) => {
        fetchWallet(flag,nos);
        setModal(!modal);
    }

    const getTime = () => {
        var date = new Date();
        var h = date.getHours();
        var m = date.getMinutes();
        return `${h}:${m}`;
    }


    if (modal) {
        document.body.classList.add('active-modal')
    } else {
        document.body.classList.remove('active-modal')
    }

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
                    <div onClick={toggleModal} className={`${styles.overlay}`}></div>
                    <div className={`${styles.modalContent}`}>
                        <button className={`${styles.closeModal}`} onClick={toggleModal}>
                            x
                        </button>
                        <h2>{company}</h2>
                        <table>
                            <tr>
                                <td><label>Price per stock:</label></td>
                                <td>{graph[index.i][company][5]}</td>
                            </tr>
                            <tr>
                                <td><label>Time:</label></td>
                                <td>{getTime()}</td>
                            </tr>
                            <tr>
                                <td><label>No. of stocks:</label></td>
                                <td><input type={number} id={`${styles.stocks}`}></input></td>
                            </tr>
                        </table>
                        {/* <p>Current price per stock : </p>
                        <p>Time :</p>
                        <p>No. of Stocks :</p> */}
                        <Button text='Proceed' onClickMethod={() => proceedTransaction(buttonState,)} />
                    </div>
                </div>
            )}
        </>
    );
}

export default Modal;