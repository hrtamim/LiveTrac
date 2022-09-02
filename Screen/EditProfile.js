import React from 'react'
import { View, Text, TouchableOpacity, ScrollView, Image, TextInput } from 'react-native'
import { Entypo } from '@expo/vector-icons';
import ListCart from '../Components/ListCart';
import { useNavigation } from '@react-navigation/native';

function Profile() {
    const navigation = useNavigation()
    return (
        <View style={{
            alignItems: 'center',

        }}>
            <View style={{
                height: 130,
                width: 130,
                borderRadius: 65,
                backgroundColor: 'red',
                marginTop: 80,


            }}>
                <Image style={{
                    height: 130,
                    width: 130,
                    borderRadius: 65,
                }} source={{ uri: 'https://i.pinimg.com/170x/6b/85/fb/6b85fb3448ce23c2d48c3ea0924628bf.jpg' }} />


            </View>
            <View style={{
                flexDirection: 'row',
            }}>
                <View style={{
                    marginLeft: 20
                }}>
                    <View style={{
                        marginTop: 5
                    }}>
                        <TextInput style={{
                            fontWeight: 'bold'
                        }}>
                            Mowmita Rahman
                        </TextInput>
                    </View>
                    <View style={{
                        height: 2,
                        width: '100%',
                        backgroundColor: 'black'
                    }}>

                    </View>

                    <View style={{


                    }}>
                        <TextInput>
                            +8801761143991
                        </TextInput>
                    </View>
                    <View style={{
                        height: 2,
                        width: '100%',
                        backgroundColor: 'black'
                    }}>

                    </View>

                </View>

            </View>
            <TouchableOpacity style={{
                height: 30,
                width: 60,
                borderRadius: 5,
                backgroundColor: 'red',
                marginTop: 5,
                alignItems: 'center',
                justifyContent: 'center'
            }}>
                <Text>
                    Save
                </Text>
            </TouchableOpacity>

            <View style={{
                height: 400,
                width: '90%',
                alignItems: 'center',
                backgroundColor: 'white',
                marginTop: 20,
                borderRadius: 10
            }}>
                <Text style={{
                    fontWeight: 'bold',
                    fontSize: 15,
                    marginTop: 10,
                }}>
                    Order List
                </Text>
                <View style={{
                    height: 2,
                    width: '70%',
                    backgroundColor: 'black'
                }}>

                </View>
                <ListCart /><ListCart /><ListCart />
                <ListCart /> 


            </View>




        </View>

    )
}
export default Profile;