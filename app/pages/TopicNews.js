import React from 'react'
import { View, Text } from 'react-native'

const TopicNews = ({route}) => {
  
  return (
    <View>
      <Text>topic news</Text>
      <Text>{route.params.topicName}</Text>
    </View>
  )
}

export default TopicNews
