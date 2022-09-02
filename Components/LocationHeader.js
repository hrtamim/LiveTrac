import React from 'react';
import { View } from 'react-native'
import { Ionicons } from '@expo/vector-icons';
import Input from './../Components/Input';

function LocationHeader(props) {
    const [LocationSearch, setLocationSearch] = React.useState(null);
    return (
        <View style={{
            
            backgroundColor: 'transparent',
        }}>
            <View style={{
                height:1,
                }}>
                <Input onFocus={() => props.navigation.navigate('LocationSearch')} onChange={setLocationSearch} placeholder='Search' icon={() => (
                    <Ionicons name="search" size={24} color='#1C2348' />

                )} />
            </View>


        </View>
    );
}

export default LocationHeader