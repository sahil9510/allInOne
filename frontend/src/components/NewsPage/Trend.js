import React from "react";


import styles from './Trend.module.css'
const Trend = ({text})=>{
    return <div className={styles.trend}>
        <h5>#{text}</h5>
    </div>
}

export default Trend;