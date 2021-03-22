import React, { useEffect, useState } from "react";
import axios from "axios";
import { Link } from "react-router-dom";
import { getNews, requestNews } from "../utils/getNews";

function TopicNews({ match, history }) {
  const [user, setUser] = useState("");
  //Simple Check To Speed Up Time (No as Secure)

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
    let news = getNews();
    console.log(news);
    news = requestNews(match.params.topicname);
    news.then((x) => {
      console.log(x);
    });
  }, [match.params.topicname]);

  const topicName = match.params.topicname;
  return (
    <div>
      news
      <div>{topicName}</div>
      <Link to="/topics">test persist</Link>
    </div>
  );
}

export default TopicNews;
