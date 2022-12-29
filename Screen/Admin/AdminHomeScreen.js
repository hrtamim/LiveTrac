import React from "react";
import { View, ScrollView, Text, Touchable, Switch } from "react-native";
import Avatar from "../../Components/Avatar";
import { MaterialIcons } from "@expo/vector-icons";

export default function AdminHomeScreen() {
  const [Active,setActive]=React.useState(false)

  return (
    <ScrollView>
      <View
        style={{
          flexDirection: "row",
          paddingHorizontal: 20,
          paddingVertical: 20,
          alignItems: "center",
        }}
      >
        <Avatar />
        <View
          style={{
            marginHorizontal: 10,
          }}
        >
          <Text
            style={{
              fontSize: 18,
              fontWeight: "500",
            }}
          >
            Ekota Express
          </Text>
          <Text
            style={{
              fontSize: 14,
              color: "red",
            }}
          >
            Up Route
          </Text>
        </View>
      </View>
      <View>
        <View
          style={{
            flexDirection: "row",
            paddingHorizontal:20,
            paddingVertical:10,
            alignItems:"center"
          }}
        >
          <MaterialIcons name="my-location" size={24} color="black" />
          <Text style={{
            fontSize:16,
            fontWeight:"700",
            marginLeft:10
          }}>Current Station</Text>
        </View>
        <Text style={{
          marginHorizontal:20,
          fontSize:14,
        }}>--Nilphamari Station</Text>
      </View>
      <View style={{
        marginHorizontal:20,
        height:45,
        backgroundColor:"white",
        marginVertical:20,
        borderRadius:10,
        flexDirection:"row",
        alignItems:"center",
        paddingHorizontal:10,
        justifyContent:"space-between"
      }}>
        <Text style={{
          fontSize:20,
          color:"green"
        }}>Active</Text>
        <Switch value={Active} onChange={()=>{
          setActive(!Active)
        }}/>
      </View>
    </ScrollView>
  );
}
