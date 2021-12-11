import React from "react";

import data from './QUOTES.json'
import LoadingSpinner from "./LoadingSpinner";
import styles from './LoadingPage.module.css'

const LoadingPage = ()=>{
    console.log(data.quotes);
    let randomNumber = Math.floor(Math.random()*101);
    const randomQuote = data.quotes[randomNumber];
 return <div>
    <LoadingSpinner />
    <div className={styles.quoteBox}>
    <span><em>"{randomQuote.quote}"</em></span>
    <h4>~{randomQuote.author}</h4>
    </div>
 </div>   
}

export default LoadingPage;