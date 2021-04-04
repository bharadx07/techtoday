import React, {useState, useEffect} from "react";
import Loader from "react-loader-spinner";
import { v4 as uuidv4 } from "uuid";
import StockNews from "../images/StockNews.jfif";

function ClientNewsContent({ user, news, page, pagination, setpagination }) {
  const [buttoncontent, setButtoncontent] = useState("Show More")



  useEffect(() => {
    if(pagination === 3) {
      setButtoncontent("Show Less")

    } else {
      setButtoncontent("Show More")
    }
    
  }, [pagination])

  let newsItems;
  if (!user || !news) {
    return (
      <div
        style={{
          marginTop: "10rem",
          display: "flex",
          justifyContent: "center",
          height: "70vh",
          alignItems: "center",
        }}
      >
        <Loader type="TailSpin" color="#cb4745" height={50} width={50} />
      </div>
    );
  }

  

  let finalpage;
  if (page === "Ai") {
    finalpage = "AI News";
  } else if (page === "vrar") {
    finalpage = "VR/AR News";
  } else {
    finalpage =
      page.substring(0, 1).toUpperCase() +
      page.substring(1, page.length) +
      " News";
  }

  
  
  newsItems = news.slice(0, user.newsDefaultCount*pagination);

  const IMAGE_STATIC_URI = "https://static01.nyt.com/";



  return (
    <main className="news">
      <h1>{finalpage}</h1>
      <section>
        {newsItems.map((newsItem) => {
          const abstract = newsItem.abstract;
          const author = newsItem.byline.original;
          const dt = new Date(newsItem.pub_date);
          const formatted_dt = dt.toDateString()
          const web_url = newsItem.web_url;
          const headline = newsItem.headline.main;

          let image_url =
            newsItem?.multimedia[17]?.url !== undefined
              ? `${IMAGE_STATIC_URI}${newsItem?.multimedia[17]?.url}`
              : StockNews;

          return (
            <article key={uuidv4()}>
              <div>
                <div>
                  <div>
                  <h6>NY Times</h6>
                  <h6>{formatted_dt}</h6>
                  </div>
                  <h2>{headline}</h2>
                  <p>{abstract}</p>
                  <h5>{author}</h5>
                </div>
                <img src={image_url} alt="news"/>

              </div>
              <a href={web_url} target="_blank" rel="noreferrer" className="button">View Full Article</a>
            </article>
          );
        })}
      </section>
      
      <button onClick={() => {pagination === 3 ? setpagination(1) : setpagination(pagination+1)}}>{buttoncontent}</button>
      
    
      

    </main>
  );
}

export default ClientNewsContent;
