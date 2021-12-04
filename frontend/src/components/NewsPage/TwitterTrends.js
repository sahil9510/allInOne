import React from "react";

import Trend from "./Trend";
import styles from "./TwitterTrends.module.css";

const TwitterTrends = () => {
  return (
    <div className={styles.twitterBox}>
      <div className={styles.heading}>
          <span>
            <img src="twitter-logo.png" alt="Twitter Logo" />
          </span>
        <h1>
          trends
        </h1>
      </div>
      <hr />
      <Trend text="TheNewWorldOrder"/>
      <Trend text="TadapHouseFull"/>
      <Trend text="Hotspot"/>
      <Trend text="CCTV"/>
      <Trend text="omicron"/>
    </div>
  );
};

export default TwitterTrends;
