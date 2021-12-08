import React, { useState } from "react";
import { SliderData } from "./ImageSlider/SliderData";
import styles from "./QuotePage.module.css";
import ImageSlider from "./ImageSlider/ImageSlider";
const QuotePage = () => {
  const [currentSlide, setCurrentSlide] = useState(0);
  const length = SliderData.length;

  const nextSlide = () => {
    setCurrentSlide((current) => {
      if (current === length - 1) {
        return 0;
      }
      return current + 1;
    });
  };

  const prevSlide = () => {
    setCurrentSlide((current) => {
      if (current === 0) {
        return length - 1;
      }
      return current - 1;
    });
  };

  const changeSlide = (e) => {
    console.log(e.target.id);
    setCurrentSlide(+e.target.id);
  };

  return (
    <React.Fragment>
      <h1 className={styles.logo}>Logo</h1>
      <button className={styles.login}>Login/Register</button>
      <div className={styles.welcome}>
        <h1>
          Welcome to ...
        </h1>
        <h4>
          A personalised website according to all your needs. 
        </h4>
      </div>
      <div>
        <ImageSlider
          currentSlide={currentSlide}
          nextSlide={nextSlide}
          prevSlide={prevSlide}
          changeSlide={changeSlide}
        />
      </div>
      <div className={styles.info}>
        <h2>
            Covid Tracker
        </h2>
        <p>Know about the Daily cases and everything related to covid news daily in India and its states</p>
      </div>
      <div className={styles.promotion}>
        <h1>
          Join Us Now
        </h1>
        <button>
          Login / Register
        </button>
      </div>
    </React.Fragment>
  );
};

export default QuotePage;
