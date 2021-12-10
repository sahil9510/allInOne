import React, { useEffect, useState } from "react";

import MainPanel from "./MainPanel";
import Panel from "./Panel";
import styles from "./NewsPage.module.css";
import LoadingPage from "../LoadingPage/LoadingPage";
import TwitterTrends from "./TwitterTrends";


const NewsPage = () => {
  const [isLoading,setisLoading]=useState(false);
  const [category,setCategory]=useState("");
  const [news, setNews] = useState([]);

  useEffect(() => {
    const newsReciever = async () => {
      try {
        setisLoading(true);
        const res = await fetch(
          `https://newsapi.org/v2/top-headlines?country=in&${category.length>0?`category=${category}&`: ""}apiKey=${process.env.REACT_APP_NEWS_API_KEY}`
        );
        if (!res.ok) {
          throw new Error("Something went wrong");
        }
        const data = await res.json();
        setNews(data.articles);
      } catch (err) {
        console.log(err);
      }
    };
    newsReciever();
    setisLoading(false);
  }, [category]);

  const genreHandler=(event)=>{
    setCategory(event.target.value);
  }

  if(isLoading || news.length===0){
    return <LoadingPage />
  }
  return (
    <React.Fragment>
        <h1 data-aos="fade-down" data-aos-duration="1000" className={styles.header}>Trending News In India</h1>
        <div className={styles.actions}>
            <span>News Genre: </span>
            <button onClick={genreHandler} value="">General</button>
            <button onClick={genreHandler} value="business">Business</button>
            <button onClick={genreHandler} value="entertainment">Entertainment</button>
            <button onClick={genreHandler} value="health">Health</button>
            <button onClick={genreHandler} value="science">Science</button>
            <button onClick={genreHandler} value="sports">Sports</button>
            <button onClick={genreHandler} value="technology">Technology</button>
        </div>
    <div className={styles.panel}>
      <div data-aos="fade-up"   data-aos-delay="800" data-aos-duration="2000" className={styles.mainNews}>
        <MainPanel title={news[0].title.split('-')[0]} img={news[0].urlToImage} description={news[0].description}/>
      </div>
      <div data-aos="fade-up"   data-aos-delay="1000" data-aos-duration="2000" className={styles.sideNews}>
        <TwitterTrends />
      </div>
      <div data-aos="fade-up"  data-aos-duration="1000" className={`${styles.panelNews1} ${styles.panelNews}`}>
        <Panel title={news[2].title} img={news[2].urlToImage} description={news[2].description}/>
      </div>
      <div  data-aos="fade-up"  data-aos-duration="1000" className={`${styles.panelNews2} ${styles.panelNews}`}>
        <Panel title={news[3].title} img={news[3].urlToImage} description={news[3].description}/>
      </div>
      <div data-aos="fade-up"  data-aos-duration="1000" className={`${styles.panelNews3} ${styles.panelNews}`}>
        <Panel title={news[4].title} img={news[4].urlToImage} description={news[4].description}/>
      </div>
    </div>
    </React.Fragment>
  );
};

export default NewsPage;
