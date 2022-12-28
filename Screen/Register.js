import React from 'react';
import { TouchableOpacity, Text, Image, SafeAreaView, View, TextInput, } from 'react-native';
import { MaterialIcons } from '@expo/vector-icons';
import { FontAwesome } from '@expo/vector-icons';
import { Entypo } from '@expo/vector-icons';
import icon from '../assets/a.png'
import Input from './../Components/Input'
import Button from '../Components/Button';

function Register(props) {
    const [UserName, setUserName] = React.useState(null);
    const [UserEmail, setEmail] = React.useState(null);
    const [Password, setPassword] = React.useState(null);
    const navigation = props.navigation
    return (
        <View style={{

            alignItems: 'center',
            justifyContent: 'center',
        }}>
            <View style={{
                alignItems: 'center',
                justifyContent: 'center',
                height: 100,
                width: 100,
                borderRadius: 70,
                backgroundColor: '#1C2348',
                marginTop: '40%',

            }}>
                <Image style={{
                    height: 80,
                    width: 80,
                }} source={icon} />
            </View>
            <View style={{
                width: '100%',
                marginTop: '8%',
                alignItems:'center'
            }}>
                <Input onChange={setEmail} placeholder='Email' icon={() => (
                    <MaterialIcons name="email" size={24} color="#1C2348" />

                )} />
                {/* <Input onChange={setUserName} placeholder='User name' icon={() => (
                    <FontAwesome name="user-circle-o" size={30} color="#1C2348" />
                )} /> */}
                <Input onChange={setPassword} placeholder='Password' icon={() => (
                    <Entypo name="lock" size={30} color="#1C2348" />
                )} />
                <View>

                </View>
                <Button buttonName='REGISTER' disable={UserName && Password && UserEmail ? false : true}>

                </Button>
            </View>
            <TouchableOpacity onPress={() => { navigation.navigate('Log In') }} style={{
                marginTop: 20,
            }}>
                <Text style={{
                    fontWeight: 'bold',
                    color: '#1C2348',
                }} >
                    Already have an account?
                </Text>
            </TouchableOpacity>

        </View>
    );
}

export default Register;