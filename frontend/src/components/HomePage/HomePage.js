import React from "react";

import styles from "./HomePage.module.css";
import Graph from "./Graph";
import CovidBox from "./CovidBox";
import NewsBox from "./NewsBox";

const HomePage = () => {
  return (
    <div className={styles.homeScreen}>
        <h1>Welcome</h1>
      <div className={styles.row1}>
        <Graph />
        <CovidBox />
      </div>
      <div className={styles.row2}>
        <NewsBox />
      </div>
    </div>
  );
};

export default HomePage;
