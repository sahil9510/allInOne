import React, {useRef, useState } from "react";

import styles from "./ParaphrasingPage.module.css";

let category="Simple";
const ParaphrasingPage = () => {
    const [checked,setChecked]=useState('Simple');
    const [paraPhrased,setParaphrased]=useState();
    const textRef = useRef();
    

  const categoryHandler=(event)=>{
    category=event.target.value;
    setChecked(category);
    console.log(category);
  }

  const getPara = async (text) => {
    try {
      const res = await fetch(
        "https://www.prepostseo.com/apis/checkparaphrase",
        {
          body: `key=a5af984415a6afa48693ad4442a55016&data=${text}&lang=en&mode=${category}`,
          headers: {
            "Content-Type": "application/x-www-form-urlencoded",
          },
          method: "POST",
        }
      );
      const data = await res.json();
      setParaphrased(data.paraphrasedContent);
    } catch (err) {
      console.log(err);
    }
  };


  const clickHandler=()=>{
      getPara(textRef.current.value)
  }

  return (
    <div className={styles.page}>
      <div data-aos="fade-down" data-aos-duration="1500" className={styles.heading}>
        <h1>Paraphraser</h1>
        <p><em>Sang</em> paraphraser can rephrase any text in a variety of different ways, guaranteeing you find the perfect language, tone, and style for any occasion.</p>
      </div>
      <div  className={styles.category}>
        <h6>Phrasing Mode:</h6>
        <div className={styles.point}>
        <label ><input value="Simple" name="category" type="radio" onChange={categoryHandler} checked={checked==='Simple'}/> Simple </label>
        </div> 
        <div className={styles.point}>
        <label><input value="Advanced" name="category" type="radio" onChange={categoryHandler} checked={checked==='Advanced'}/> Advanced</label>
        </div>
        <div className={styles.point}>
        <label><input value="Fluency" name="category" type="radio" onChange={categoryHandler} checked={checked==='Fluency'}/> Fluency</label>
        </div>
        <div className={styles.point}>
        <label><input value="Creative" name="category" type="radio" onChange={categoryHandler} checked={checked==='Creative'}/> Creative</label>
        </div>
      </div>
      <div data-aos="fade-up" data-aos-duration="1500" className={styles.content}>
        <span className={styles.inputSpan}>Input</span>
        <textarea className={styles.textarea} ref={textRef} placeholder="Start by writing or pasting something here and then press the convert button."/>
        <button onClick={clickHandler}>Convert</button>
        <span className={styles.outputSpan}>Output</span>
        {/* <textarea className={`${styles.textarea} ${styles.output}`} readOnly placeholder="This box will contain the paraphrased text" value={paraPhrased}/> */}
        <div className={styles.textarea} dangerouslySetInnerHTML={paraPhrased? {__html: paraPhrased} : {__html: "This box will contain the paraphrased text"}}/>
      </div>
    </div>
  );
};

export default ParaphrasingPage;
