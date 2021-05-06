import React, { useState, useEffect } from "react";
import {
  View,
  Text,
  TextInput,
  StyleSheet,
  TouchableHighlight,
  ScrollView,
  Alert,
} from "react-native";
import { Formik } from "formik";
import PRIMARY_COLOR from "../constants/PRIMARY_COLOR";
import openURL from "../utils/OpenURL";
import { TopicsList } from "../constants/TopicInfo";
import { v4 as uuidv4 } from "uuid";
import BouncyCheckbox from "react-native-bouncy-checkbox";
import db from "@react-native-async-storage/async-storage";
import axios from "../constants/AxiosClient";
import Spinner from "react-native-loading-spinner-overlay";

const Settings = ({ navigation }) => {
  const [user, setUser] = useState(null);
  const [changePasswordToken, setChangePasswordToken] = useState("");
  const [profileSuccess, setProfileSuccess] = useState(false);
  const [prefSuccess, setPrefSuccess] = useState(false);

  useEffect(() => {
    const getPassToken = async () => {
      const jwt = await db.getItem("jwt");

      const req = await axios.get(
        "/api/v1/users/change-password-internal-get-token",
        { headers: { "auth-token": jwt } }
      );

      setChangePasswordToken(req.data);
    };

    getPassToken();
  }, []);

  useEffect(() => {
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

  const handleDeleteAccount = () => {
    Alert.alert(
      "Are you sure?",
      "If you delete you account, you cannot retirve it!",
      [
        {
          text: "Cancel",
          style: "cancel",
        },
        {
          text: "OK",
          onPress: async () => {
            const jwt = await db.getItem("jwt");

            await axios.delete("/api/v1/users/delete-account", {
              headers: { "auth-token": jwt },
            });

            await db.removeItem("jwt");

            navigation.navigate("Home");
          },
        },
      ]
    );
  };

  if (!user) {
    return <Spinner visible={true} textContent={""} />;
  }

  return (
    <ScrollView style={{ backgroundColor: "white" }}>
      <View style={styles.mainSettingsWrapper}>
        <Text style={styles.topSettings}>Account Settings</Text>

        <Formik
          initialValues={{ email: "", name: "" }}
          validateOnChange={false}
          validateOnSubmit={true}
          validateOnBlur={false}
          validate={async (values) => {
            const errors = {};

            const chooseRedirect = (errorstatus) => {
              if (errorstatus === 403 || errorstatus === 401) {
                navigation.navigate("Login");
              }
            };

            const jwt = await db.getItem("jwt");

            const commonauthconfig = {
              headers: {
                "Content-Type": "application/json",
                "auth-token": jwt,
              },
            };

            let newname = user?.name;
            let newemail = user?.email;

            let succeeded = true;

            try {
              if (values.name !== "") {
                const res = await axios.put(
                  "/api/v1/users/change-name",
                  { newname: values.name },
                  commonauthconfig
                );

                newname = res.data;
              }
            } catch (error) {
              console.log(error.response.data);
              chooseRedirect(error.response.status);
              setProfileSuccess(false);
              errors.name = error.response.data.message;
              succeeded = false;
            }

            try {
              if (values.email !== "") {
                const response = await axios.put(
                  "/api/v1/users/change-email",
                  { newemail: values.email },
                  commonauthconfig
                );

                newemail = response.data;
              }
            } catch (error) {
              chooseRedirect(error.response.status);
              setProfileSuccess(false);
              errors.email = error.response.data;
              succeeded = false;
            }

            if (succeeded) {
              setProfileSuccess(true);
            }

            setUser({ ...user, name: newname, email: newemail });

            return errors;
          }}
          onSubmit={async (values, { resetForm }) => {
            resetForm();
          }}
        >
          {({ handleChange, handleBlur, handleSubmit, values, errors }) => (
            <View style={styles.formWrapper}>
              <View style={styles.form}>
                <Text style={styles.welcome}>Profile</Text>
                <Text style={styles.label}>Your Name</Text>
                <TextInput
                  onChangeText={handleChange("name")}
                  onBlur={handleBlur("name")}
                  value={values.name}
                  style={styles.input}
                  placeholder={user.name}
                />
                {errors.name && <Text style={styles.error}>{errors.name}</Text>}
                <Text style={styles.label}>Your Email</Text>
                <TextInput
                  onChangeText={handleChange("email")}
                  onBlur={handleBlur("email")}
                  value={values.email}
                  style={styles.input}
                  placeholder={user.email}
                />
                {errors.email && (
                  <Text style={styles.error}>{errors.email}</Text>
                )}
                <Text
                  style={{ marginTop: 10, textAlign: "left", color: "#cb4745" }}
                  onPress={() => {
                    openURL(
                      `https://techtoday.azurewebsites.net/change-password/${changePasswordToken}?from=app`
                    );
                  }}
                >
                  Change Password
                </Text>
                <TouchableHighlight
                  style={{
                    backgroundColor: "#cb4745",
                    marginTop: 15,
                    borderRadius: 20,
                  }}
                  onPress={handleDeleteAccount}
                >
                  <Text
                    title="Submit"
                    style={styles.registerBTN}
                    onPress={handleDeleteAccount}
                  >
                    Delete Account
                  </Text>
                </TouchableHighlight>
                <TouchableHighlight
                  style={{
                    backgroundColor: "#cb4745",
                    marginTop: 15,
                    borderRadius: 20,
                  }}
                  onPress={handleSubmit}
                >
                  <Text
                    onPress={handleSubmit}
                    title="Submit"
                    style={styles.registerBTN}
                  >
                    Update Profile
                  </Text>
                </TouchableHighlight>
                {profileSuccess && (
                  <Text
                    style={{
                      color: "green",
                      textAlign: "center",
                      marginTop: 20,
                    }}
                  >
                    Updated Profile!
                  </Text>
                )}
              </View>
            </View>
          )}
        </Formik>
        <Formik
          initialValues={{
            jobsDefCount: user.jobDefaultCount.toString(),
            newsDefCount: user.newsDefaultCount.toString(),
          }}
          validateOnChange={false}
          validateOnSubmit={true}
          validateOnBlur={false}
          validate={async (values) => {
            const errors = {};

            if (!/^[0-9]+$/.test(values.newsDefCount) || parseInt(values.newsDefCount) <1 || parseInt(values.newsDefCount) > 9 ) {
              errors.newsDefCount = "Must be from 1-9"
            } 

            if (!/^[0-9]+$/.test(values.jobsDefCount) || parseInt(values.jobsDefCount) <1 || parseInt(values.jobsDefCount) > 9 ) {
              errors.jobsDefCount = "Must be from 1-9"
            }

            const intVJ = parseInt(values.jobsDefCount)
            const intVN = parseInt(values.newsDefCount)

            const jwt = await db.getItem("jwt")

            const commonauthconfig = {
              headers: {
                "Content-Type": "application/json",
                "auth-token": jwt,
              },
            };
  
            try {
              await axios.put(
                "/api/v1/users/change-topics",
                { newtopics: user.topics },
                commonauthconfig
              );

  
              await axios.put("/api/v1/users/change-default-settings/news", {newvalue: intVN}, commonauthconfig);
  
              await axios.put("/api/v1/users/change-default-settings/jobs", {newvalue: intVJ}, commonauthconfig);
  
              setPrefSuccess(true)

  
  
            } catch (error) {
              setPrefSuccess(false)
              if (
                error.response.status === 401 ||
                error.response.status === 403
              ) {
                navigation.navigate("Login")
              }

              console.log(error.response.data)
            }

            return errors;
          }}
          onSubmit={() => {}}
        >
          {({ handleChange, handleBlur, handleSubmit, values, errors }) => (
            <View style={styles.formWrapper}>
              <View style={styles.formbt}>
                <Text style={styles.welcome}>Preferences</Text>
                <Text style={styles.label}>Topics (Check At Least One)</Text>
                {TopicsList.map((topic,i) => {
                  return (
                    <View key={uuidv4()}>
                      <BouncyCheckbox
                        size={25}
                        fillColor="red"
                        unfillColor="#FFFFFF"
                        text={topic}
                        iconStyle={{ borderColor: "black" }}
                        onPress={(_) => {
                          if (user.topics.includes(topic)) {
                            if (user.topics.length !== 1) {
                              const newtopics = user.topics.filter((v, i, a) => {
                                return v !== topic;
                              });
                              setUser({ ...user, topics: newtopics });
                            } 
                          } else {
                            const topicsusers = user.topics
                            setUser({ ...user, topics: [...topicsusers, topic] });
                          }
                        }}
                        textStyle={{
                          textDecorationLine: "none",
                          color: "black",
                        }}
                        style={{ marginTop: 10 }}
                        fillColor="black"
                        isChecked={user.topics.includes(topic)}
                        disableBuiltInState={true}
                      />
                    </View>
                  );
                })}
                <Text style={styles.label}>News Default Count (1-9)</Text>
                <TextInput
                  onChangeText={handleChange("newsDefCount")}
                  onBlur={handleBlur("newsDefCount")}
                  value={values.newsDefCount}
                  keyboardType='numeric'
                  style={styles.inputCenter}
                  minLength={1}
                />
                {errors.newsDefCount && <Text style={styles.error}>{errors.newsDefCount}</Text>}
                <Text style={styles.label}>Jobs Default Count (1-9)</Text>
                <TextInput
                  onChangeText={handleChange("jobsDefCount")}
                  onBlur={handleBlur("jobsDefCount")}
                  value={values.jobsDefCount}
                  keyboardType='numeric'
                  style={styles.inputCenter}
                  maxLength={10}  
                  minLength={1}
                />
                {errors.jobsDefCount && <Text style={styles.error}>{errors.jobsDefCount}</Text>}

                <TouchableHighlight
                  style={{
                    backgroundColor: "#cb4745",
                    marginTop: 15,
                    borderRadius: 20,
                  }}
                  onPress={handleSubmit}
                >
                  <Text
                    onPress={handleSubmit}
                    title="Submit"
                    style={styles.registerBTN}
                  >
                    Update Preferences
                  </Text>
                </TouchableHighlight>
                {prefSuccess && (
                  <Text
                    style={{
                      color: "green",
                      textAlign: "center",
                      marginTop: 20,
                    }} 
                  >
                    Updated Preferences!
                  </Text>
                )}
              </View>
            </View>
          )}
        </Formik>
      </View>
    </ScrollView>
  );
};

export default Settings;

const styles = StyleSheet.create({
  formWrapper: {
    alignItems: "center",
    justifyContent: "center",
    width: "94%",
  },
  form: {
    backgroundColor: "white",
    width: "100%",
    paddingTop: 30,
    paddingBottom: 30,
    paddingLeft: 30,
    paddingRight: 30,
    borderRadius: 6,
    textAlign: "center",
    shadowColor: "black",
    shadowOpacity: 0.9,
    elevation: 10,
    marginTop: 20,

    textAlign: "center",
  },

  formbt: {
    backgroundColor: "white",
    width: "100%",
    paddingTop: 30,
    paddingBottom: 30,
    paddingLeft: 30,
    paddingRight: 30,
    borderRadius: 6,
    textAlign: "center",
    shadowColor: "black",
    shadowOpacity: 0.9,
    elevation: 10,
    marginBottom: 20,
    marginTop: 20,
    textAlign: "center",
    marginLeft: 20,
    marginRight: 20,
  },
  tinyLogo: {
    width: 50,
    height: 55,
  },

  welcome: {
    marginTop: 5,
    fontSize: 19,
    fontWeight: "bold",
    textAlign: "center",
  },
  continue: {
    marginLeft: 20,
    marginRight: 20,
    marginTop: 10,
    textAlign: "center",
  },

  label: {
    textAlign: "left",
    marginTop: 10,
  },

  input: {
    borderWidth: 1,
    borderColor: "black",
    marginTop: 10,
    height: 30,
    borderRadius: 4,
    paddingLeft: 7,
  },

  inputCenter: {
    borderWidth: 1,
    borderColor: "black",
    marginTop: 10,
    height: 30,
    borderRadius: 4,
    paddingLeft: 7,
    textAlign: "center",
  },

  registerBTN: {
    color: "white",
    backgroundColor: PRIMARY_COLOR,
    paddingTop: 8,
    paddingBottom: 8,
    borderRadius: 5,
    textAlign: "center",
  },
  already: {
    marginTop: 15,
    textAlign: "left",
  },
  aspecial: {
    color: PRIMARY_COLOR,
    marginLeft: 5,
    marginTop: 15,
  },

  mainSettingsWrapper: {
    alignItems: "center",
    backgroundColor: "#e5e5e5",
    marginTop: 20,
    marginLeft: 20,
    marginRight: 20,
    marginBottom: 20,
  },

  topSettings: {
    backgroundColor: "white",
    alignSelf: "stretch",
    textAlign: "center",
    fontSize: 20,
    paddingTop: 20,
    paddingBottom: 20,
    borderBottomColor: "lightgray",
    borderBottomWidth: 3,
    fontWeight: "500",
    shadowColor: "black",
    shadowOpacity: 1.9,
    elevation: 10,
  },
  error: {
    marginTop: 8,
    color: "red",
  },
});
