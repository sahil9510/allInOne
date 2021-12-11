import React from 'react';

import styles from './FactBox.module.css'

const monthNames = ["Jan", "Feb", "Mar", "Apr", "May", "Jun",
  "Jul", "Aug", "Sep", "Oct", "Nov", "Dec"];

const FactBox=({fact})=>{

    var today = new Date();
    const date = today.getDate() +' ' + monthNames[today.getMonth()] + ' ' + today.getFullYear();

    function formatAMPM(date) {
        var hours = date.getHours();
        var minutes = date.getMinutes();
        var ampm = hours >= 12 ? 'pm' : 'am';
        hours = hours % 12;
        hours = hours ? hours : 12; // the hour '0' should be '12'
        minutes = minutes < 10 ? '0'+minutes : minutes;
        var strTime = hours + ':' + minutes + ' ' + ampm;
        return strTime;
      }
      



    return <div data-aos="fade-right" data-aos-duration="1000" className={styles.box}>
        <h1 className={styles.date}>{date}<span><h4>{formatAMPM(new Date())}</h4></span></h1>

        <h2>Fact for You:</h2>
        <p className={styles.fact}>{fact}</p>
    </div>
}

export default FactBox;