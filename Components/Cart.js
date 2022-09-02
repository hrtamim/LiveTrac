import React from 'react';
import { View, Text, Image, StyleSheet, TouchableOpacity } from 'react-native';
import { MaterialIcons } from '@expo/vector-icons';
import { MaterialCommunityIcons } from '@expo/vector-icons';
import { Entypo } from '@expo/vector-icons';
import { useNavigation } from '@react-navigation/native';

function Cart(props) {
    const data = props.data
    const navigation = useNavigation()
    return (
        <TouchableOpacity onPress={() => { navigation.navigate('Food Details') }} style={{
            height: 170,
            marginTop: 5,
            shadowOffset: {
                height: 1,
                width: 1,
            },
            shadowColor: "#808080",
            shadowRadius: 5,
            elevation: 5,
            shadowOpacity: .1,
            borderRadius: 10,

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
                    height: 100,
                    width: 100,
                }} source={{ uri: data.Image }} />
            </View>
            <View style={{
                flex: 3,
                margin: 10,
            }}>
                <Text style={{
                    fontSize: 15,
                    fontWeight: '500',


                }}>
                Multiple fast food item
                </Text>
                <Text style={{
                    color: '#808080',
                    fontWeight: 'normal',
                    marginTop: 5,
                    textAlign: 'justify'


                }}>
                {data.Description}
                </Text>
                <View style={styles.box}>
                    <MaterialIcons style={{
                        flex: 1,
                    }} name="directions-railway" size={20} color='#1C2348' />
                    <Text style={{

                        flex: 7,
                    }}>
                        {data.RailName}
                    </Text>
                </View>
                <View style={styles.box}>
                    <Entypo style={{
                        flex: 1,
                    }} name="price-tag" size={20} color='#1C2348' />
                    <Text style={{

                        flex: 7,
                    }}>
                        {data.tk} tk
                    </Text>
                </View>
                <View style={styles.box}>
                    <MaterialCommunityIcons style={{
                        flex: 1,
                    }} name="format-list-numbered" size={20} color='#1C2348' />
                    <Text style={{

                        flex: 7,
                    }}>
                        {data.Order} total order
                    </Text>
                </View>
            </View>

        </TouchableOpacity>
    );
}

export default Cart;
const styles = StyleSheet.create({
    box: {
        flexDirection: 'row',
        marginTop: 5,
        width: '100%',
    }
})