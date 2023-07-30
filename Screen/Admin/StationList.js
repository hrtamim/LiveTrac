import React, { useEffect, useState } from "react";
import {
  ScrollView,
  View,
  TouchableOpacity,
  Modal,
  Dimensions,
  Text,
  Alert,
} from "react-native";
import StationCart from "../../Components/StationCart";
import { FontAwesome } from "@expo/vector-icons";
import Input from "../../Components/Input";
import Button from "../../Components/Button";
import Animated, { FadeIn } from "react-native-reanimated";
const { width, height } = Dimensions.get("window");
import OutsideView from "react-native-detect-press-outside";
import { onValue, ref, set } from "firebase/database";
import { database } from "../../firebase";

export default function StationList() {
  const [Visible, setVisible] = React.useState(false);
  const [station, setStation] = useState([
    {
      title: "Nilphamari Station",
      address: "Nilphamri College Mor, Nilphamari",
    },
  ]);
  // useEffect(() => {
  //   onValue(ref(database, `station`), (snapshot) => {
  //     const data = snapshot.val()
  //     data.map((d)=>{
  //       console.log(d);
  //     })
  //     if (data) {
  //       //setStation(data);
  //       //console.log(data)
  //     } else {
  //       //Alert.alert("Invalid Credientials");
  //     }
  //   });
  // }, []);


  return (
    <View
      style={{
        flex: 1,
      }}>
      <ScrollView showsVerticalScrollIndicator={false}>
        <View style={{ height: 10 }} />
        
        {station &&
          station.map((doc, i) => (
            <StationCart onDelete={()=>{
              setStation(e=>{
                let d=e.filter(d=>d.title!=doc.title)

                return d
              })
            }} key={i}
              title={doc.title}
              address={doc.address}
            />
          ))}

        
        <View style={{ height: 100 }} />
      </ScrollView>
      <TouchableOpacity
        onPress={() => {
          setVisible((val) => !val);
        }}
        style={{
          position: "absolute",
          bottom: 40,
          right: 20,
          backgroundColor: "#01395E",
          justifyContent: "center",
          alignItems: "center",
          width: 45,
          height: 45,
          borderRadius: 50,
        }}>
        <FontAwesome name="plus" size={24} color="white" />
      </TouchableOpacity>
      <Modal
        visible={Visible}
        onRequestClose={() => {
          setVisible((val) => !val);
        }}>
        <AlertView
          onOk={(e) => {
            setVisible(false);
            setStation(f=>{
              f.push(e)
              return f
            })
          }}
          setStation={setStation}
          onClose={() => setVisible((val) => !val)}
        />
      </Modal>
    </View>
  );
}
const AlertView = ({ onClose, onOk,setStation }) => {
  const [Data, setData] = React.useState();
  const API = [
    {
      title: "Nilphamari Station",
      address: "Nilphamri College Mor, Nilphamari",
    },
    {
      title: "Dhaka Station",
      address: "Komlapur, Dhaka, Bangladesh",
    },
    {
      title: "Rangpur Station",
      address: "Khamar mor, Rangpur",
    },
    {
      title: "Gazipur Station",
      address: "Gazipur road",
    },
    {
      title: "Bongo Bondhu Station",
      address: "Taingail",
    },
  ];
  const [SearchInput, setSearchInput] = React.useState();
  const [Selected, setSelected] = React.useState();
  const childRef = React.useRef();
  
  
  return (
    <OutsideView
      style={{
        flex: 1,
      }}
      childRef={childRef}
      onPressOutside={() => {
        // handle press outside of childRef event
        setData(null);
      }}>
      <View
        style={{
          flex: 1,
          backgroundColor: "rgba(0, 0, 0, 0.226)",
          justifyContent: "center",
          alignItems: "center",
        }}>
        <View style={{}}>
          <Input
            value={SearchInput}
            onChange={(e) => {
              setSearchInput(e);
              let arr = API.filter((d) =>
                d.title.toUpperCase().match(e.toUpperCase())
              );
              if (arr.length > 0) {
                setData(arr);
              } else {
                setData(null);
              }
            }}
            placeholder={"Search Station..."}
          />

          {Data && (
            <Animated.View
              ref={childRef}
              entering={FadeIn}
              style={{
                top: -10,
                left: 20,
                backgroundColor: "white",
                zIndex: 500,
                width: width - 40,
                height: 200,
              }}>
              <ScrollView>
                <View style={{ height: 10 }} />
                {Data.map((doc, i) => (
                  <Cart
                    onClick={() => {
                      setSearchInput(doc.title);
                      console.log(doc.title);
                      setSelected(doc);
                      //writeUserData(doc)
                      setData(null);
                    }}
                    address={doc.address}
                    title={doc.title}
                  />
                ))}
                <View style={{ height: 10 }} />
              </ScrollView>
            </Animated.View>
          )}
        </View>
        <View style={{ height: 10 }} />
        {Selected && (
          <Button
            onPress={() => {
              if (onOk) {
                onOk(Selected);
              }
            }}
            buttonName="Done"
          />
        )}
        <Button
          onPress={() => {
            if (onClose) {
              onClose();
            }
          }}
          buttonName="Cancel"
        />
      </View>
    </OutsideView>
  );
};
const Cart = ({ title, address, onClick }) => {
  return (
    <TouchableOpacity
      onPress={() => {
        if (onClick) {
          onClick();
        }
      }}
      style={{
        width: width - 40,
        paddingHorizontal: 20,
        paddingVertical: 10,
      }}>
      <Text
        style={{
          fontSize: 16,
        }}>
        {title}
      </Text>
      <Text
        style={{
          fontSize: 14,
        }}>
        {address}
      </Text>
    </TouchableOpacity>
  );
};
