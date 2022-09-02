import React from 'react';
import { TouchableOpacity, Text, SafeAreaView, View, TextInput, } from 'react-native';

function Button(props) {
    return (
        <TouchableOpacity onPress={props.onPress} disabled={props.disable} style={{
            height: 45,
            width: '90%',
            borderColor:'#808080', 
            borderWidth: 1,
            borderRadius:25,
            
            alignItems: 'center',
            marginTop: 10,
            marginBottom: 10,
            flexDirection: 'row',
            
            justifyContent:'center',
            backgroundColor:props.disable?'transparent':'#1C2348',
            
            
        }}>
        <Text style={{
            color:!props.disable?'white':'#1C2348',
            fontWeight:'bold',
        }} >
            {props.buttonName}
        </Text>
        </TouchableOpacity>
    );
}

export default Button;