import {
  StyleSheet,
  Text,
  View,
  ScrollView,
  SafeAreaView,
  StatusBar,
} from "react-native";
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
import { Provider } from "react-redux";
import store from "./store";
import { getAuth, onAuthStateChanged } from "firebase/auth";
import { useEffect, useState } from "react";
import {app} from "./firebase"

const Stack = createNativeStackNavigator();
export default function App() {
  const [user, setUser] = useState(false);
  const [loader,setLoader]=useState(false)
  const auth=getAuth(app)
  useEffect(() => {
    setLoader(true)
    onAuthStateChanged(auth, (user) => {
      if (user) {
        setLoader(false)
        setUser(user);

      } else {
        setLoader(false)
        setUser(null);
      }
    });
  }, []);

  return (
    <Provider store={store}>
      <SafeAreaView style={{ flex: 1 }}>
        <StatusBar backgroundColor={"white"} barStyle="dark-content" />
        <NavigationContainer>
          <Stack.Navigator>
            {user ? (
              <Stack.Screen
                options={{ headerShown: false }}
                name="Home"
                initialParams={{
                  user:user
                }}
                component={Home}
              />
            ) : (
              <Stack.Screen
                options={{ headerShown: false }}
                name="Log In"
                component={LogIn}
              />
            )}

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
    </Provider>
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
