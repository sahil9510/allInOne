import React from 'react'

import styles from './NewsBox.module.css'

const NewsBox =({news})=>{
    if(!news){
        return <p>Loading..</p>
    }

    return <div data-aos="fade-up" data-aos-duration="1000" className={styles.newsBox}>
        <div className={styles.imageBox}>
        <img src={news.urlToImage} alt="news"/>
        </div>
        <div className={styles.content}>
        <h2>{news.title.split('-')[0]}</h2>
        <h5>Author: </h5>
        <p>{news.author}</p>
        <h6>{news.description}</h6>
        </div>
    </div>
}

export default NewsBox