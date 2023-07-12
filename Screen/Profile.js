import React, { useState } from "react";
import {
  View,
  Text,
  TouchableOpacity,
  ScrollView,
  Image,
  Dimensions,
  TextInput,
  Switch,
  StyleSheet,
} from "react-native";
import { Entypo } from "@expo/vector-icons";
import { useNavigation } from "@react-navigation/native";
import D from "../Components/D";
const { width, height } = Dimensions.get("window");
import i from "../assets/i.jpg";
import { useEffect } from "react";
import { getDatabase, ref, onValue, set } from "firebase/database";
import { database } from "../firebase";

function Profile({ route }) {
  const [isEnabled, setIsEnabled] = useState(false);
  const toggleSwitch = () => setIsEnabled((previousState) => !previousState);
  const params = route.params;
  const user = params.user;
  const navigation = useNavigation();
  const date = new Date();
  const [year, setYear] = useState();
  const [month, setMonth] = useState();
  const [day, setDay] = useState();
  const [gender, setGender] = useState();
  const [address, setAddress] = useState();
  const [name, setName] = useState("Live Track");
  const starCountRef = ref(database, `users/${user?.uid}`);

  
  useEffect(() => {
    set(starCountRef, {
      name: name ? name : " ",
      gender: gender ? gender : "Male",
      month: month ? month : "10",
      year: year ? year : "2002",
      day: day ? day : "10",
      address:address?address:" "
    });
  }, [gender, address, day, month, year]);
  useEffect(() => {
    onValue(starCountRef, (snapshot) => {
      const data = snapshot.val();
      if (data) {
        setName(data?.name);
        setGender(data?.gender);
        setDay(data?.day);
        setMonth(data?.month);
        setYear(data?.year);
      }
    });
  }, []);

  return (
    <ScrollView style={{ flex: 1 }} showsVerticalScrollIndicator={false}>
      <View style={art.circle}></View>

      <View
        style={{
          alignItems: "center",
        }}>
        <View style={art.iCircle}>
          <Image style={art.pImage} source={i} />
        </View>
        <View
          style={{
            flexDirection: "row",
          }}>
          <View
            style={{
              marginLeft: 20,
            }}>
            <View
              style={{
                marginTop: 5,
              }}>
              <TextInput
                value={name}
                onChangeText={setName}
                onEndEditing={e=>{
                  setName(e.nativeEvent.text)
                }}
                placeholder="Address"
                style={{
                  color: "white",
                  fontSize: 16,
                  fontWeight: "700",
                  textAlign: "center",
                }}
              />
            </View>

            <View style={{}}>
              <Text
                style={{
                  color: "#fff",
                }}>
                {user?.email}
              </Text>
            </View>
          </View>
        </View>
        <View showsVerticalScrollIndicator={false} style={art.pCart}>
          <Text style={art.bText}>Account</Text>
          <View style={{ paddingHorizontal: 10, paddingVertical: 15 }}>
            <View style={{}}>
              <Text style={{ fontSize: 16 }}>Gender:</Text>
              <D
                onChange={setGender}
                style={{ width: width - 100, marginVertical: 10 }}
                DATA={["Male", "Female"]}
              />
            </View>
            <View style={{ marginVertical: 10 }}>
              <Text style={{ fontSize: 16 }}>Birth Year:</Text>
              <View
                style={{
                  width: width - 100,
                  flexDirection: "row",
                  flexWrap: "wrap",
                }}>
                <D
                  placeholder={"Year"}
                  style={{ marginVertical: 10 }}
                  DATA={[
                    "1990",
                    "1991",
                    "1992",
                    "1993",
                    "1994",
                    "1995",
                    "1996",
                    "1997",
                    "1998",
                    "1999",
                    "2000",
                    "2001",
                    "2002",
                    "2003",
                    "2003",
                    "2004",
                  ]}
                  onChange={setYear}
                />
                <View style={{ width: 20 }} />
                <D
                  placeholder={"Month"}
                  style={{ marginVertical: 10 }}
                  onChange={setMonth}
                  DATA={[
                    "1",
                    "2",
                    "3",
                    "4",
                    "5",
                    "6",
                    "7",
                    "8",
                    "9",
                    "10",
                    "11",
                    "12",
                  ]}
                />
                <View style={{ width: 20 }} />
                <D
                  placeholder={"Date"}
                  onChange={setDay}
                  style={{ marginVertical: 10 }}
                  DATA={[
                    "1",
                    "2",
                    "3",
                    "4",
                    "5",
                    "6",
                    "7",
                    "8",
                    "9",
                    "10",
                    "11",
                    "12",
                    "13",
                    "14",
                    "15",
                    "16",
                    "17",
                    "18",
                    "19",
                    "20",
                    "21",
                    "22",
                    "23",
                    "24",
                    "25",
                    "26",
                    "27",
                    "28",
                    "29",
                    "30",
                  ]}
                />
              </View>
            </View>
            <Text style={{ fontSize: 16 }}>Address</Text>
            <TextInput
              value={address}
              onChangeText={setAddress}
              onEndEditing={e=>{
                setAddress(e.nativeEvent.text)
              }}
              placeholder="Address"
              style={art.tInput}
            />
          </View>

          <Text style={art.bText}>Help & Legal</Text>
          <View style={{ marginLeft: 0 }}>
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
        </View>
      </View>
      <View
        style={{
          height: 40,
        }}
      />
    </ScrollView>
  );
}
export default Profile;

const art = StyleSheet.create({
  touch: {
    height: 40,
    justifyContent: "center",
    paddingHorizontal: 10,
    borderRadius: 10,
    marginVertical: 5,
  },
  pCart: {
    width: "90%",
    backgroundColor: "white",
    marginTop: 20,
    borderRadius: 10,
    opacity: 0.8,
    padding: 10,
    paddingBottom: 20,
  },
  tInput: {
    width: "87%",
    padding: 10,
    borderRadius: 5,
    borderWidth: 1,
    backgroundColor: "#fff",
    marginVertical: 10,
    borderColor: "#e5e5e5",
    width: width - 100,
    minHeight: 45,
  },
  toogle: {
    borderRadius: 10,
    flexDirection: "row",
    height: 40,
    width: "100%",
    backgroundColor: "#fff ",
    justifyContent: "space-between",
    paddingHorizontal: 10,
    alignItems: "center",
    marginVertical: 10,
    borderWidth: 1,
    borderColor: "#808080",
  },
  circle: {
    height: width,
    width: width,
    backgroundColor: "#01092A",
    position: "absolute",
    borderRadius: width / 2,
    top: -60,
    left: -60,
  },
  circle2: {
    height: width,
    width: width,
    backgroundColor: "#01092A",
    position: "absolute",
    borderRadius: width / 2,
    top: 0,
    left: 0,
  },
  iCircle: {
    height: 130,
    width: 130,
    marginTop: 80,
    borderWidth: 1,
    borderColor: "#e5e5e5",
    overflow: "hidden",
    borderRadius: 100,
    marginBottom: 10,
  },
  pImage: {
    height: 130,
    width: 130,
    borderRadius: 65,
  },
  bText: {
    fontSize: 16,
    fontWeight: "bold",
  },
});
