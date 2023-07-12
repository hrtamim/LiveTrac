import React,{useEffect,useState} from "react";
import {
  TouchableOpacity,
  Text,
  SafeAreaView,
  Image,
  ScrollView,
  View,
  Dimensions,
} from "react-native";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
const Tab = createBottomTabNavigator();
import HomeScreen from "./HomeScreen";
import Header from "../Components/Header";
import Bottom from "../Components/Bottom";
import Profile from "./Profile";
import Location from "./Location";
import LocationHeader from "../Components/LocationHeader";
import * as Locations from 'expo-location';
import { useDispatch } from "react-redux";
import { setCurrentLocation } from "../Redux/currentLocation";

function Home({navigation,route}) {
  //const navigation = props.navigation;
  const params=route.params;
  const user=params.user;
  const [location, setLocation] = useState(null);
  const [errorMsg, setErrorMsg] = useState(null);
  const dispatch=useDispatch()

  useEffect(() => {
    (async () => {
      
      let { status } = await Locations.requestForegroundPermissionsAsync();
      if (status !== 'granted') {
        setErrorMsg('Permission to access location was denied');
        return;
      }

      setInterval(()=>{
        getLocation()
      },1000)
      
    })();
  }, []);

  const getLocation=async()=>{
    let location = await Locations.getCurrentPositionAsync({});
    dispatch(setCurrentLocation(location))
    setLocation(location);
    console.log(location)
  }
  return (
    <Tab.Navigator tabBar={(props) => <Bottom {...props} />}>
      <Tab.Screen
        options={{ header: (props) => <Header {...props} /> }}
        name="Home Screen"
        component={HomeScreen}
      />
      <Tab.Screen 
      initialParams={{user:user}}
        options={{ headerShown: false }}
        name="Profile"
        component={Profile}
      />
      <Tab.Screen
        options={{ headerShown: false }}
        name="Location"
        component={Location}
      />
    </Tab.Navigator>
  );
}

export default Home;
