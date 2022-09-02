import React from 'react';
import {View,Image,Text,TouchableOpacity} from 'react-native';
import { AntDesign } from '@expo/vector-icons';
import { useNavigation } from '@react-navigation/native';

function FoodCart(props) {
    const data = props.data
    const navigation = useNavigation()
    return (
        <TouchableOpacity onPress={() => { navigation.navigate('Food Details') }}  style={{
            
            margin: 5,

            shadowOffset: {
                height: 1,
                width: 1,
            },
            shadowColor: "black",
            shadowRadius: 10,
            elevation: 10,
            shadowOpacity: .5,
            borderRadius: 10,
            padding: 10,
            flexDirection: 'row',
            backgroundColor: 'white',
        }}>
            <View style={{
                alignItems: 'center',
                flex: 2,
                height: '100%',

                justifyContent: 'center',
                alignItems: 'center',


            }}>
                <Image style={{
                    height: 80,
                    width: 80,
                }} source={{ uri: data.Image }} />
            </View>
            <View style={{
                flex:4,
                justifyContent:'center',
            }}>
                <Text>
                    Multiple fast food item
                </Text>
            </View>
            <View style={{
                flex:1,
                justifyContent:'center',
                flexDirection:'row',
                alignItems:'center',
            }}>
                <Text>
                    33
                </Text>
                <AntDesign name="arrowup" size={24} color="red" />
                
            </View>
        </TouchableOpacity>
    );
}

export default FoodCart;