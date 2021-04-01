import React from "react";
import Loader from "react-loader-spinner";
import { v4 as uuidv4 } from "uuid";
import StockNews from "../images/StockNews.jfif";

function ClientNewsContent({ user, news, page }) {
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

  console.log(news);
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
  newsItems = news.response.docs.slice(0, user.newsDefaultCount);

  const IMAGE_STATIC_URI = "https://static01.nyt.com/";

  return (
    <main className="news">
      <h1>{finalpage}</h1>
      <section>
        {newsItems.map((newsItem) => {
          const abstract = newsItem.abstract;
          const author = newsItem.byline.original;
          const dt = newsItem.pub_date;
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
                  <h6>{dt}</h6>
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
    </main>
  );
}

export default ClientNewsContent;
