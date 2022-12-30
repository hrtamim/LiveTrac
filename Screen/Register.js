import React, { useEffect, useState } from "react";
import {
  TouchableOpacity,
  Text,
  Image,
  SafeAreaView,
  View,
  TextInput,
  Alert,
  KeyboardAvoidingView,
} from "react-native";
import { MaterialIcons } from "@expo/vector-icons";
import { FontAwesome } from "@expo/vector-icons";
import { Entypo } from "@expo/vector-icons";
import icon from "../assets/a.png";
import Input from "./../Components/Input";
import Button from "../Components/Button";
import { getAuth, createUserWithEmailAndPassword } from "firebase/auth";
import { app } from "../firebase";
import ActivityLoader from "../Components/ActivityLoader";

function Register(props) {
  const [UserName, setUserName] = React.useState(null);
  const [UserEmail, setEmail] = React.useState(null);
  const [Password, setPassword] = React.useState(null);
  const navigation = props.navigation;
  const [Loader, setLoader] = React.useState(false);
  const auth=getAuth(app)

  const register = () => {
    if (!UserEmail || !Password) {
      Alert.alert("Opps!", "Email and password is required");
    }
    setLoader(true);
    createUserWithEmailAndPassword(auth, UserEmail, Password)
      .then((userCredential) => {
        // Signed in
        setLoader(false);
        const user = userCredential.user;
        navigation.navigate("Home", { user: user });
        // ...
      })
      .catch((error) => {
        const errorCode = error.code;
        const errorMessage = error.message;
        // ..
        setLoader(false);
        console.warn(errorMessage);
      });
  };
  const getUserInfo = (id) => {};
  if (Loader) {
    return(
        <ActivityLoader />
    )
  }

  return (
    <KeyboardAvoidingView
      style={{ flex: 1 }}
      behavior={Platform.OS === "ios" ? "padding" : null}
      keyboardVerticalOffset={Platform.OS === "ios" ? 0 : 0}
    >
      <View
        style={{
          justifyContent: "center",
          alignItems: "center",
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
          <Input
            onChange={setEmail}
            placeholder="Email"
            icon={() => (
              <MaterialIcons name="email" size={24} color="#1C2348" />
            )}
          />
          {/* <Input onChange={setUserName} placeholder='User name' icon={() => (
                    <FontAwesome name="user-circle-o" size={30} color="#1C2348" />
                )} /> */}
          <Input
            onChange={setPassword}
            placeholder="Password"
            icon={() => <Entypo name="lock" size={30} color="#1C2348" />}
          />
          <View></View>
          <Button
            onPress={() => {
              register();
            }}
            buttonName="REGISTER"
            disable={Password && UserEmail ? false : true}
          ></Button>
        </View>
        <TouchableOpacity
          onPress={() => {
            navigation.navigate("Log In");
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
            Already have an account?
          </Text>
        </TouchableOpacity>
      </View>
    </KeyboardAvoidingView>
  );
}

export default Register;
