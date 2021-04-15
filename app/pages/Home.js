import React from "react";
import { View, Text, ScrollView, StyleSheet } from "react-native";


const Home = () => {
  return (
    <ScrollView style={styles.main}>
      <Text style={styles.name}>TechToday</Text>
      <Text>
        TechToday is the Source for Technology Related News and Jobs in Many
        Industries
      </Text>
      <Text>Your Personal Hub</Text>
      <Text>All the Current Tech Information You Want</Text>
      <View> 
        <Text>News</Text>
        <Text>
          Catch up with all the current events taking place in many industries.
          Learn about the news by reading quick news snippets, or if you are
          instrested, view the full article with one click.
        </Text>
        <Text>Icon</Text>
      </View>
      <View>
        <Text>Jobs</Text>
        <Text>
          Wanting to find a job in a certain topic? Check the job section of
          certain field and view the availible jobs near you in that industry
        </Text>
        <Text>Icon</Text>
      </View>
      <View>
        <Text>Topics</Text>
        <Text>
          Explore information in Tech, Buisness and Other Related Fields
        </Text>
        <View>
          <Text>Icon</Text>
          <Text>Software</Text>
        </View>
        <View>
          <Text>Icon</Text>
          <Text>Hardware</Text>
        </View>
        <View>
          <Text>Icon</Text>
          <Text>Finance</Text>
        </View>
        <View>
          <Text>Icon</Text>
          <Text>Buisness</Text>
        </View>
      </View>
      <View>
        <Text>Features</Text>
        <View>
          <Text>One Click Away</Text>
          <Text>
            Though you can view quick snippets, and bits of information
            regarding current news, and jobs, you are allways one click way from
            seeing the entire story
          </Text>
        </View>
        <View>
          <Text>Clean User Interface</Text>
          <Text>TechToday has a Clean User Interface that allows you to find the information you need without trouble or confusion</Text>
        </View>
      </View>
      <View>
        <Text>Ready to Try <Text>TechToday</Text></Text>
        <Text>Create An Account</Text>
      </View>
      <View>
        <Text>&copy; TechToday 2021 | All Rights Reserved</Text> 
      </View>
    </ScrollView>
  );
}; 

const styles = StyleSheet.create({
  main: {
    textAlign: "center",

  },

  name: {
    color: "red",
    margin: "1rem auto"
  }
  
})



export default Home;
 