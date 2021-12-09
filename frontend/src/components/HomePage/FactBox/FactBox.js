import React, { useState,useEffect } from 'react';

import styles from './FactBox.module.css'

const monthNames = ["Jan", "Feb", "Mar", "Apr", "May", "Jun",
  "Jul", "Aug", "Sep", "Oct", "Nov", "Dec"];

const FactBox=()=>{
    const [fact,setFact]=useState();
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
      
    console.log(formatAMPM(new Date));
    useEffect(()=>{
        console.log(process.env.REACT_APP_FACT_KEY);
        const getFact = async()=>{
            try{
            const response = await fetch("https://api.api-ninjas.com/v1/facts?limit=1",{
                method: "GET",
                headers: {
                    'X-Api-Key' : 'mp3BdMQeS71KP4reQc91vg==HIwo7HLQnKNYXNRU'
                },
            });

            const data = await response.json();
            console.log(data);
            setFact(data[0].fact);
           }catch(err){
               console.log(err);
           }
        
        }
        getFact();
    },[])


    return <div className={styles.box}>
        <h1 className={styles.date}>{date}<span><h4>{formatAMPM(new Date)}</h4></span></h1>
        
        <h2>Fact for You:</h2>
        <p>{fact}</p>
    </div>
}

export default FactBox;