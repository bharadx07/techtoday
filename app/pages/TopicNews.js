import React from "react";
import { View, Text, StyleSheet, ScrollView } from "react-native";
import { v4 as uuidv4 } from "uuid";
import PRIMARY_COLOR from "../constants/PRIMARY_COLOR";
import openURL from "../utils/OpenURL";


const MOCK_NEWS = [
  {
    company: "NY Times",
    date: "Wed Apr 07 2021",
    title: "News Title",
    desc: "hello this si the edesfkdjfldjsdklfjslafsdkljasklfjsdljfldkfslfjd",
    link: "https://youtube.com",
    by: "Bharadwaj Duggaraju"
  },
  {
    company: "NY Times",
    date: "Wed Apr 07 2021",
    title: "News Title",
    desc: "hello this si the edesfkdjfldjsdklfjslafsdkljasklfjsdljfldkfslfjd",
    link: "https://youtube.com",
    by: "Bharadwaj Duggaraju"
  },
  {
    company: "NY Times",
    date: "Wed Apr 07 2021",
    title: "News Title",
    desc: "hello this si the edesfkdjfldjsdklfjslafsdkljasklfjsdljfldkfslfjd",
    link: "https://youtube.com",
    by: "Bharadwaj Duggaraju"
  },
  {
    company: "NY Times",
    date: "Wed Apr 07 2021",
    title: "News Title",
    desc: "hello this si the edesfkdjfldjsdklfjslafsdkljasklfjsdljfldkfslfjd",
    link: "https://youtube.com",
    by: "Bharadwaj Duggaraju"
  },
  {
    company: "NY Times",
    date: "Wed Apr 07 2021",
    title: "News Title",
    desc: "hello this si the edesfkdjfldjsdklfjslafsdkljasklfjsdljfldkfslfjd",
    link: "https://youtube.com",
    by: "Bharadwaj Duggaraju"
  },
  {
    company: "NY Times",
    date: "Wed Apr 07 2021",
    title: "News Title",
    desc: "hello this si the edesfkdjfldjsdklfjslafsdkljasklfjsdljfldkfslfjd",
    link: "https://youtube.com",
    by: "Bharadwaj Duggaraju"
  },
  {
    company: "NY Times",
    date: "Wed Apr 07 2021",
    title: "News Title",
    desc: "hello this si the edesfkdjfldjsdklfjslafsdkljasklfjsdljfldkfslfjd",
    link: "https://youtube.com",
    by: "Bharadwaj Duggaraju"
  },
  {
    company: "NY Times",
    date: "Wed Apr 07 2021",
    title: "News Title",
    desc: "hello this si the edesfkdjfldjsdklfjslafsdkljasklfjsdljfldkfslfjd",
    link: "https://youtube.com",
    by: "Bharadwaj Duggaraju"
  },
  {
    company: "NY Times",
    date: "Wed Apr 07 2021",
    title: "News Title",
    desc: "hello this si the edesfkdjfldjsdklfjslafsdkljasklfjsdljfldkfslfjd",
    link: "https://youtube.com",
    by: "Bharadwaj Duggaraju"
  },
];

const TopicNews = ({ route }) => {
  return (
    <View style={{backgroundColor: "white"}}>
      <Text style={{textAlign: "center", paddingTop: 30}}>{route.params.topicName} News</Text>
    <ScrollView style={styles.wrapper}>
      
      {MOCK_NEWS.map((newsItem) => {
        const company = newsItem.company;
        const date = newsItem.date
        const title = newsItem.title;
        const by = newsItem.by
        const desc = newsItem.desc
        const link = newsItem.link
        return (
          <View key={uuidv4()} style={styles.newsItem}>
            <View>
              <Text>{company}</Text>
              <Text>{date}</Text>
            </View>
            <Text>{title}</Text>
            <Text>{desc}</Text>
            <Text>{by}</Text>
            <Text onPress={() => {
              openURL(link)
            }}>View Full Article</Text>

          </View>
        );
      })}
    </ScrollView>
    </View>
  );
};

const styles = StyleSheet.create({
  wrapper: {
    textAlign: "center",
    marginTop: 10,
    marginBottom: 30,
    backgroundColor: "white"
  },

  newsItem: {
    textAlign: "center",
    backgroundColor: "#f7f7f7",
    marginTop: 20,
    marginLeft: 20,
    marginRight: 20,
  },

  topicImg: {
    height: 200,
    flex: 1,
    width: null,
  },

  topicName: {
    textAlign: "center",
    marginTop: 20,
    fontSize: 30,

  },

  topicDescription: {
    textAlign: "center",
    marginTop: 10,
    paddingLeft: 20,
    paddingRight: 20
  },

  topicBTN: {
    textAlign: "center",
    backgroundColor: PRIMARY_COLOR,
    flex: 1,
    width: null,
    marginTop: 30,
    paddingTop: 10,
    paddingBottom: 10,
    color: "white",
    fontSize: 15
    
  },
});

export default TopicNews;
