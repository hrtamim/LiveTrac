import React, { useState } from "react";
import { View, Text, TouchableOpacity, ScrollView, Image, Dimensions, TextInput, Switch, StyleSheet, } from "react-native";
import { Entypo } from "@expo/vector-icons";
import { useNavigation } from "@react-navigation/native";
import D from "../Components/D";
const { width, height } = Dimensions.get("window");

function Profile() {
  const [isEnabled, setIsEnabled] = useState(false);
  const toggleSwitch = () => setIsEnabled(previousState => !previousState);

  const navigation = useNavigation();
  return (
    <View style={{ flex: 1 }}>
      <View
        style={art.circle}
      ></View>
      <View
        style={art.circle}
      ></View>
      <View
        style={{
          alignItems: "center",
        }}
      >
        <View
          style={art.iCircle}
        >
          <Image
            style={art.pImage}
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
        <ScrollView showsVerticalScrollIndicator={false} style={art.pCart}>
          <Text style={art.bText}>Account</Text>
          <View style={{ paddingHorizontal: 40 }}>
            <View style={{ flexDirection: 'row', alignItems: 'center' }}>
              <Text style={{ fontSize: 16 }}>Gender:</Text>
              <D style={{ width: 150, marginLeft: 10 }} DATA={['Male', 'Female']} />
            </View>
            <View style={{ flexDirection: 'row', alignItems: 'center', marginTop: 10 }}>
              <Text style={{ fontSize: 16 }}>Birth Year:</Text>
              <D style={{ width: 150, marginLeft: 10 }} DATA={['1990', '1991', '1992', '1993', '1994', '1995', '1996', '1997', '1998', '1999', '2000', '2001', '2002', '2003', '2003', '2004']} />
            </View>
            <Text style={{ fontSize: 16, marginTop: 10 }}>Address</Text>

          </View>
          <TextInput style={art.tInput}/>

          
          <Text style={art.bText}>Settings</Text>
          <View style={art.toogle}>
            <Text>বাংলা</Text>
            <Switch
              trackColor={{ false: "#767577", true: "#408F04" }}
              thumbColor={isEnabled ? "#f5dd4b" : "#f4f3f4"}
              ios_backgroundColor="#3e3e3e"
              onValueChange={toggleSwitch}
              value={isEnabled}
            />
          </View>
          <Text style={art.bText}>Help & Legal</Text>
          <View style={{ marginLeft: 40, }}>
            <TouchableOpacity style={art.touch}>
              <Text>Emergency Support</Text>
            </TouchableOpacity>
            <TouchableOpacity style={art.touch}>
              <Text>Help</Text>
            </TouchableOpacity>
            <TouchableOpacity style={art.touch}>
              <Text>Policies</Text>
            </TouchableOpacity>
          </View>
          <Text style={art.bText}>More</Text>
          <View style={{ paddingHorizontal: 40 }}>

          </View>

        </ScrollView>

      </View>
    </View>
  );
}
export default Profile;

const art = StyleSheet.create({
  touch: {
    height:40,
    backgroundColor: 'red',
    width: '100%',
    justifyContent: 'center',
    paddingHorizontal: 10,
    borderRadius: 10,
    marginTop: 5,
  },
  pCart: {
    height: 400,
    width: "90%",
    backgroundColor: "white",
    marginTop: 20,
    borderRadius: 10,
    opacity: 0.8,
    padding: 10,
    paddingBottom: 20,
  },
  tInput: {
    height: 100,
    width: '87%',
   padding:10,
    borderRadius: 20,
    borderWidth: 1,
    backgroundColor: '#fff',
    marginLeft: 40
  },
  toogle: {
    borderRadius:10,
    flexDirection: 'row',
    height: 40,
    width: '100%',
    backgroundColor: '#fff ',
    justifyContent: 'space-between',
    paddingHorizontal: 10,
    alignItems: 'center',
    marginVertical: 10,
    borderWidth:1,
    borderColor:'#808080',
  
  },
  circle:{
    height: width,
    width: width,
    backgroundColor: "#01092A",
    position: "absolute",
    borderRadius: width / 2,
    top: -60,
    left: -60,
  },
  iCircle:{
    height: 130,
    width: 130,
    marginTop: 80,
    borderWidth: 1,
    borderColor: "#e5e5e5",
    overflow: "hidden",
    borderRadius: 100,
    marginBottom: 10,
  },
  pImage:{
    height: 130,
    width: 130,
    borderRadius: 65,
  },
  bText:
  { 
    fontSize: 16, 
    fontWeight: 'bold' 
  },
})