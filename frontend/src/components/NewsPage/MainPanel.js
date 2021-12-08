import React from 'react'

import Card from '../UI/Card';
import styles from './MainPanel.module.css';
const MainPanel = ({img,title,description})=>{
    return <Card main>
        <img className={styles.main} src={img} alt={title}/>
        <div className={styles.text}>
            <h6 className={styles.h6}>{title}</h6>
            <p>{description}</p>
        </div>
    </Card>
}

export default MainPanel;