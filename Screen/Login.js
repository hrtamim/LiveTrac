import React from 'react';
import {
    TouchableOpacity, Text, SafeAreaView,
    Image, ScrollView, View, Dimensions, Modal
} from 'react-native'
import Input from './../Components/Input'
import { FontAwesome, MaterialIcons } from '@expo/vector-icons';
import { Entypo } from '@expo/vector-icons';
import icon from '../assets/a.png';
import Button from '../Components/Button';
import Alert from '../Components/Alert';


function LogIn(props) {
    const [UserName, setUserName] = React.useState(null);
    const [Password, setPassword] = React.useState(null);
    const [ModalVisible, setModalVisible] = React.useState(false);
    const window = Dimensions.get('window')
    return (
        <ScrollView style={{

        }}>
            <View style={{
                height: window.height,
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
                    marginBottom: 40,
                }}>
                    <Image style={{
                        height: 80,
                        width: 80,
                    }} source={icon} />
                </View>
                <Input onChange={setUserName} placeholder='Email' icon={() => (
                    <MaterialIcons name="email" size={24} color="#1C2348" />
                )} />
                <Input onChange={setPassword} placeholder='Password' icon={() => (
                    <Entypo name="lock" size={25} color="#1C2348" />
                )} />
                <Button onPress={() => { props.navigation.navigate('Home') }} buttonName='LOG IN' disable={UserName && Password ? false : true}>

                </Button>
                <TouchableOpacity onPress={() => { props.navigation.navigate('Device Login') }} style={{
                    marginTop: 20,
                }}>
                    <Text style={{
                        fontWeight: 'bold',
                        color: '#1C2348',
                    }} >
                        Device Login ?
                    </Text>
                </TouchableOpacity>
                <TouchableOpacity onPress={() => { props.navigation.navigate('Forget Password') }} style={{
                    marginTop: 20,
                }}>
                    <Text style={{
                        fontWeight: 'bold',
                        color: '#1C2348',
                    }} >
                        Forget Password ?
                    </Text>
                </TouchableOpacity>
                <TouchableOpacity onPress={() => { props.navigation.navigate('Create new account') }} style={{
                    marginTop: 20,
                }}>
                    <Text style={{
                        fontWeight: 'bold',
                        color: '#1C2348',
                    }} >
                        Create new account
                    </Text>
                </TouchableOpacity>
            </View>
            <Modal visible={false } onRequestClose={() => {
                setModalVisible(!ModalVisible)

            }}>
             <Alert>

             </Alert>
            </Modal>

        </ScrollView>

    );
}

export default LogIn;
