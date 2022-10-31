import React from 'react';
import { View, StyleSheet, TouchableOpacity, TextInput } from 'react-native';
import { AntDesign } from '@expo/vector-icons';

function Dropdown(props) {
    const [Search, setSearch] = React.useState(null);
    const [Value, setValue] = React.useState(true);
    return ( 
        <View style={{
            width: '100%',
            alignItems: 'center',
            padding: 5,
        }}>
            <TouchableOpacity style={{
                height: 50,

                borderRadius: 10,
                borderWidth: 1,
                flexDirection: 'row',
                justifyContent: 'center',
                alignItems: 'center',
                padding: 10,
                backgroundColor: 'white',
                borderColor: '#808080',
            }}>
                <TextInput onFocus={() => setValue(false)} onChange={setSearch} placeholder='Search' style={{
                    height: 50,
                    borderRadius: 25,

                    flex: 4,


                }}>

                </TextInput>
                <AntDesign style={{

                }} name="down" size={24} color="black" />


            </TouchableOpacity>

        </View>
    );
}

export default Dropdown;