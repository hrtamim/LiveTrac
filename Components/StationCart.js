import React from "react";
import { View, Text, TouchableOpacity } from "react-native";
import { MaterialCommunityIcons } from "@expo/vector-icons";

export default function StationCart({ title, address, onDelete }) {
  return (
    <View
      style={{
        backgroundColor: "white",
        marginVertical: 5,
        marginHorizontal: 20,
        borderRadius: 5,
        flexDirection: "row",
        alignItems: "center",
        justifyContent: "space-between",
        paddingHorizontal: 20,
        paddingVertical: 10,
      }}
    >
      <View>
        <Text
          style={{
            fontSize: 16,
          }}
        >
          {title}
        </Text>
        <Text
          style={{
            fontSize: 14,
          }}
        >
          {address}
        </Text>
      </View>
      <TouchableOpacity>
        <MaterialCommunityIcons name="delete-sweep" size={24} color="black" />
      </TouchableOpacity>
    </View>
  );
}
