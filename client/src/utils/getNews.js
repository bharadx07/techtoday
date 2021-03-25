import axios from "axios";

let news = {};
let haveNews = false;

export const getNews = () => {
  return {
    haveNews,
    news,
  };
};

export const requestNews = async (topic, token) => {
  const req = await axios.post("/api/v1/techtoday/news", null , {
    headers: {
      "auth-token": token
    }
  });
  news[topic] = req.data;
  haveNews = true;

  return {
    haveNews,
    news,
  };
};
