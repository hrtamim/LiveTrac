import React from 'react'
import {View,Image} from "react-native"
import { FontAwesome } from '@expo/vector-icons';

export default function Avatar({source,style}) {
  return (
    <View style={[{
        width:50,
        height:50,
        overflow:"hidden",
        borderRadius:25,
    },style]}>
        {source?(
            <Image source={source} style={{
                width:style&&style.width?style.width:50,
                height:style&&style.height?style.height:50
            }} />
        ):(
            <FontAwesome name="user-circle-o" size={style&&style.width?style.width:50} color="black" />
        )}
        
    </View>
  )
}
