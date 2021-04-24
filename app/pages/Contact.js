import React from 'react'
import { View, Text, StyleSheet, Image } from 'react-native'
import PRIMARY_COLOR from '../constants/PRIMARY_COLOR'

const Contact = () => {
  return (
    <View style={styles.wrapper}>
      <Text style={styles.meet}>Meet The Creator</Text>
      <Text style={styles.name}>Bharadwaj Duggaraju</Text>
      <View style={styles.meeted}>
        <View style={{flex: 1, alignItems: "center"}}><Image style={styles.img} source={{uri: "https://techtoday.azurewebsites.net/static/media/pfp.18825e08.png"}}></Image></View>
        <Text style={styles.para}>Bharadwaj Duggaraju is the solo developer for this project. He enjoyes coding, hardware and design. If you have any bugs or tweaks, or just want to contact him, click the link below.</Text>
        <Text style={styles.button}>Contact Bharadwaj</Text>
      </View>
    </View>
  )
}

const styles = StyleSheet.create({
  wrapper: {
    flex: 1,
    alignItems: "center",
    marginTop: 20

  },

  meet: {
    color: PRIMARY_COLOR,
    fontSize: 30,
    fontWeight: "bold"

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
    borderRadius: 10


  },

  para: {
    marginTop: 13,
    paddingLeft: 20,
    paddingRight: 20,
    fontSize: 15,
    textAlign: "center"

  },

  button: {
    color: "white",
    backgroundColor: PRIMARY_COLOR,
    flex: 1,
    marginTop: 13,
    textAlign: "center",
    paddingTop: 10,
    paddingBottom: 10

  }
})

export default Contact
