import React from 'react';
import { TouchableOpacity, Text, Image, SafeAreaView, View, TextInput, } from 'react-native';
import { MaterialIcons } from '@expo/vector-icons';
import icon from '../assets/a.png'
import Input from './../Components/Input'
import Button from '../Components/Button';
import { FontAwesome } from '@expo/vector-icons';
import { Entypo } from '@expo/vector-icons';

function DeviceLogin(props) {
    const [UserName, setUserName] = React.useState(null);
    const [Keyword, setKeyword] = React.useState(null);
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
                marginTop:'8%',
                alignItems:'center'
            }}>
                <Input onChange={setUserName} placeholder='Device id' icon={() => (
                    <FontAwesome name="user-circle-o" size={30} color="#1C2348" />
                )} />
                <Input onChange={setKeyword} placeholder='Keyword' icon={() => (
                    <Entypo name="lock" size={30} color="#1C2348" />
                )} />
                <Button onPress={() => { props.navigation.navigate('Service Status') }} buttonName='CONTINUE' disable={UserName && Keyword ? false : true}>
                
                </Button>
            </View>
            <View style={{
                marginTop:30,
            }}>
            <TouchableOpacity onPress={()=>{props.navigation.navigate('Create new account')}} style={{
                    marginTop: 20,
                }}>
                    <Text style={{
                        fontWeight: 'bold',
                        color: '#1C2348',
                    }} >
                       Find your device !
                    </Text>
                </TouchableOpacity>
            </View>

        </View>
    );
}

export default DeviceLogin;