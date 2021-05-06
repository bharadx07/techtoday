import React, { useEffect, useState } from "react";
import { ScrollView, Text, Image, View, StyleSheet } from "react-native";
import TopicsInfo from "../constants/TopicInfo";
import { v4 as uuidv4 } from "uuid";
import PRIMARY_COLOR from "../constants/PRIMARY_COLOR";
import db from "@react-native-async-storage/async-storage";
import axios from "../constants/AxiosClient";
import Spinner from "react-native-loading-spinner-overlay";
import { useIsFocused } from "@react-navigation/native";

const Topics = ({ navigation, setCurrentTopic }) => {
  const [user, setUser] = useState(null);

  const makeRequest = async () => {
    const jwt = await db.getItem("jwt");
    setUser(null);

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

  const isFocused = useIsFocused();

  useEffect(() => {
    makeRequest().catch((error) => {
      if (!error.message.includes("500")) {
        navigation.navigate("Login");
      }
    });
  }, [navigation, isFocused]);

  if (!user) {
    return <Spinner visible={true} textContent={""} />;
  }

  return (
    <View style={{flex: 1, backgroundColor: "white"}}>
    <ScrollView style={styles.wrapper}>
      {user.topics.map((topic) => {
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
              onPress={() => {
                navigation.navigate("News", { topicName: topic });
                setCurrentTopic(topic);
              }}
              style={styles.topicBTN}
            >
              Explore
            </Text>
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
    marginTop: 0,
    marginBottom: 30,
    backgroundColor: "white",
  },

  topicItem: {
    textAlign: "center",
    backgroundColor: "#f7f7f7",
    marginTop: 35,
    marginLeft: 35,
    marginRight: 35,
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
    fontWeight: "500",
  },

  topicDescription: {
    textAlign: "center",
    marginTop: 10,
    paddingLeft: 20,
    paddingRight: 20,
    fontWeight: "500",
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
    fontSize: 15,
  },
});

export default Topics;
