import React from 'react'
import { View, Text, StyleSheet, Image, ScrollView } from 'react-native'
import PRIMARY_COLOR from '../constants/PRIMARY_COLOR'
import openURL from '../utils/OpenURL'

const Contact = () => {
  const PUB_FORM_URL = "https://docs.google.com/forms/d/e/1FAIpQLSfAWXmeWFGRH3NciBCGrH0-4H2Z9S2UFgoQtSwToE37UFJshA/viewform"

  return (
    <ScrollView style={styles.wrapper} contentContainerStyle={{flex: 1, alignItems: "center"}}>
      <Text style={styles.meet}>Meet The Creator</Text>
      <Text style={styles.name}>Bharadwaj Duggaraju</Text>
      <View style={styles.meeted}>
        <View style={{flex: 1, alignItems: "center"}}><Image style={styles.img} source={{uri: "https://techtoday.azurewebsites.net/static/media/pfp.18825e08.png"}}></Image></View>
        <Text style={styles.para}>Bharadwaj Duggaraju is the solo developer for this project. He enjoyes coding, hardware and design. If you have any bugs or tweaks, or just want to contact him, click the link below.</Text>
        <View style={{flex: 1, alignItems: "stretch"}}><Text style={styles.button} onPress={() => {openURL(PUB_FORM_URL)}}>Contact Bharadwaj</Text></View>
      </View>
    </ScrollView>
  )
}

const styles = StyleSheet.create({

  meet: {
    color: PRIMARY_COLOR,
    fontSize: 30,
    fontWeight: "bold",
    marginTop: 20

  },

  name: {
    marginTop: 10,
    fontSize: 20

  },

  meeted: {
    backgroundColor: "lightgray",
    marginTop: 20, 
    padding: 20,
    marginLeft: 20,
    marginRight: 20

  },

  img: {
    width: 120,
    height: 150,
    borderRadius: 10,


  },

  para: {
    paddingTop: 27,
    paddingLeft: 20,
    paddingRight: 20,
    fontSize: 15,
    textAlign: "center"

  },

  button: {
    fontWeight: "bold",
    fontSize: 17,
    color: "#fff",
    backgroundColor: PRIMARY_COLOR,
    padding: 10,
    borderRadius: 4,
    textAlign: "center",
    marginTop: 15,
    
    

  }
})

export default Contact
