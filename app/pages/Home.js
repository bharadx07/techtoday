import React from "react";
import { View, Text, ScrollView, StyleSheet } from "react-native";
import {
  FontAwesome,
  Entypo,
  Ionicons,
  MaterialCommunityIcons,
} from "@expo/vector-icons";

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
          Explore information in Tech, Buisness and Other Related Fields
        </Text>
        <View style={styles.difTopics}>
          <Entypo name="code" size={64} style={styles.difTopicIcon} />
          <Text style={styles.difTopicName}>Software</Text>
        </View>
        <View>
          <Ionicons name="hardware-chip-sharp" size={64} style={styles.difTopicIcon} />
          <Text style={styles.difTopicName}>Hardware</Text>
        </View>
        <View>
          <MaterialCommunityIcons name="finance" size={64} style={styles.difTopicIcon} />
          <Text style={styles.difTopicName}>Finance</Text>
        </View>
        <View>
          <Ionicons name="business" size={64} style={styles.difTopicIcon} />
          <Text style={styles.difTopicName}>Buisness</Text>
        </View>
        <Text style={styles.vallTopics}>View All Topics ⇾</Text>
      </View>
      <View>
        <Text style={styles.featuresTitle}>Features</Text>
        <View style={styles.featureType}>
          <Text>One Click Away</Text>
          <Text>
            Though you can view quick snippets, and bits of information
            regarding current news, and jobs, you are allways one click way from
            seeing the entire story
          </Text>
        </View>
        <View style={styles.featureType}>
          <Text>Clean User Interface</Text>
          <Text>
            TechToday has a Clean User Interface that allows you to find the
            information you need without trouble or confusion
          </Text>
        </View>
      </View>
      <View>
        <Text>
          Ready to Try <Text>TechToday</Text>
        </Text>
        <Text>Create An Account</Text>
      </View>
      <View>
        <Text>&copy; TechToday 2021 | All Rights Reserved</Text>
      </View>
    </ScrollView>
  );
};

const PRIMARY_COLOR = "#cb4745";

const styles = StyleSheet.create({
  main: {
    textAlign: "center",
  },

  name: {
    color: PRIMARY_COLOR,
    marginTop: "1rem",
    fontSize: "40px",
  },

  tagLine: {
    fontSize: "1rem",
    paddingLeft: 20,
    paddingRight: 20,
  },

  tryNow: {
    fontWeight: "bold",
    fontSize: "17px",
    cursor: "pointer",
    border: "none",
    outline: "none",
    color: "#fff",
    backgroundColor: PRIMARY_COLOR,
    padding: 10,
    borderRadius: "4px",
    textAlign: "center",
    marginTop: "1rem",
  },

  hub: {
    fontSize: "1rem",
    color: PRIMARY_COLOR,
    fontWeight: "bold",
    marginTop: 20,
  },

  hubTagLine: { fontWeight: "normal", marginTop: 5, fontSize: 16 },

  productTitle: { fontWeight: "bold", fontSize: 25, marginTop: 10 },

  productTypeDescription: { paddingLeft: 20, paddingRight: 20 },

  icon: { color: PRIMARY_COLOR, marginTop: 15 },

  topics: {
    backgroundColor: "lightgray",
    marginTop: 15,
  },

  topicsTitle: {
    marginTop: 10,
    fontWeight: "bold",
    fontSize: 25,
  },

  topicsTagLine: {
    paddingLeft: 20,
    paddingRight: 20,
    marginTop: 10,
  },

  difTopics: {
    marginTop: 5,
  },

  difTopicIcon: {
    color: PRIMARY_COLOR,
  },

  difTopicName: {
    marginTop:5,
    marginBottom: 10,
    fontSize: 20,
     
  },

  vallTopics: {
    marginBottom: 10,
    color: PRIMARY_COLOR,
    fontSize: 20

  },

  featuresTitle: {
    marginTop: 20,
    fontWeight: "bold",
    fontSize: 28
  },

  featureType: {},

  featureParagraph: {},

  ctaWrap: {},

  ctaTitle: {},

  ctaSpecial: {},

  ctaBTN: {},

  footer: {},

  footerText: {},
});

export default Home;
