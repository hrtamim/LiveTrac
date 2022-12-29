import React from 'react';
import { TouchableOpacity, Text, SafeAreaView, View, TextInput, } from 'react-native';

function Input(props) {
    
    return (
        <View style={{
            height: 45,
            width:'90%',
            borderRadius: 25,
            borderColor:'#808080',
            borderWidth:1,
            margin: 20,
            alignItems: 'center',
            marginTop:10,
            marginBottom:10,
            flexDirection:'row',
            paddingHorizontal: 15,
            backgroundColor:'white'
        
        
        }}>

            <TextInput value={props.value} onFocus={props.onFocus?props.onFocus:()=>{
                console.log('press')
            }} onChangeText={props.onChange} placeholder={props.placeholder}
            style= {{
                color:'#808080',
                margin:5,
                flex:5,

            }}>

            </TextInput>
            {props.icon&&(
                <props.icon style={{
                    margin: 5,
                    flex:1,
                }}/>
            )}
        </View>
    );
}

export default Input;