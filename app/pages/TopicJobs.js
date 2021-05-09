import React, {useEffect, useState} from "react";
import { View, Text, StyleSheet, ScrollView } from "react-native";
import { v4 as uuidv4 } from "uuid";
import PRIMARY_COLOR from "../constants/PRIMARY_COLOR";
import openURL from "../utils/OpenURL";
import db from "@react-native-async-storage/async-storage";
import axios from "../constants/AxiosClient";
import Spinner from "react-native-loading-spinner-overlay";
import { useIsFocused } from "@react-navigation/native";
import { requestNews } from "../utils/getNews";
import * as dayjs from "dayjs"
import { TopicListURLQueries } from "../constants/TopicInfo";

const jobs_cache = {}

const TopicJobs = ({route, navigation}) => {
  const [user, setUser] = useState(null)
  const [jobs, setJobs] = useState(null)
  const [pagination, setPagination] = useState(1)

  const jobsMounted = useIsFocused()
  const jobTopic = route.params.topicName
 

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

    const makeJobsReq = async () => { 
      const jwt = await db.getItem("jwt")
      const res = await axios.post(`/api/v1/techtoday/jobs/${jobTopic}`, null, {
        headers: {
          "auth-token": jwt,
        },
      });

      setJobs(res.data);

      jobs_cache[jobTopic] = res.data;


    };



    if (jobs_cache[jobTopic] === undefined) {
      makeJobsReq().catch(err => {
        if(err) {
          console.log(err.response.message)
          navigation.navigate("Login")
        }
      });
    } else {
      setJobs(jobs_cache[jobTopic])
    }


  }, [jobTopic, navigation]);

  if(!TopicListURLQueries.includes(jobTopic.toLowerCase())) {
    navigation.navigate("Login")
  }

  if(!jobs || !user) {
    return <Spinner textContent={""} visible={true} />
  } 


  const displayJobs = jobs.results.slice(0, user.jobDefaultCount*pagination)


  

  return (
    <View style={{ backgroundColor: "white", flex: 1 }}>
      <Text style={styles.topicTitle}>{route.params.topicName} Jobs</Text>
      <ScrollView style={styles.wrapper}>
        {displayJobs.map((jobItem) => {
          const company = jobItem.company.display_name;
          const location =jobItem.location.display_name;
          const title = jobItem.title;
          const desc = jobItem.description;
          const link = jobItem.redirect_url;

          return (
            <View key={uuidv4()} style={styles.newsItem}>
              <View style={styles.stats}>
                <Text style={styles.stat}>{company}</Text>
                <Text style={styles.stat}>{location}</Text>
              </View>
              <Text style={styles.newsTitle}>{title.replace(/<\/?[^>]+(>|$)/g, "")}</Text>
              <Text style={styles.newsDescription}>{desc.substring(0, 200).replace(/<\/?[^>]+(>|$)/g, "") + "..."}</Text>
              <Text
                onPress={() => {
                  openURL(link);
                }}
                style={styles.newsBTN}
              >
                View Full Job
              </Text>
            </View>
          );
        })}
        <View style={{ flex: 1, alignItems: "center" }}>
          <Text
            style={styles.showMore}
            onPress={() => {
              if(pagination === 3) {
                setPagination(1)
              } else {
                setPagination(pagination+1) 
              }
            }}
          >
            {pagination === 3 ? "Show Less" :"Show More"}
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
    marginLeft: 30,
    marginRight: 30,
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
    fontSize: 8,
    textAlign: "center",
    fontWeight: "bold"
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

export default TopicJobs;
