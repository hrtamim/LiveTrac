import React from 'react';
import { TouchableOpacity, Text, Image, SafeAreaView, View, TextInput, Alert, } from 'react-native';
import { MaterialIcons } from '@expo/vector-icons';
import icon from '../assets/a.png'
import Input from './../Components/Input'
import Button from '../Components/Button';
import { FontAwesome } from '@expo/vector-icons';
import { Entypo } from '@expo/vector-icons';
import Password from 'antd/lib/input/Password';
import { database } from '../firebase';
import { getDatabase, ref, onValue } from "firebase/database";

function DeviceLogin(props) {
    const [UserName, setUserName] = React.useState(null);
    const [Keyword, setKeyword] = React.useState(null);

    const check=()=>{
        onValue(ref(database,`train/${UserName}`), (snapshot) => {
            const data = snapshot.val();
            if(data){
                props.navigation.navigate("AdminHome",{data:data})
            }else{
                Alert.alert("Invalid Credientials")
            }
          });
    }
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
                <Input value={UserName} onChange={setUserName} placeholder='Device id' icon={() => (
                    <FontAwesome name="user-circle-o" size={30} color="#1C2348" />
                )} />
                <Input value={Password} onChange={setKeyword} placeholder='Keyword' icon={() => (
                    <Entypo name="lock" size={30} color="#1C2348" />
                )} />
                <Button onPress={() => { 
                    check()
                 }} buttonName='CONTINUE' disable={UserName && Keyword ? false : true}>
                
                </Button>
            </View>
            <View style={{
                marginTop:10,
                justifyContent:"center",
                alignItems:"center"
            }}>
            
                <TouchableOpacity onPress={()=>{props.navigation.goBack()}} style={{
                    marginTop: 20,
                }}>
                    <Text style={{
                        fontWeight: 'bold',
                        color: '#1C2348',
                    }} >
                       Back
                    </Text>
                </TouchableOpacity>
            </View>

        </View>
    );
}

export default DeviceLogin;