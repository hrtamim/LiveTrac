import React from "react";
import {
  TouchableOpacity,
  Text,
  Image,
  SafeAreaView,
  View,
  TextInput,
  Alert,
} from "react-native";
import { MaterialIcons } from "@expo/vector-icons";
import icon from "../assets/a.png";
import Input from "./../Components/Input";
import Button from "../Components/Button";
import {app} from "../firebase";
import { getAuth, sendPasswordResetEmail } from "firebase/auth";
import { useState } from "react";
import ActivityLoader from "../Components/ActivityLoader";

function ForgetPassword(props) {
  const [UserName, setUserName] = React.useState(null);
  const auth=getAuth(app)
  const [loader,setLoader]=useState(false)

  const forget=()=>{
    setLoader(true)
    sendPasswordResetEmail(auth, UserName)
    .then(() => {
      // Password reset email sent!
      // ..
      props?.navigation?.goBack()
      setLoader(false)
    })
    .catch((error) => {
      setLoader(false)
      
      const errorCode = error.code;
      Alert.alert("Ops",errorCode)
      const errorMessage = error.message;
      // ..
    });
  }
  if(loader){
    return <ActivityLoader/>
  }
  
  return (
    <View
      style={{
        alignItems: "center",
        justifyContent: "center",
      }}
    >
      <View
        style={{
          alignItems: "center",
          justifyContent: "center",
          height: 100,
          width: 100,
          borderRadius: 70,
          backgroundColor: "#1C2348",
          marginTop: "40%",
        }}
      >
        <Image
          style={{
            height: 80,
            width: 80,
          }}
          source={icon}
        />
      </View>
      <View
        style={{
          width: "100%",
          marginTop: "8%",
          alignItems: "center",
        }}
      >
        <Input value={UserName}
          onChange={setUserName}
          placeholder="Email"
          icon={() => <MaterialIcons name="email" size={24} color="#1C2348" />}
        />
        <Button onPress={()=>{
          forget()
        }} buttonName="SEND" disable={UserName ? false : true}></Button>
      </View>
      <View style={{
        width:"100%",
        justifyContent:"center",
        alignItems:"center"
      }}>
        <TouchableOpacity
          onPress={() => {
            props.navigation.navigate("Create new account");
          }}
          style={{
            marginTop: 20,
          }}
        >
          <Text
            style={{
              fontWeight: "bold",
              color: "#1C2348",
            }}
          >
            Create new account
          </Text>
        </TouchableOpacity>
        <TouchableOpacity
          onPress={() => {
            props.navigation.goBack();
          }}
          style={{
            marginTop: 20,
          }}
        >
          <Text
            style={{
              fontWeight: "bold",
              color: "#1C2348",
            }}
          >
            Back
          </Text>
        </TouchableOpacity>
      </View>
    </View>
  );
}

export default ForgetPassword;
