import React from "react";
import { View, Text, ScrollView, StyleSheet } from "react-native";
import {
  FontAwesome,
  Entypo,
  Ionicons,
  MaterialCommunityIcons,
} from "@expo/vector-icons";
import PRIMARY_COLOR from "../constants/PRIMARY_COLOR";

const Home = ({ navigation }) => {
  return (
    <ScrollView style={styles.main}>
      <Text style={styles.name}>TechToday</Text>
      <Text style={styles.tagLine}>
        TechToday is the Source for Technology Related News and Jobs in Many
        Industries
      </Text>
      <View style={{ flex: 1, alignItems: "center" }}>
        <Text
          style={styles.tryNow}
          onPress={() => {
            navigation.navigate("Register");
          }}
        >
          Try TechToday Now
        </Text>
      </View>
      <Text style={styles.hub}>Your Personal Hub</Text>
      <Text style={styles.hubTagLine}>
        All the Current Tech Information You Want
      </Text>
      <View>
        <Text style={styles.productTitle}>News</Text>
        <Text style={styles.productTypeDescription}>
          Catch up with all the current events taking place in many industries.
          Learn about the news by reading quick news snippets, or if you are
          instrested, view the full article with one click.
        </Text>
        <FontAwesome name="newspaper-o" size={84} style={styles.icon} />
      </View>
      <View>
        <Text style={styles.productTitle}>Jobs</Text>
        <Text style={styles.productTypeDescription}>
          Wanting to find a job in a certain topic? Check the job section of
          certain field and view the availible jobs near you in that industry
        </Text>
        <Entypo name="briefcase" size={84} style={styles.icon} />
      </View>
      <View style={styles.topics}>
        <Text style={styles.topicsTitle}>Topics</Text>
        <Text style={styles.topicsTagLine}>
          Explore information in Tech, Business and Other Related Fields
        </Text>
        <View style={styles.difTopics}>
          <Entypo name="code" size={64} style={styles.difTopicIcon} />
          <Text style={styles.difTopicName}>Software</Text>
        </View>
        <View>
          <Ionicons
            name="hardware-chip-sharp"
            size={64}
            style={styles.difTopicIcon}
          />
          <Text style={styles.difTopicName}>Hardware</Text>
        </View>
        <View>
          <MaterialCommunityIcons
            name="finance"
            size={64}
            style={styles.difTopicIcon}
          />
          <Text style={styles.difTopicName}>Finance</Text>
        </View>
        <View>
          <Ionicons name="business" size={64} style={styles.difTopicIcon} />
          <Text style={styles.difTopicName}>Business</Text>
        </View>
        <Text
          style={styles.vallTopics}
          onPress={() => {
            navigation.navigate("Login");
          }}
        >
          View All Topics ⇾
        </Text>
      </View>
      <View>
        <Text style={styles.featuresTitle}>Features</Text>
        <View>
          <Text style={styles.featureType}>One Click Away</Text>
          <Text style={styles.featureParagraph}>
            Though you can view quick snippets, and bits of information
            regarding current news, and jobs, you are allways one click way from
            seeing the entire story
          </Text>
        </View>
        <View>
          <Text style={styles.featureType}>Clean User Interface</Text>
          <Text style={styles.featureParagraph}>
            TechToday has a Clean User Interface that allows you to find the
            information you need without trouble or confusion
          </Text>
        </View>
      </View>
      <View style={styles.ctaWrap}>
        <Text style={styles.ctaTitle}>
          Ready to Try <Text style={styles.ctaSpecial}>TechToday</Text>
        </Text>
        <View
          style={{
            flex: 1,
            alignItems: "center",
            marginTop: 10,
            marginBottom: 10,
          }}
          onPress={() => {
            navigation.navigate("Register");
          }}
        >
          <Text
            style={styles.ctaBTN}
            onPress={() => {
              navigation.navigate("Register");
            }}
          >
            Create An Account
          </Text>
        </View>
      </View>
      <View style={styles.footer}>
        <Text style={styles.footerText}>
          &copy; TechToday 2021 | All Rights Reserved
        </Text>
      </View>
    </ScrollView>
  );
};



const styles = StyleSheet.create({
  main: {
    textAlign: "center",
  },

  name: {
    color: PRIMARY_COLOR,
    marginTop: 10,
    textAlign: "center",
    fontSize: 40,
  },

  tagLine: {
    fontSize: 15,
    paddingLeft: 20,
    paddingRight: 20,
    textAlign: "center",
  },

  tryNow: {
    fontWeight: "bold",
    fontSize: 17,
    color: "#fff",
    backgroundColor: PRIMARY_COLOR,
    padding: 10,
    borderRadius: 4,
    textAlign: "center",
    marginTop: 15,
  },

  hub: {
    fontSize: 17,
    color: PRIMARY_COLOR,
    fontWeight: "bold",
    marginTop: 20,
    textAlign: "center",
  },

  hubTagLine: { fontWeight: "normal", marginTop: 5, fontSize: 16, textAlign: "center", },

  productTitle: { fontWeight: "bold", fontSize: 25, marginTop: 10,  textAlign: "center", },

  productTypeDescription: { paddingLeft: 20, paddingRight: 20,  textAlign: "center", },

  icon: { color: PRIMARY_COLOR, marginTop: 15,  textAlign: "center", },

  topics: {
    backgroundColor: "lightgray",
    marginTop: 15,
    textAlign: "center",
  },

  topicsTitle: {
    marginTop: 10,
    fontWeight: "bold",
    fontSize: 25,
    textAlign: "center",
  },

  topicsTagLine: {
    paddingLeft: 20,
    paddingRight: 20,
    marginTop: 10,
    textAlign: "center",
  },

  difTopics: {
    marginTop: 5,
    textAlign: "center",
  },

  difTopicIcon: {
    color: PRIMARY_COLOR,
    textAlign: "center",
  },

  difTopicName: {
    marginTop: 5,
    marginBottom: 10,
    fontSize: 17,
    textAlign: "center",
  },

  vallTopics: {
    marginBottom: 10,
    color: PRIMARY_COLOR,
    fontSize: 17,
    textAlign: "center",
  },

  featuresTitle: {
    marginTop: 20,
    fontWeight: "bold",
    fontSize: 28,
    textAlign: "center",
  },

  featureType: {
    marginTop: 10,
    fontWeight: "bold",
    fontSize: 18,
    textAlign: "center",
  },

  featureParagraph: {
    marginLeft: 10,
    marginRight: 10,
    marginTop: 10,
    textAlign: "center",
  },

  ctaWrap: {
    backgroundColor: "lightgray",
    marginTop: 10,
    textAlign: "center",
  },

  ctaTitle: {
    marginTop: 10,
    fontSize: 17,
    textAlign: "center",
  },

  ctaSpecial: {
    color: PRIMARY_COLOR,
    textAlign: "center",
  },

  ctaBTN: {
    backgroundColor: PRIMARY_COLOR,
    textAlign: "center",
    width: "70%",
    borderRadius: 4,
    paddingTop: 9,
    paddingBottom: 9,
    color: "white",
    fontSize: 14,
  },

  footer: {
    backgroundColor: "black",
    textAlign: "center",
  },

  footerText: {
    color: "white",
    fontSize: 17,
    paddingTop: 10,
    paddingBottom: 10,
    textAlign: "center",
  },
});

export default Home;
