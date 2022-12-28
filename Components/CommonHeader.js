import React from 'react'
import { Text, View } from 'react-native'

export default function CommonHeader({title}) {
  return (
    <View style={{
        height:45,
        backgroundColor:"white",
        flexDirection:"row",
        alignItems:"center",
        justifyContent:"center"
    }}>
        <Text style={{
            fontSize:16,
            fontWeight:'500'
        }}>{title}</Text>
    </View>
  )
}
