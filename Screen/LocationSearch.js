import React from "react";
import {
  View,
  TouchableOpacity,
  Text,
  TextInput,
  StyleSheet,
  ScrollView,
  StatusBar,
} from "react-native";
import { Ionicons } from "@expo/vector-icons";
import { Entypo } from "@expo/vector-icons";
import { useNavigation } from "@react-navigation/native";
import MapView,{Marker} from "react-native-maps";
import { useSelector } from "react-redux";
import ActivityLoader from "../Components/ActivityLoader";

function LocationSearch(props) {
  const [LocationSearch, setLocationSearch] = React.useState(null);
  const [Value, setValue] = React.useState(true);
  const navigation = useNavigation();
  const currentLocation = useSelector((state) => state.currentLocation);

  if(!currentLocation){
    return <ActivityLoader/>
  }
  return (
    <View style={{ flex: 1 }}>
      {/* <View >
        <Text
          style={{
            fontSize: 20,
            marginHorizontal: 20,
            marginTop: 10,
          }}>
          Ekota Express
        </Text>
        <Text
          style={{
            fontSize: 16,
            marginTop: 5,
            marginHorizontal: 20,
          }}>
          Current Station:{" "}
        </Text>
      </View> */}
      <MapView
        region={currentLocation.coords}
        style={{
          flex: 1,
        }}>
            <Marker
          coordinate={{ latitude: currentLocation.coords.latitude, longitude: currentLocation.coords.longitude }}
          
        />
        </MapView>

      <StatusBar barStyle={"dark-content"} backgroundColor={"white"} />
    </View>
  );
}

export default LocationSearch;

const styles = StyleSheet.create({
  box: {
    borderWidth: 1,
    borderColor: "#808080",
    marginLeft: 10,
    borderRadius: 25,
  },
});

function Recent(props) {
  return (
    <TouchableOpacity
      style={{
        flexDirection: "row",
        margin: 5,
      }}>
      <View style={styles.box}>
        <Text
          style={{
            padding: 5,
            color: "#808080",
          }}>
          {props.title}
        </Text>
      </View>
    </TouchableOpacity>
  );
}
