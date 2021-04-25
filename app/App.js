import React, { useState } from "react";
import { StatusBar } from "expo-status-bar";
import { NavigationContainer} from "@react-navigation/native";
import { StyleSheet, Text, View, Button, Image } from "react-native";
import { createStackNavigator } from "@react-navigation/stack";
import Icon from "react-native-vector-icons/FontAwesome";
//Pages
import Contact from "./pages/Contact";
import ForgotPassword from "./pages/ForgotPassword";
import Home from "./pages/Home";
import Login from "./pages/Login";
import Register from "./pages/Register";
import Settings from "./pages/Settings";
import TopicJobs from "./pages/TopicJobs";
import TopicNews from "./pages/TopicNews";
import Topics from "./pages/Topics";
import Navbar from "./components/NavBar";
import {navigationRef} from './/RootNavigation';
import * as RootNavigation from './RootNavigation';



const Stack = createStackNavigator();


export default function App() {
  const [showPublicLinks, setshowPublicLinks] = useState(false);
  const [showPrivateOuterLinks, setshowPrivateOuterLinks] = useState(false);
  const [showPrivateInnerLinks, setshowPrivateInnerLinks] = useState(false);

  const navProps = {
    showPublicLinks, 
    setshowPublicLinks,
    showPrivateOuterLinks, 
    setshowPrivateOuterLinks,
    showPrivateInnerLinks, 
    setshowPrivateInnerLinks,
    navigation: RootNavigation   
  }

  return (
    <NavigationContainer ref={navigationRef}>
      <Stack.Navigator>
        <Stack.Screen
          name="Home"
          component={Home}
          options={{
            headerTitle: (props) => (
              <Navbar
                {...props}
                {...navProps}
                page="public"
              />
            ),
            headerLeft: null
          }}
          header

          
        />
        <Stack.Screen name="Forgot Password" component={ForgotPassword} options={{
            headerTitle: (props) => (
              <Navbar
              {...props}
              {...navProps}
              page="public"
              />
            ),
            headerLeft: null
          }}/>
        <Stack.Screen name="Login" component={Login} options={{
            headerTitle: (props) => (
              <Navbar
              {...props}
              {...navProps}
              page="public"
              />
            ),
            headerLeft: null
          }} />
        <Stack.Screen name="Register" component={Register} options={{
            headerTitle: (props) => (
              <Navbar
              {...props}
              {...navProps}
              page="public"
              />
            ),
            headerLeft: null
          }} />
        <Stack.Screen name="Settings" component={Settings} options={{
            headerTitle: (props) => (
              <Navbar
              {...props}
              {...navProps}
              page="privateouter"
              />
            ),
            headerLeft: null
          }} />
        <Stack.Screen name="Topics" component={Topics} options={{
            headerTitle: (props) => (
              <Navbar
              {...props}
              {...navProps}
              page="privateouter"
              />
            ),
            headerLeft: null
          }} />
        <Stack.Screen name="Jobs" component={TopicJobs} options={{
            headerTitle: (props) => (
              <Navbar
                {...props}
                {...navProps}
                page="privateinner"
              />
            ),
            headerLeft: null
          }}/>
        <Stack.Screen name="News" component={TopicNews} options={{
            headerTitle: (props) => (
              <Navbar
                {...props}
                {...navProps}
                page="privateinner"
              />
            ),
            headerLeft: null
          }}/>
        <Stack.Screen name="Contact" component={Contact} options={{
            headerTitle: (props) => (
              <Navbar
              {...props}
              {...navProps}
              page="public"
              />
            ),
            headerLeft: null
          }} />
      </Stack.Navigator>
      <StatusBar style="auto" />
      {showPublicLinks === true && (
        <View style={styles.navLinks}>
          <View style={styles.wrapper}>
            <Icon
              name="close"
              onPress={() => {
                setshowPublicLinks(false);
              }}
              style={styles.close}
              size={30}
              color="white"
            ></Icon>
            <Text style={styles.text} onPress={() => {RootNavigation.navigate('Home'); setshowPublicLinks(false)}}>Home</Text>
            <Text style={styles.text} onPress={() => {RootNavigation.navigate('Contact');setshowPublicLinks(false)}}>Contact</Text>
            <Text style={styles.text} onPress={() => {RootNavigation.navigate('Login');setshowPublicLinks(false)}}>Login</Text>
            <Text style={styles.text} onPress={() => {RootNavigation.navigate('Register');setshowPublicLinks(false)}}>Register</Text>
          </View>
        </View>
      )}
      {showPrivateOuterLinks === true && (
        <View style={styles.navLinks}>
          <View style={styles.wrapper}>
            <Icon
              name="close"
              onPress={() => {
                setshowPrivateOuterLinks(false);
              }}
              style={styles.close}
              size={30}
              color="white"
            ></Icon>
            <Text style={styles.text} onPress={() => {RootNavigation.navigate('Topics'); setshowPrivateOuterLinks(false)}}>Topics</Text>
            <Text style={styles.text} onPress={() => {RootNavigation.navigate('Settings');setshowPrivateOuterLinks(false)}}>Settings</Text>
            <Text style={styles.text} onPress={() => {RootNavigation.navigate('Home');setshowPrivateOuterLinks(false)}}>Logout</Text>
          </View>
        </View>
      )}
      {showPrivateInnerLinks === true && (
        <View style={styles.navLinks}>
          <View style={styles.wrapper}>
            <Icon
              name="close"
              onPress={() => {
                setshowPrivateInnerLinks(false);
              }}
              style={styles.close}
              size={30}
              color="white"
            ></Icon>
            <Text style={styles.text} onPress={() => {RootNavigation.navigate('News'); setshowPrivateInnerLinks(false);}}>News</Text>
            <Text style={styles.text} onPress={() => {RootNavigation.navigate('Jobs');setshowPrivateInnerLinks(false);}}>Jobs</Text>
            <Text style={styles.text} onPress={() => {RootNavigation.navigate('Topics');setshowPrivateInnerLinks(false);}}>Back</Text>
           
          </View>
        </View>
      )}
    </NavigationContainer>
  );
}

const styles = StyleSheet.create({
  navLinks: {
    position: "absolute",
    top: 0,
    right: 0,
    width: "100%",
    height: "50%",
    padding: 0,
    margin: 0,
    backgroundColor: "#cb4745",
  },
  wrapper: {
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
    height: "100%",
  },
  close: {
    position: "absolute",
    top: 20,
    right: 20,
  },
  text: {
    color: "white",
    marginTop: 5,
    marginBottom: 5,
  },
});
