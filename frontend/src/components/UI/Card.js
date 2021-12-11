import React from 'react'

import styles from './Card.module.css';

const Card=({main,children})=>{
    return <div className={`${styles.card} ${main===true ? `${styles.main}`: ""}`}>
        {children}
    </div>
}

export default Card;