import axios from "axios";

let news = {programming: {}, hardware: {},finance: {},business: {},medical: {},auto: {},travel: {},retail: {}};
let haveNews = {programming: {}, hardware: {},finance: {},business: {},medical: {},auto: {},travel: {},retail: {}};

export const getNews = () => {
  return {
    haveNews,
    news,
  };
};

export const requestNews = async (topic, token, page) => {
  let reqtopic;
  switch (topic) {
    case "programming":
      reqtopic = "Technology";

      break;
    case "hardware":
      reqtopic = "Personal Tech";

      break;
    case "business":
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
  const req = await axios.post(`/api/v1/techtoday/news/${reqtopic}/${page}`, null, {
    headers: {
      "auth-token": token,
    },
  });

  
  news[topic][page] = req.data;
  haveNews[topic][page] = true;


  return {
    haveNews,
    news,
  };
};
