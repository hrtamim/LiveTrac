import React from 'react';
import { View , Image,Text} from 'react-native';
import { AntDesign } from '@expo/vector-icons';

function ListCart(props) {
    
    return (
        <View style={{
            
            height:70,
            width:'90%',
            
            marginTop:10,
            borderRadius:10,
            flexDirection:'row',
            borderWidth:1,
            borderColor:'black',
            alignItems:'center',
            padding:10,
        }}>
              <View style={{
                
              }}>
              <Image style={{
                    height: 60,
                    width: 60,
                    borderRadius:10,
                }} source={{ uri: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQIcQRq3b_9SZ5yRUU5Orb-8jxKpe7D5rRN5g&usqp=CAU' }} />
              </View>
              <Text style={{
                marginLeft:5
              }}>
Multiple Fast Food Item
              </Text>
              <Text style={{
                marginLeft:10,
                color:'green'
              }}>
-22
              </Text>
              <AntDesign name="arrowdown" size={24} color="green" />
              
        
        </View>
    );
}

export default ListCart;