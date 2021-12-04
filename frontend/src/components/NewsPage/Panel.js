import React from "react";

import styles from "./Panel.module.css";
import Card from "../UI/Card";

const Panel = ({ img, title, description }) => {
  return (
    <Card>
      <img className={styles.img}src={img} alt={title} />
      <div className={styles.overlay}>
        <h4 className={styles.text}>{title}</h4>
        {/* <p className={styles.text}>{description}</p> */}
      </div>
    </Card>
  );
};

export default Panel;
