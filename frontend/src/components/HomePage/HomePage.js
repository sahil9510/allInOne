import React from "react";

import styles from "./HomePage.module.css";
import CovidBox from "./CovidBox";
import NewsBox from "./NewsBox";
import FactBox from "./FactBox/FactBox";

const HomePage = () => {
  return (
    <div className={styles.homeScreen}>
        <h1>Welcome</h1>
      <div className={styles.row1}>
        <FactBox />
        {/* <Graph /> */}
        <CovidBox />
      </div>
      <div className={styles.row2}>
        <NewsBox />
      </div>
    </div>
  );
};

export default HomePage;
