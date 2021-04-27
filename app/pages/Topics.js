import React from "react";
import { ScrollView, Text, Image, View, StyleSheet } from "react-native";
import TopicsInfo from "../constants/TopicInfo";
import { v4 as uuidv4 } from "uuid";
import PRIMARY_COLOR from "../constants/PRIMARY_COLOR";

const MOCK_TOPICS = [
  "Programming",
  "Hardware",
  "Finance",
  "Business",
  "Auto",
  "Medical",
  "Travel",
  "Retail",
];

const Topics = ({ navigation }) => {
  return (
    <ScrollView style={styles.wrapper}>
      {MOCK_TOPICS.map((topic) => {
        return (
          <View key={uuidv4()} style={styles.topicItem}>
            <Image
              source={{ uri: TopicsInfo[topic].img }}
              style={styles.topicImg}
            />

            <Text style={styles.topicName}>{TopicsInfo[topic].name}</Text>
            <Text style={styles.topicDescription}>
              {TopicsInfo[topic].description}
            </Text>
            <Text
              onPress={() => navigation.navigate("News", { topicName: topic })}
              style={styles.topicBTN}
            >
              Explore
            </Text>
          </View>
        );
      })}
    </ScrollView>
  );
};

const styles = StyleSheet.create({
  wrapper: {
    textAlign: "center",
    marginTop: 0,
    marginBottom: 30,
    backgroundColor: "white"
  },

  topicItem: {
    textAlign: "center",
    backgroundColor: "#f7f7f7",
    marginTop: 35,
    marginLeft: 35,
    marginRight: 30,
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
    fontWeight: "500"

  },

  topicDescription: {
    textAlign: "center",
    marginTop: 10,
    paddingLeft: 20,
    paddingRight: 20,
    fontWeight: "500"
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

export default Topics;
