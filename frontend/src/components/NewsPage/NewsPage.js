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
      setisLoading(false);
    };
    newsReciever();
  }, [category]);

  const genreHandler=(event)=>{
    setCategory(event.target.value);
  }

  if(isLoading || news.length===0){
    return <LoadingPage />
  }

  return (
    <React.Fragment>
        <h1 className={styles.header}>Trending News</h1>
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
      <div className={styles.mainNews}>
        <MainPanel title={news[0].title} img={news[0].urlToImage} description={news[0].content}/>
      </div>
      <div className={styles.sideNews}>
        <TwitterTrends />
      </div>
      <div className={`${styles.panelNews1} ${styles.panelNews}`}>
        <Panel title={news[2].title} img={news[2].urlToImage} description={news[2].content}/>
      </div>
      <div className={`${styles.panelNews2} ${styles.panelNews}`}>
        <Panel title={news[3].title} img={news[3].urlToImage} description={news[3].content}/>
      </div>
      <div className={`${styles.panelNews3} ${styles.panelNews}`}>
        <Panel title={news[4].title} img={news[4].urlToImage} description={news[4].content}/>
      </div>
    </div>
    </React.Fragment>
  );
};

export default NewsPage;
