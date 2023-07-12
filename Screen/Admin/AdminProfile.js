import React from "react";
import { Text, View, ScrollView } from "react-native";
import Avatar from "../../Components/Avatar";
import Input from "../../Components/Input";
import { FontAwesome5 } from "@expo/vector-icons";
import Pressable from "react-native/Libraries/Components/Pressable/Pressable";
import { useState } from "react";
import { useEffect } from "react";

export default function AdminProfile({route}) {
  const [name,setName]=useState()
  const data=route?.params?.data;
  useEffect(()=>{
    if(data){
      setName(data?.name)
    }
  },[])

  return (
    <ScrollView
      style={{
        flex: 1,
      }}
    >
      <View
        style={{
          justifyContent: "center",
          alignItems: "center",
          marginTop: 20,
        }}
      >
        <Avatar
          style={{
            width: 80,
            height: 80,
          }}
        />
        <Pressable
          style={{
            position: "absolute",
            bottom: 5,
            backgroundColor: "white",
            borderRadius: 10,
            justifyContent: "center",
            alignItems: "center",
            height: 25,
            width: 25,
            left:"54%"
          }}
        >
          <FontAwesome5 name="user-edit" size={15} color="black" />
        </Pressable>
      </View>
      <View
        style={{
          marginHorizontal: 20,
          marginVertical: 20,
        }}
      >
        <Text
          style={{
            fontSize: 16,
            fontWeight: "600",
          }}
        >
          Train ID
        </Text>
        <Text
          style={{
            marginTop: 5,
            fontSize: 16,
            fontWeight: "200",
          }}
        >
          {data?.deviceId}
        </Text>
      </View>
      <View>
        <Text
          style={{
            marginHorizontal: 20,
            fontSize: 16,
            fontWeight: "500",
            marginTop: 20,
          }}
        >
          Train Name
        </Text>
        <Input onEndEditing={()=>{
          
        }} value={name}  onChange={setName} placeholder="Enter name" />
      </View>
    </ScrollView>
  );
}
