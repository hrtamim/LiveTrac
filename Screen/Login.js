import React from "react";
import {
  TouchableOpacity,
  Text,
  SafeAreaView,
  Image,
  ScrollView,
  View,
  Dimensions,
  Modal,
  Alert
} from "react-native";
import Input from "./../Components/Input";
import { FontAwesome, MaterialIcons } from "@expo/vector-icons";
import { Entypo } from "@expo/vector-icons";
import icon from "../assets/a.png";
import Button from "../Components/Button";
import { getAuth, signInWithEmailAndPassword } from "firebase/auth";
import {app} from "../firebase";
import { useState } from "react";
import ActivityLoader from "../Components/ActivityLoader";

function LogIn(props) {
  const [UserName, setUserName] = React.useState(null);
  const [Password, setPassword] = React.useState(null);
  const [ModalVisible, setModalVisible] = React.useState(false);
  const window = Dimensions.get("window");
  const auth = getAuth(app);
  const [loader,setLoader]=useState(false)

  const login = () => {
    setLoader(true)
    signInWithEmailAndPassword(auth, UserName, Password)
      .then((userCredential) => {
        // Signed in
        setLoader(false)
        const user = userCredential.user;
        // ...
      })
      .catch((error) => {
        setLoader(false)
        const errorCode = error.code;
        Alert.alert("Ops!",errorCode)
        const errorMessage = error.message;
      });

  };
  if(loader){
    return <ActivityLoader/>
  }
  return (
    <ScrollView style={{}}>
      <View
        style={{
          height: window.height,
          alignItems: "center",
          justifyContent: "center",
        }}>
        <View
          style={{
            alignItems: "center",
            justifyContent: "center",
            height: 100,
            width: 100,
            borderRadius: 70,
            backgroundColor: "#1C2348",
            marginBottom: 40,
          }}>
          <Image
            style={{
              height: 80,
              width: 80,
            }}
            source={icon}
          />
        </View>
        <Input
          value={UserName}
          onChange={setUserName}
          placeholder="Email"
          icon={() => <MaterialIcons name="email" size={24} color="#1C2348" />}
        />
        <Input
          value={Password}
          onChange={setPassword}
          placeholder="Password"
          icon={() => <Entypo name="lock" size={25} color="#1C2348" />}
        />
        <Button
          onPress={() => {
            login();
          }}
          buttonName="LOG IN"
          disable={UserName && Password ? false : true}></Button>
        <TouchableOpacity
          onPress={() => {
            props.navigation.navigate("Device Login");
          }}
          style={{
            marginTop: 20,
          }}>
          <Text
            style={{
              fontWeight: "bold",
              color: "#1C2348",
            }}>
            Device Login ?
          </Text>
        </TouchableOpacity>
        <TouchableOpacity
          onPress={() => {
            props.navigation.navigate("Forget Password");
          }}
          style={{
            marginTop: 20,
          }}>
          <Text
            style={{
              fontWeight: "bold",
              color: "#1C2348",
            }}>
            Forget Password ?
          </Text>
        </TouchableOpacity>
        <TouchableOpacity
          onPress={() => {
            props.navigation.navigate("Create new account");
          }}
          style={{
            marginTop: 20,
          }}>
          <Text
            style={{
              fontWeight: "bold",
              color: "#1C2348",
            }}>
            Create new account
          </Text>
        </TouchableOpacity>
      </View>
      <Modal
        visible={false}
        onRequestClose={() => {
          setModalVisible(!ModalVisible);
        }}>
        <Alert></Alert>
      </Modal>
    </ScrollView>
  );
}

export default LogIn;
