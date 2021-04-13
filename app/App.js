import React from "react";
import { StatusBar } from "expo-status-bar";
import { NavigationContainer } from "@react-navigation/native";
import { StyleSheet, Text, View, Button, Image } from "react-native";
import { createStackNavigator } from "@react-navigation/stack";
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
import Navbar from "./components/NavBar"

const Stack = createStackNavigator();



export default function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen
          name="Home"
          component={Home}
          options={{ headerTitle: (props) => <Navbar {...props}/> }}
        />
        <Stack.Screen name="Forgot Password" component={ForgotPassword} />
        <Stack.Screen name="Login" component={Login} />
        <Stack.Screen name="Register" component={Register} />
        <Stack.Screen name="Settings" component={Settings} />
        <Stack.Screen name="Topics" component={Topics} />
        <Stack.Screen name="Jobs" component={TopicJobs} />
        <Stack.Screen name="News" component={TopicNews} />
        <Stack.Screen name="Contact" component={Contact} />
      </Stack.Navigator>
      <StatusBar style="auto" />
    </NavigationContainer>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    alignItems: "center",
    justifyContent: "center",
  },
});
