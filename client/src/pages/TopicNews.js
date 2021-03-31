import React, { useEffect, useState } from "react";
import axios from "axios";
import { TopicListURLQueries } from "../constants/TopicInfo";
import NavBar from "../components/NavBar";

import { getNews, requestNews } from "../utils/getNews";
import ClientNewsContent from "../components/ClientNewsContent";

function TopicNews({ match, history }) {
  const [user, setUser] = useState("");
  const [news, setNews] = useState(null);
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
    let news = getNews();
    if (news.haveNews[topicName]) {
      setNews(news.news[topicName]);
    } else {
      news = await requestNews(topicName, localStorage.jwt);
      setNews(news.news[topicName])
    } }

    makeNewsReq()

  }, [topicName]);

  return (
    <div>
      <NavBar variant="privateinner" path={topicName} />
      <ClientNewsContent user={user} news={news} page={topicName} />
      
    </div>
  );
}

export default TopicNews;
