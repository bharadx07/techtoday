import React from 'react'
import { View, Text } from 'react-native'


const Topics = ({navigation}) => {
  return (
    <View>
      <Text>topic</Text>
      <Text onPress={() => navigation.navigate("News", {topicName: "software"})}>a topic test</Text>
    </View>
  )
}

export default Topics
 