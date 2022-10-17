import React from 'react';
import { View, Image, Text, StyleSheet } from 'react-native';
import { Entypo } from '@expo/vector-icons';
import { AntDesign } from '@expo/vector-icons';

function RecentOrders(props) {
    return (
        <View style={{
            height: 220,
            width: 160,
            backgroundColor: '#fff',
            padding: 10,
            borderRadius:5,
            shadowOffset:{height:1,width:1},
            shadowOpacity:.7,
            shadowColor:'black',
            shadowRadius:5,
            marginLeft:10,
        }}>
            <View style={{
                flexDirection: 'row',
                width: '100%',
                justifyContent: 'flex-end',

            }}>
                <AntDesign name="checkcircle" size={18} color="green" />
                <Entypo style={{ marginLeft: 5 }} name="circle-with-cross" size={20} color="red" />

            </View>
            <View style={{
                width: '100%',
                alignItems: 'center'
            }}>
                <Image style={{
                    height: 60,
                    width: 60,
                    borderRadius: 10,
                }} source={{ uri: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQIcQRq3b_9SZ5yRUU5Orb-8jxKpe7D5rRN5g&usqp=CAU' }} />

            </View>
            <Text style={style.boldText}>
                Multiple Fast Food Item
            </Text>
            <View style={{ flexDirection: 'row' }}>
                <Text style={style.boldText}>
                    Quantity:
                </Text>
                <Text style={style.normalText}>
                    3 pics
                </Text>
            </View>
            <View style={{ flexDirection: 'row' }}>
                <Text style={style.boldText}>
                    Seat No:
                </Text>
                <Text style={style.normalText}>
                    325 w
                </Text>
            </View>
            <View style={{ flexDirection: 'row' }}>
                <Text style={style.boldText}>
                    Cabin No:
                </Text>
                <Text style={style.normalText}>
                    Ga
                </Text>
            </View>
            <View style={{alignItems:'center',marginTop:10,}}>
                <Text style={{fontSize:12,color:'green'}}>Fast Delevery</Text>
                <Text style={{fontSize:12,}}>12 July 2022</Text>
            </View>
        </View>

    );
}

export default RecentOrders;
const style = StyleSheet.create({
    boldText: {

        fontSize: 12,
        fontWeight: '600'

    },
    normalText: {
        fontSize: 12,
        opacity: .5,
        marginLeft: 5
    }
})