import React from 'react';
import { View } from 'react-native'
import { Ionicons } from '@expo/vector-icons';
import Input from './../Components/Input';

function Header(props) {
    const [Search, setSearch] = React.useState(null);
    return (
        <View style={[{
            height: 60,
            backgroundColor: "#fbfbfb",
            alignItems: 'center',
        },props.style]}>
            <View style={{
                height:20,
                width: '90%',
            }}>
                <Input onFocus={() => props.navigation.navigate('Search')} onChange={setSearch} placeholder='Search' icon={() => (
                    <Ionicons name="search" size={24} color='#1C2348' />

                )} />
            </View>


        </View>
    );
}

export default Header