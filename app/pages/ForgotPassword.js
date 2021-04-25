import React, { useState } from "react";
import {
  View,
  Text,
  TextInput,
  StyleSheet,
  Image,
  TouchableHighlight,
} from "react-native";
import { Formik } from "formik";
import { AntDesign } from '@expo/vector-icons'; 
import PRIMARY_COLOR from "../constants/PRIMARY_COLOR";

const ForgotPassword = ({ navigation }) => {
  const [success, setSuccess] = useState(false);

  return (
    <Formik
      initialValues={{ email: "" }}
      onSubmit={(values) => setSuccess(true)}
    >
      {({ handleChange, handleBlur, handleSubmit, values }) => (
        <View style={styles.formWrapper}>
          {!success && (
            <View style={styles.form}>
              {/* <View style={{ flex: 1, alignItems: "center" }}>
                <Image
                  style={styles.tinyLogo}
            
                  onPress={() => {
                    navigation.navigate("Home");
                  }}
                />
              </View> */}
              <Text style={styles.welcome}>Forgot Password?</Text>

              <Text style={styles.label}>Email Address</Text>
              <TextInput
                onChangeText={handleChange("email")}
                onBlur={handleBlur("email")}
                value={values.email}
                style={styles.input}
              />
              <TouchableHighlight
                style={{
                  backgroundColor: "#cb4745",
                  marginTop: 15,
                  borderRadius: 20,
                }}
              >
                <Text
                  onPress={handleSubmit}
                  title="Submit"
                  style={styles.BTN}
                >
                  Generate Reset Link
                </Text>
              </TouchableHighlight> 
              <Text
                style={styles.already}
                onPress={() => {
                  navigation.navigate("Login");
                }}
              >
                <Text style={styles.aspecial}>Return to Login</Text>
              </Text>
            </View>
          )}
          {success && (
            <View
              style={{
                backgroundColor: "white",
                paddingTop: 30,
                paddingBottom: 30,
                paddingLeft: 30,
                paddingRight: 30,
                borderRadius: 6,
                textAlign: "center",
                shadowColor: "black",
                shadowOpacity: 0.9,
                elevation: 10,
                width: 280
              }}
            >
              <AntDesign name="checkcircleo" size={64} color="green" style={{textAlign: "center"}}/>
              <Text style={styles.welcome}>Check Your Email</Text>
              <Text style={styles.continue}>
                If this account exists, Instructions regarding how to change the
                password will be sent to {values.email}
              </Text>
              <TouchableHighlight
                style={{
                  backgroundColor: "#cb4745",
                  marginTop: 15,
                  borderRadius: 20,
                }} 
              >
                <Text
                  onPress={() => setSuccess(false)}
                  title="Submit"
                  style={styles.BTN}
                >
                  Resend Email
                </Text>
              </TouchableHighlight>
            </View>
          )}
        </View>
      )}
    </Formik>
  );
};



const styles = StyleSheet.create({
  formWrapper: {
    flex: 1,
    alignItems: "center",
    justifyContent: "center",
  },
  form: {
    backgroundColor: "white",
    paddingTop: 30,
    paddingBottom: 30,
    paddingLeft: 30,
    paddingRight: 30,
    borderRadius: 6,
    textAlign: "center",
    shadowColor: "black",
    shadowOpacity: 0.9,
    elevation: 10,
  },
  tinyLogo: {
    width: 50,
    height: 55,
  },

  welcome: {
    marginTop: 10,
    fontSize: 23,
    fontWeight: "bold",
    textAlign: "center"
  },
  continue: {
    marginLeft: 20,
    marginRight: 20,
    marginTop: 10,
    textAlign: "center"
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
    paddingLeft: 4,
  },

  BTN: {
    color: "white",
    backgroundColor: PRIMARY_COLOR,
    paddingTop: 8,
    paddingBottom: 8,
    borderRadius: 5,
    textAlign: "center"
  },

  already: {
    marginTop: 12,
    textAlign: "left"
  },
  aspecial: {
    color: PRIMARY_COLOR,
    marginLeft: 5
  }

});

export default ForgotPassword;
