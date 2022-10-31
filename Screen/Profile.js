import React from "react";
import {
  View,
  Text,
  TouchableOpacity,
  ScrollView,
  Image,
  Dimensions,
  TextInput
} from "react-native";
import { Entypo } from "@expo/vector-icons";
import ListCart from "../Components/ListCart";
import { useNavigation } from "@react-navigation/native";
import D from "../Components/D";
const { width, height } = Dimensions.get("window");

function Profile() {
  const navigation = useNavigation();
  return (
    <ScrollView style={{ flex: 1 }}>
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
            backgroundColor: "white",
            marginTop: 20,
            borderRadius: 10,
            opacity: 0.8,
            padding: 10,
          }}
        >
          <Text style={{ fontSize: 16, fontWeight: 'bold' }}>Account</Text>
          <View style={{ paddingHorizontal: 40 }}>
            <View style={{ flexDirection: 'row', alignItems: 'center' }}>
              <Text style={{ fontSize: 16 }}>Gender:</Text>
              <D style={{ width: 150, marginLeft: 10 }} DATA={['Male', 'Female']} />
            </View>
            <View style={{ flexDirection: 'row', alignItems: 'center',marginTop:10 }}>
              <Text style={{ fontSize: 16 }}>Birth Year:</Text>
              <D style={{ width: 150, marginLeft: 10 }} DATA={['1990', '1991','1992','1993','1994','1995','1996','1997','1998','1999','2000','2001','2002','2003','2003','2004']} />
            </View>
            <Text style={{ fontSize: 16,marginTop:10 }}>Address</Text>
          <TextInput style={{height:100,width:250,borderRadius:20,borderWidth:1,}}>

          </TextInput>
          </View>

        </View>
      </View>
    </ScrollView>
  );
}
export default Profile;
