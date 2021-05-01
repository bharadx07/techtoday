import React from "react";
import {
  View,
  Text,
  TextInput,
  StyleSheet,
  TouchableHighlight,
} from "react-native";
import { Formik } from "formik";
import PRIMARY_COLOR from "../constants/PRIMARY_COLOR";
import axios from "../constants/AxiosClient";

const Register = ({ navigation }) => {
  return (
    <Formik
      initialValues={{ email: "", password: "", name: "" }}
      validateOnChange={false}
      validateOnSubmit={true}
      validateOnBlur={false}
      validate={async (values) => {
        const errors = {};

        const config = {
          headers: {
            "Content-Type": "application/json",
          },
        };

        try {
          await axios.post("/api/v1/users/register", values, config);
        } catch (err) {
          const ErrorMessages = err.response.data;
          if (ErrorMessages === "Email Allready Exists") {
            errors.email = "Email Allready Exists";

            return errors;
          }

          ErrorMessages.forEach((ErrorMessage) => {
            if (ErrorMessage.message === '"name" is not allowed to be empty') {
              errors.name = "Name is Required";
            } else if (
              ErrorMessage.message === '"email" is not allowed to be empty'
            ) {
              errors.email = "Email is Required";
            } else if (
              ErrorMessage.message === '"password" is not allowed to be empty'
            ) {
              errors.password = "Password is Required";
            } else if (
              ErrorMessage.message === '"email" must be a valid email'
            ) {
              errors.email = "Invalid Email";
            } else {
              errors.password = "Needs to be 6+ Characters Long";
            }
          });
        }

        return errors;
      }}
      onSubmit={(_) => navigation.navigate("Topics")}
    >
      {({ handleChange, handleBlur, handleSubmit, values, errors }) => (
        <View style={styles.formWrapper}>
          <View style={styles.form}>
            <Text style={styles.welcome}>Welcome</Text>
            <Text style={styles.continue}>
              Register to TechToday to Continue
            </Text>
            <Text style={styles.label}>Name</Text>
            <TextInput
              onChangeText={handleChange("name")}
              onBlur={handleBlur("name")}
              value={values.name}
              style={styles.input}
            />
            {errors.name && <Text style={styles.error}>{errors.name}</Text>}
            <Text style={styles.label}>Email Address</Text>
            <TextInput
              onChangeText={handleChange("email")}
              onBlur={handleBlur("email")}
              value={values.email}
              style={styles.input}
            />
            {errors.email && <Text style={styles.error}>{errors.email}</Text>}
            <Text style={styles.label}>Password</Text>
            <TextInput
              onChangeText={handleChange("password")}
              onBlur={handleBlur("password")}
              value={values.password}
              style={styles.input}
            />
            {errors.password && (
              <Text style={styles.error}>{errors.password}</Text>
            )}
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
                style={styles.registerBTN}
              >
                Register
              </Text>
            </TouchableHighlight>
            <View style={{ flexDirection: "row" }}>
              <Text
                style={styles.already}
                onPress={() => {
                  navigation.navigate("Login");
                }}
              >
                Allready have an account?
              </Text>
              <View style={styles.aspecial}>
                <Text
                  style={{ color: "#cb4745" }}
                  onPress={() => {
                    navigation.navigate("Login");
                  }}
                >
                  Login
                </Text>
              </View>
            </View>
          </View>
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
    paddingLeft: 4,
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

  error: {
    marginTop: 8,
    color: "red",
  },
});

export default Register;
