import React,{useEffect, useState} from "react";

import styles from "./HomePage.module.css";
import CovidBox from "./CovidBox";
import NewsBox from "./NewsBox";
import FactBox from "./FactBox/FactBox";
import LoadingPage from '../LoadingPage/LoadingPage';

const HomePage = () => {
  const [isLoading,setIsLoading]=useState(false);
  const [fact,setFact] = useState();
  const [news,setNews]=useState([]);
  useEffect(()=>{
    console.log(process.env.REACT_APP_FACT_KEY);
    const getFact = async()=>{
      setIsLoading(true);
        try{
        const response = await fetch("https://api.api-ninjas.com/v1/facts?limit=1",{
            method: "GET",
            headers: {
                'X-Api-Key' : 'mp3BdMQeS71KP4reQc91vg==HIwo7HLQnKNYXNRU'
            },
        });

        const data = await response.json();
        console.log(data);
        setFact(data[0].fact);

        const newsReciever = async () => {
          try {
            const res = await fetch(
              "https://newsapi.org/v2/top-headlines?country=in&apiKey=a22d2850319248e481b194572fe2fbd5"
            );
            if (!res.ok) {
              throw new Error("Something went wrong");
            }
            const data = await res.json();
            setNews(data.articles);
            console.log(data.articles);
          } catch (err) {
            console.log(err);
          }
          setIsLoading(false);
        };
        newsReciever();
    }catch(err){
        console.log(err);
    }
}
getFact();
},[])


  if(isLoading){
    return <LoadingPage />
  }

  return (
    <div className={styles.homeScreen}>
        <h1>Welcome</h1>
      <div className={styles.row1}>
        <FactBox fact={fact} />
        {/* <Graph /> */}
        <CovidBox />
      </div>
      <div className={styles.row2}>
        <NewsBox news={news[0]} />
      </div>
      <div className={styles.row3}>
        <NewsBox news={news[1]} />
      </div>
    </div>
  );
};

export default HomePage;
