import React from "react";
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
import AdminBottom from "../Components/AdminBottom";
import AdminHomeScreen from "./Admin/AdminHomeScreen";
import AdminProfile from "./Admin/AdminProfile";
import StationList from "./Admin/StationList";
import CommonHeader from "../Components/CommonHeader";

function AdminHome(props) {
  const navigation = props.navigation;
  return (
    <Tab.Navigator tabBar={(props) => <AdminBottom {...props} />}>
      <Tab.Screen
        options={{ header: (props) => <CommonHeader title={"Admin Home"} {...props} /> }}
        name="AdminHomeScreen"
        component={AdminHomeScreen}
      />
      <Tab.Screen
        options={{ header: (props) => <CommonHeader title={"Admin Profile"} {...props} /> }}
        name="AdminProfile"
        component={AdminProfile}
      />
      <Tab.Screen
        options={{ header: (props) => <CommonHeader title={"Station List"} {...props} /> }}
        name="StationList"
        component={StationList}
      />
    </Tab.Navigator>
  );
}

export default AdminHome;
