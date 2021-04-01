import axios from "axios";

let news = {};
let haveNews = {};

export const getNews = () => {
  return {
    haveNews,
    news,
  };
};

export const requestNews = async (topic, token) => {
  let reqtopic;
  switch (topic) {
    case "programming":
      reqtopic = "Technology";

      break;
    case "hardware":
      reqtopic = "Personal Tech";

      break;
    case "buisness":
      reqtopic = "Business";

      break;
    case "finance":
      reqtopic = "Financial";

      break;
    case "medical":
      reqtopic = "Health";

      break;
    case "auto":
      reqtopic = "Automobiles";

      break;
    case "travel":
      reqtopic = "Planes";

      break;
    case "retail":
      reqtopic = "Retail";

      break;

    default:
      break;
  }
  const req = await axios.post(`/api/v1/techtoday/news/${reqtopic}`, null, {
    headers: {
      "auth-token": token,
    },
  });
  news[topic] = req.data;
  haveNews[topic] = true;

  return {
    haveNews,
    news,
  };
};
