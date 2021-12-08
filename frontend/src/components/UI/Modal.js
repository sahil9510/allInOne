import React from 'react'

import styles from './Modal.module.css'

const Modal = ({closeModal,message,title})=>{
    return <React.Fragment>
        <div className={styles.backdrop} onClick={()=> closeModal()}></div>
        <div className={styles.container}>
            <button className={styles.close} onClick={()=>closeModal()}>X</button>
            <div className={styles.title}>
                <h1>{title ? title : "Something Went Wrong"}</h1>
            </div>
            <div className={styles.body}>
                <p>{message? message : "Something went wrong"}</p>
            </div>
            <div className={styles.footer}>
                <button onClick={()=>closeModal()}>Close</button>
            </div>
        </div>
        </React.Fragment> 
}

export default Modal;