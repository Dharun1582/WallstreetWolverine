import React, { useState } from "react";
import styles from "./Modal.module.css";
import Button from "../Button/Button";

function Modal(props) {
    const [modal, setModal] = useState(false);
    const company = props.name;

    const toggleModal = () => {
        setModal(!modal);
    };

    if (modal) {
        document.body.classList.add('active-modal')
    } else {
        document.body.classList.remove('active-modal')
    }

    return (
        <>
            <div className={`${styles.btns}`}>
                <div className={`${styles.lbtn}`}>
                    <Button text='Buy' onClickMethod={toggleModal} color={"#70AD47"}/>
                    {/* #00FF01 */}
                </div>
                <div className={`${styles.rbtn}`}>
                    <Button text='Sell' onClickMethod={toggleModal} color={"#C00000"}/>
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
                        <h2>Company</h2>
                        <p>Current price per stock : </p>
                        <p>Time :</p>
                        <p>No. of Stocks :</p>
                        <Button text='Proceed' onClickMethod={toggleModal} />
                    </div>
                </div>
            )}
        </>
    );
}

export default Modal