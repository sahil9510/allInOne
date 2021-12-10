import React, { useState } from "react";
import { Link } from "react-router-dom";
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
  
  // setTimeout(
  //   nextSlide()
  //   ,1000);
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
      <img src='logo-big.png' className={styles.logo} />
      <Link to="/auth"><button className={styles.login}>Login/Register</button></Link>
      <div className={styles.welcome}>
        <h1>
          Welcome to <em>sang</em>
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
            {SliderData[currentSlide].title}
        </h2>
        <p>{SliderData[currentSlide].message}</p>
      </div>
      <div className={styles.promotion}>
        <h1>
          Join Us Now
        </h1>
        <Link to="auth">
        <button>
          Login / Register
        </button>
        </Link>
      </div>
    </React.Fragment>
  );
};

export default QuotePage;
