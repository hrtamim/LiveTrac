import React from "react";
import { ScrollView, View, TouchableOpacity, Modal } from "react-native";
import StationCart from "../../Components/StationCart";
import { FontAwesome } from "@expo/vector-icons";
import Input from "../../Components/Input";
import Button from "../../Components/Button";

export default function StationList() {
  const [Visible,setVisible]=React.useState(false)

  return (
    <View style={{
      flex:1
    }}>
      <ScrollView showsVerticalScrollIndicator={false}>
        <View style={{ height: 10 }} />
        <StationCart
          title={"Dhaka Station"}
          address={"Ashulia, Saver, Dhaka"}
        />
        <StationCart
          title={"Dhaka Station"}
          address={"Ashulia, Saver, Dhaka"}
        />

        <StationCart
          title={"Dhaka Station"}
          address={"Ashulia, Saver, Dhaka"}
        />

        <StationCart
          title={"Dhaka Station"}
          address={"Ashulia, Saver, Dhaka"}
        />
        <StationCart
          title={"Dhaka Station"}
          address={"Ashulia, Saver, Dhaka"}
        />
        <StationCart
          title={"Dhaka Station"}
          address={"Ashulia, Saver, Dhaka"}
        />
        <StationCart
          title={"Dhaka Station"}
          address={"Ashulia, Saver, Dhaka"}
        />
        <StationCart
          title={"Dhaka Station"}
          address={"Ashulia, Saver, Dhaka"}
        />
        <View style={{ height: 100 }} />
      </ScrollView>
      <TouchableOpacity onPress={()=>{
        setVisible(val=>(!val))
      }} style={{
        position:"absolute",
        bottom:40,
        right:20,
        backgroundColor:"#01395E",
        justifyContent:"center",
        alignItems:"center",
        width:45,
        height:45,
        borderRadius:50
      }}>
        <FontAwesome  name="plus" size={24} color="white" />
      </TouchableOpacity>
      <Modal visible={Visible} onRequestClose={()=>{
        setVisible(val=>(!val))
      }}>
        <AlertView/>
      </Modal>
    </View>
  );
}
const AlertView=({onClose,onOk})=>{
  const [Data,setData]=React.useState()

  return(
    <View style={{
      flex:1,
      backgroundColor:"rgba(0, 0, 0, 0.226)",
      justifyContent:"center",
      alignItems:"center"
    }}>
      <Input placeholder={"Search Station..."} />
     {Data&&(
       <Button buttonName="Done"/>
     )}
      <Button onPress={()=>{
        onClose()
      }} buttonName="Cancel"/>
    </View>
  )
}