import React from "react";
import { View, StatusBar } from "react-native";
import { Ionicons } from "@expo/vector-icons";
import Input from "./../Components/Input";
import { SafeAreaView } from "react-native-safe-area-context";

function Header(props) {
  const [Search, setSearch] = React.useState(null);
  return (
    <SafeAreaView style={{
        backgroundColor:"white"
    }}>
      <View
        style={[
          {
            height: 65,
            alignItems: "center",
            marginTop: 0,
          },
          props.style,
        ]}
      >
       
        <View
          style={{
            height: 20,
            width: "90%",
          }}
        >
          {/* <Input
            onPress={() => props.navigation.navigate("Search")}
            onChange={setSearch}
            placeholder="Search"
            icon={() => <Ionicons name="search" size={24} color="#1C2348" />}
          /> */}
        </View>
      </View>
    </SafeAreaView>
  );
}

export default Header;
