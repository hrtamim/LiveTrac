
import { StyleSheet, Text, View, ScrollView, SafeAreaView ,StatusBar} from "react-native";
import LogIn from "./Screen/Login";
import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import ForgetPassword from "./Screen/ForgetPassword";
import Register from "./Screen/Register";
import Home from "./Screen/Home";
import Search from "./Screen/Search";
import FoodDetails from "./Screen/FoodDetails";
import OrderConfirmation from "./Screen/OrderConfirmation";
import LocationSearch from "./Screen/LocationSearch";
import EditPtofile from "./Screen/EditProfile";
import DeviceLogin from "./Screen/DeviceLogin";
import ServiceStatus from "./Screen/ServiceStatus";
import AdminHome from "./Screen/AdminHome";

const Stack = createNativeStackNavigator();
export default function App() {
  return (
    <SafeAreaView style={{ flex: 1 }}>
      <StatusBar backgroundColor={"white"} barStyle="dark-content" />
      <NavigationContainer>
        <Stack.Navigator>
          <Stack.Screen
            options={{ headerShown: false }}
            name="Log In"
            component={LogIn}
          />
          <Stack.Screen
            options={{ headerShown: false }}
            name="Forget Password"
            component={ForgetPassword}
          />
          <Stack.Screen
            options={{ headerShown: false }}
            name="Create new account"
            component={Register}
          />
          <Stack.Screen
            options={{ headerShown: false }} 
            name="Home"
            component={Home}
          />
          <Stack.Screen
            options={{ headerShown: false }}
            name="Search"
            component={Search}
          />
          <Stack.Screen
            options={{ headerShown: false }}
            name="Food Details"
            component={FoodDetails}
          />
          <Stack.Screen
            options={{ headerShown: false }}
            name="Order Confirmation"
            component={OrderConfirmation}
          />
          <Stack.Screen
            options={{ headerShown: false }}
            name="LocationSearch"
            component={LocationSearch}
          />
          <Stack.Screen
            options={{ headerShown: false }}
            name="Edit Profile"
            component={EditPtofile}
          />
          <Stack.Screen
            options={{ headerShown: false }}
            name="Device Login"
            component={DeviceLogin}
          />
          <Stack.Screen
            options={{ headerShown: false }}
            name="AdminHome"
            component={AdminHome}
          />
        </Stack.Navigator>
      </NavigationContainer>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    alignItems: "center",
    justifyContent: "center",
  },
});
