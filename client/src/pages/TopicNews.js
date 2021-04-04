import React, { useEffect, useState } from "react";
import axios from "axios";
import { TopicListURLQueries } from "../constants/TopicInfo";
import NavBar from "../components/NavBar";
import { getNews, requestNews } from "../utils/getNews";
import ClientNewsContent from "../components/ClientNewsContent";

function TopicNews({ match, history }) {
  const [user, setUser] = useState("");
  const [news, setNews] = useState(null);
  const [pagination, setpagination] = useState(1);
  //Simple Check To Speed Up Time (No as Secure)'

  const topicName = match.params.topicname;

  if (!TopicListURLQueries.includes(topicName)) {
    history.push("/404");
  }

  if (!localStorage.jwt) {
    history.push("/login");
  }

  //Secure Check for JWT
  useEffect(() => {
    const makeRequest = async () => {
      const config = {
        headers: {
          "Content-Type": "application/json",
          "auth-token": localStorage.jwt,
        },
      };
      const request = await axios.get("/api/v1/users/auth", config);
      setUser(request?.data);
    };

    makeRequest().catch((error) => {
      if (!error.message.includes("500")) {
        history.push("/login");
      }
    });
  }, [history]);

  useEffect(() => {
    const makeNewsReq = async () => {
      let requestedNews = getNews();
      
      if (requestedNews.haveNews[topicName][pagination]) {
        if (pagination === 1) {
          setNews(requestedNews.news[topicName][pagination].response.docs);
        } else {
          setNews(news => [...news, ...requestedNews.news[topicName][pagination].response.docs]);
        }
      } else {
        requestedNews = await requestNews(
          topicName,
          localStorage.jwt,
          pagination
        );
        if (pagination === 1) {
          setNews(requestedNews.news[topicName][pagination].response.docs);; 
        } else {
          
          setNews(news => [...news, ...requestedNews.news[topicName][pagination].response.docs]);
        }
      }
    };

    makeNewsReq();
  }, [topicName, pagination]);

  return (
    <div>
      <NavBar variant="privateinner" path={topicName} />
      <ClientNewsContent
        user={user}
        news={news}
        page={topicName}
        pagination={pagination}
        setpagination={setpagination}
      />
    </div>
  );
}

export default TopicNews;
