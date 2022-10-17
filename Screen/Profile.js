import React from "react";
import {
  View,
  Text,
  TouchableOpacity,
  ScrollView,
  Image,
  Dimensions,
} from "react-native";
import { Entypo } from "@expo/vector-icons";
import ListCart from "../Components/ListCart";
import { useNavigation } from "@react-navigation/native";
const { width, height } = Dimensions.get("window");

function Profile() {
  const navigation = useNavigation();
  return (
    <View style={{ flex: 1 }}>
      <View
        style={{
          height: width,
          width: width,
          backgroundColor: "#01092A",
          position: "absolute",
          borderRadius: width / 2,
          top: -60,
          left: -60,
        }}
      ></View>
      <View
        style={{
          height: width,
          width: width,
          backgroundColor: "#01092A",
          borderRadius: width / 2,
          position: "absolute",
          bottom: -60,
          right: -60,
        }}
      ></View>
      <View
        style={{
          alignItems: "center",
        }}
      >
        <View
          style={{
            height: 130,
            width: 130,
            marginTop: 80,
            borderWidth: 1,
            borderColor: "#e5e5e5",
            overflow: "hidden",
            borderRadius: 100,
            marginBottom: 10,
          }}
        >
          <Image
            style={{
              height: 130,
              width: 130,
              borderRadius: 65,
            }}
            source={{
              uri: "https://i.pinimg.com/170x/6b/85/fb/6b85fb3448ce23c2d48c3ea0924628bf.jpg",
            }}
          />
        </View>
        <View
          style={{
            flexDirection: "row",
          }}
        >
          <View
            style={{
              marginLeft: 20,
            }}
          >
            <View
              style={{
                marginTop: 5,
              }}
            >
              <Text
                style={{
                  fontWeight: "bold",
                  color: "#fff",
                }}
              >
                Mowmita Rahman
              </Text>
            </View>

            <View style={{}}>
              <Text
                style={{
                  color: "#fff",
                }}
              >
                +8801761143991
              </Text>
            </View>
          </View>
          <TouchableOpacity
            onPress={() => {
              navigation.navigate("Edit Profile");
            }}
            style={{
              marginTop: 15,
              marginLeft: 5,
            }}
          >
            <Entypo
              style={{
                marginTop: 5,
              }}
              name="edit"
              size={20}
              color="#fff"
            />
          </TouchableOpacity>
        </View>
        <View
          style={{
            height: 400,
            width: "90%",
            alignItems: "center",
            backgroundColor: "white",
            marginTop: 20,
            borderRadius: 10,
            opacity: 0.8,
          }}
        >
          <Text
            style={{
              fontWeight: "bold",
              fontSize: 15,
              marginTop: 10,
            }}
          >
            Order List
          </Text>
          <View
            style={{
              height: 2,
              width: "70%",
              backgroundColor: "black",
            }}
          ></View>
          <ListCart />
          <ListCart />
          <ListCart />
          <ListCart />
        </View>
      </View>
    </View>
  );
}
export default Profile;
