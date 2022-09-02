import React from 'react'
import { View, Text,TouchableOpacity,ScrollView,Image } from 'react-native'
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
                    borderRadius:65,
                }} source={{ uri: 'https://i.pinimg.com/170x/6b/85/fb/6b85fb3448ce23c2d48c3ea0924628bf.jpg' }} />
             

            </View>
            <View style={{
                flexDirection: 'row',
            }}>
                <View style={{
                    marginLeft:20
                }}>
                    <View style={{
                        marginTop: 5
                    }}>
                        <Text style={{
                    fontWeight:'bold'
                }}>
                            Mowmita Rahman
                        </Text>
                    </View>

                    <View style={{
                        
                        
                    }}>
                        <Text>
                            +8801761143991
                        </Text>
                    </View>

                </View>
                <TouchableOpacity onPress={() => { navigation.navigate('Edit Profile') }} style={{
                    marginTop:15,
                    marginLeft:5,
                    
                }}>
                <Entypo style={{
                    marginTop:5
                }} name="edit" size={20} color="black" />
                </TouchableOpacity>
            </View>
            <View style={{
                height:400,
                width:'90%',
                alignItems:'center',
                backgroundColor:'white',
                marginTop:20,
                borderRadius:10
            }}>
                <Text style={{
                    fontWeight:'bold',
                    fontSize:15,
                    marginTop:10,
                }}>
                    Order List
                </Text>
                <View style={{
                    height:2,
                    width:'70%',
                    backgroundColor:'black'
                }}>

                </View>
                <ListCart/><ListCart/><ListCart/>
                <ListCart/>
                

            </View>
            



        </View>

    )
}
export default Profile;