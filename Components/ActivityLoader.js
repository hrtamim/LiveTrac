import React from 'react'
import { ActivityIndicator, Dimensions, View, } from 'react-native'
const {width,height}=Dimensions.get("window")

export default function ActivityLoader() {
  return (
    <View style={{
        width:width,
        height:height,
        justifyContent:"center",
        alignItems:"center"
    }}>
        <ActivityIndicator color={"#1C2348"} size="small"/>
    </View>
  )
}
