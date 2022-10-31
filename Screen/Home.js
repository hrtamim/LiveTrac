import React from 'react';
import {
    TouchableOpacity, Text, SafeAreaView,
    Image, ScrollView, View, Dimensions
} from 'react-native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
const Tab = createBottomTabNavigator();
import HomeScreen from './HomeScreen';
import Header from '../Components/Header';
import Bottom from '../Components/Bottom';
import Profile from './Profile';
import Location from './Location';
import LocationHeader from '../Components/LocationHeader';

function Home(props) {
    const navigation=props.navigation
    return (
        <Tab.Navigator tabBar={(props)=><Bottom {...props}/>}>
        <Tab.Screen options={{header:(props)=><Header {...props} />}} name="Home Screen" component={HomeScreen} />
        <Tab.Screen options={{headerShown:false}} name="Profile" component={Profile} />
        <Tab.Screen options={{headerShown:false}} name="Location" component={Location} />
        
        
        
      </Tab.Navigator>
    );
}

export default Home;