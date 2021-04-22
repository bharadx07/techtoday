import React from "react";
import { View, Text, TextInput, Button, StyleSheet } from "react-native";
import { Formik } from "formik";

const Register = () => {
  return (
    <Formik
      initialValues={{ email: "", password: "", name: "" }}
      onSubmit={(values) => console.log(values)}
    >
      {({ handleChange, handleBlur, handleSubmit, values }) => (
        <View style={styles.formWrapper}>
          <View style={styles.form}>
            <Text>Logo soon</Text>
            <Text>Welcome</Text>
            <Text>Register to TechToday to Continue</Text>
            <Text>Name</Text>
            <TextInput
              onChangeText={handleChange("name")}
              onBlur={handleBlur("name")}
              value={values.name}
            />
            <Text>Email Address</Text>
            <TextInput
              onChangeText={handleChange("email")}
              onBlur={handleBlur("email")}
              value={values.email}
            />
            <Text>Password</Text>
            <TextInput
              onChangeText={handleChange("password")}
              onBlur={handleBlur("password")}
              value={values.password}
            />
            <Button onPress={handleSubmit} title="Submit" />
            <Text>
              Allready have an account?<Text>Login</Text>
            </Text>
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
    height: "100vh",
  },
  form: {
    backgroundColor: "white",
    paddingTop: 40,
    paddingBottom: 40,
    paddingLeft: 30,
    paddingRight: 30,
    borderRadius: 6,
    textAlign: "center",

  }
});

export default Register;
