import React, { useState } from "react";
import { View, Text, StyleSheet, Image } from "react-native";
import Icon from "react-native-vector-icons/Octicons";

const NavBar = ({
  showPublicLinks,
  setshowPublicLinks,
  showPrivateOuterLinks,
  setshowPrivateOuterLinks,
  showPrivateInnerLinks,
  setshowPrivateInnerLinks,
  navigation,
  page
}) => {
  return (
    <View style={wrapper}>
      <Text
        style={headText}
        onPress={() => {
          const locationFinal = page === "public" ? "Home" : "Topics"
          navigation.navigate(locationFinal);
        }}
      >
        TechToday
      </Text>
      <Icon
        name="three-bars"
        size={30}
        color="#000"
        onPress={() => {
          if(page==='public') {
            setshowPublicLinks(!showPublicLinks)
          } else if(page==='privateouter') {
            setshowPrivateOuterLinks(!showPrivateOuterLinks)
          } else {
            setshowPrivateInnerLinks(!showPrivateInnerLinks)
          }
        }} 
      /> 
    </View>
  );
};

const { wrapper, headText, navLinks } = StyleSheet.create({
  wrapper: {
    flex: 1,
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
  },
  headText: {
    color: "#cb4745",
    fontSize: 19,
  },
});

export default NavBar;
