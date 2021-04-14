import React, { useState } from "react";
import { View, Text, StyleSheet, Image } from "react-native";
import Icon from "react-native-vector-icons/Octicons";

const NavBar = ({ setshowLinks, showLinks }) => {
  
  return (
    <View style={wrapper}>
      <Text style={headText}>TechToday</Text>
      <Icon
        name="three-bars"
        size={30}
        color="#000"
        onPress={() => setshowLinks(!showLinks)}
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
    fontSize: "1rem",
  }
});

export default NavBar;
