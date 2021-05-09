import React, { useEffect, useState } from "react";
import { View, Text, StyleSheet, ScrollView } from "react-native";
import { v4 as uuidv4 } from "uuid";
import PRIMARY_COLOR from "../constants/PRIMARY_COLOR";
import openURL from "../utils/OpenURL";
import db from "@react-native-async-storage/async-storage";
import axios from "../constants/AxiosClient";
import Spinner from "react-native-loading-spinner-overlay";
import { useIsFocused } from "@react-navigation/native";
import { requestNews, getNews } from "../utils/getNews";
import * as dayjs from "dayjs";

const TopicNews = ({ route, navigation }) => {
  const [news, setNews] = useState(null);
  const [user, setUser] = useState(null);
  const [pagination, setPagination] = useState(1);

  const newsMounted = useIsFocused();
  const topicName = route.params.topicName.toLowerCase()

  useEffect(() => {
    setUser(null);
    const makeRequest = async () => {
      const jwt = await db.getItem("jwt");

      if (jwt) {
        const config = {
          headers: {
            "Content-Type": "application/json",
            "auth-token": jwt,
          },
        };
        const request = await axios.get("/api/v1/users/auth", config);
        setUser(request?.data);
      } else {
        navigation.navigate("Login");
      }
    };
    makeRequest().catch((error) => {
      if (!error.message.includes("500")) {
        navigation.navigate("Login");
      }
    });
  }, [navigation]);

  useEffect(() => {
    const makeNewsReq = async () => {
      const jwt = await db.getItem("jwt")

      console.log("we are here")

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
          jwt,
          pagination
        );
        if (pagination === 1) {
          setNews(requestedNews.news[topicName][pagination].response.docs);
        } else {
          console.log('at this state')
          setNews(news => [...news, ...requestedNews.news[topicName][pagination].response.docs]);
        }
      }
    };

    makeNewsReq();
  }, [pagination]);

  if (!user || !news) {
    return <Spinner visible={true} textContent={""} />;
  }

  const displayNews = news.slice(0, user.newsDefaultCount * pagination);

  return (
    <View style={{ backgroundColor: "white", flex: 1 }}>
      <Text style={styles.topicTitle}>{route.params.topicName} News</Text>
      <ScrollView style={styles.wrapper}>
        {displayNews.map((newsItem) => {
          const company = "NY Times";
          const rud = new Date(newsItem.pub_date.substring(0, 10));
          const date = rud.toDateString();
          const title = newsItem.headline.main;
          const by = newsItem.byline.original ?? "Unknown Author";
          const desc = newsItem.abstract;
          const link = newsItem.web_url;

          if(by === "By") {
            by = "Unknown Author"
          }

          return (
            <View key={uuidv4()} style={styles.newsItem}>
              <View style={styles.stats}>
                <Text style={styles.stat}>{company}</Text>
                <Text style={styles.stat}>{date}</Text>
              </View>
              <Text style={styles.newsTitle}>{title}</Text>
              <Text style={styles.newsDescription}>{desc}</Text>
              <Text style={styles.by}>{by}</Text>
              <Text
                onPress={() => {
                  openURL(link);
                }}
                style={styles.newsBTN}
              >
                View Full Article
              </Text>
            </View>
          );
        })}
        <View style={{ flex: 1, alignItems: "center" }}>
          <Text
            style={styles.showMore}
            onPress={() => {
              if (pagination === 3) {
                setPagination(1);
              } else {
                setPagination(pagination + 1);
              }
            }}
          >
            {pagination === 3 ? "Show Less" : "Show More"}
          </Text>
        </View>
      </ScrollView>
    </View>
  );
};

const styles = StyleSheet.create({
  wrapper: {
    textAlign: "center",
    marginBottom: 30,
    backgroundColor: "white",
  },

  topicTitle: {
    fontSize: 25,
    fontWeight: "bold",
    textAlign: "center",
    paddingTop: 30,
  },

  newsItem: {
    textAlign: "center",
    backgroundColor: "#f7f7f7",
    marginTop: 30,
    marginLeft: 40,
    marginRight: 40,
  },

  stats: {
    flexDirection: "row",
    justifyContent: "space-between",
    marginTop: 10,
    marginRight: 10,
    marginLeft: 20,
    marginRight: 20,
    textAlign: "center",
  },

  stat: {
    fontWeight: "500",
    fontSize: 13,
    textAlign: "center",
  },

  newsTitle: {
    fontSize: 19,
    marginTop: 10,
    fontWeight: "bold",
    paddingLeft: 15,
    paddingRight: 15,
    textAlign: "center",
  },

  newsDescription: {
    textAlign: "center",
    marginTop: 10,
    paddingLeft: 20,
    paddingRight: 20,
    color: "#808080",
    textAlign: "center",
  },

  by: {
    marginTop: 10,
    fontWeight: "500",
    textAlign: "center",
    marginLeft: 10,
    marginRight: 10
  },

  newsBTN: {
    textAlign: "center",
    backgroundColor: PRIMARY_COLOR,
    flex: 1,
    width: null,
    marginTop: 20,
    paddingTop: 10,
    paddingBottom: 10,
    color: "white",
    fontSize: 15,
    textAlign: "center",
  },

  showMore: {
    fontWeight: "bold",
    fontSize: 17,
    color: "#fff",
    backgroundColor: "black",
    padding: 10,
    borderRadius: 4,
    textAlign: "center",
    marginTop: 15,
    marginBottom: 50,
  },
});

export default TopicNews;
