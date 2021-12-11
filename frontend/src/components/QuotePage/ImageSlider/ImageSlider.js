import React from "react";

import styles from "./ImageSlider.module.css";
import { ArrowCircleLeft, ArrowCircleRight} from "@mui/icons-material";
import { SliderData } from "./SliderData";

const ImageSlider = ({prevSlide,nextSlide,currentSlide,changeSlide,}) => {
  const length= SliderData.length;
  let prev,next;

  if(currentSlide===length-1){
      next=0;
      prev=currentSlide-1;
  }else if(currentSlide===0){
      next=currentSlide+1;
      prev=length-1;
  }else{
      next=currentSlide+1;
      prev=currentSlide-1;
  }




  return (<>
      <div className={styles.adjacent}>
      <img  src={SliderData[prev].image} alt="Alt" className={`${styles.image} ${styles.prevSlide}`} />
      </div>
      <div className={styles.adjacent}>
      <img src={SliderData[next].image} alt="Alt" className={`${styles.image} ${styles.nextSlide}`} />
      </div>
    <div className={styles.slider}>
      <ArrowCircleLeft className={styles[`left-arrow`]} onClick={prevSlide} />
      <ArrowCircleRight className={styles[`right-arrow`]} onClick={nextSlide} />
      {SliderData.map((slide, index) => {
        return (
          <div
            className={`${
              index === currentSlide
                ? `${styles[`slide-active`]}`
                : `${styles[`slide`]}`
            }`}
            key={index}
          >
            {index === currentSlide && (
              <img src={slide.image} alt="Alt" className={styles.image} />
            )}
          </div>
        );
      })}
    </div>
    <div className={styles.points}>
        {SliderData.map((circle,index)=>{
            if(index===currentSlide){
                return <div key={index} className={styles.pointer} style={{backgroundColor:"#781d42"}}/>
            }else{
                return <div key={index} id={index} onClick={changeSlide} className={styles.pointer}/>
            }
        })}
    </div>
    
    </>
  );
};

export default ImageSlider;
