import React from "react";
import { View, Text, TextInput, StyleSheet, Image, TouchableHighlight } from "react-native";
import { Formik } from "formik";
import PRIMARY_COLOR from "../constants/PRIMARY_COLOR";
 
const Login = ({navigation}) => {
  return (
  <Formik
  initialValues={{ email: "", password: "" }}
  onSubmit={(values) => navigation.navigate("Topics")}
>
  {({ handleChange, handleBlur, handleSubmit, values }) => (
    <View style={styles.formWrapper}>
      <View style={styles.form}>
        {/* <View style={{flex: 1, alignItems: "center"}}  ><Image
          style={styles.tinyLogo}

          onPress={() => {navigation.navigate("Home")}}
        /></View> */}
        <Text style={styles.welcome}>Welcome</Text>
        <Text style={styles.continue}>Login to TechToday to Continue</Text>
        <Text style={styles.label}>Email Address</Text>
        <TextInput
          onChangeText={handleChange("email")}
          onBlur={handleBlur("email")}
          value={values.email}
          style={styles.input}
        />
        <Text style={styles.label}>Password</Text>
        <TextInput
          onChangeText={handleChange("password")}
          onBlur={handleBlur("password")}
          value={values.password}
          style={styles.input}
        />
          <Text style={{marginTop: 10, textAlign: "left", color: "#cb4745"}} onPress={() => {navigation.navigate("Forgot Password")}}>Forgot Password?</Text>
          <TouchableHighlight 
            style ={{
                backgroundColor : "#cb4745",
                marginTop :15,
                borderRadius: 20
            }}>
          
        <Text onPress={handleSubmit} title="Submit" style={styles.registerBTN} >Login</Text>
        </TouchableHighlight> 
        <Text style={styles.already} onPress={() => {navigation.navigate("Register")}}>
          Dont have an account?<Text style={styles.aspecial}>Register</Text>
        </Text>
      </View>
    </View>
  )}
  </Formik>
  )
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
    fontWeight: "bold"
  },
continue: {
  marginLeft: 20,
  marginRight: 20,
  marginTop: 10
},

label: {
  textAlign: "left",
  marginTop: 10
},

input: {
  borderWidth: 1,
  borderColor: "black",
  marginTop: 10,
  height: 30,
  borderRadius: 4,
  paddingLeft: 4
},

registerBTN: {
  color: "white",
  backgroundColor: PRIMARY_COLOR,
  paddingTop: 8,
  paddingBottom: 8,
  borderRadius:5,

},
already: {
  marginTop: 15,
  textAlign: "left"
},
aspecial: {
  color: PRIMARY_COLOR,
  marginLeft: 5
}

});

export default Login