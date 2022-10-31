import React from 'react';
import { StatusBar, View } from 'react-native'
import { Ionicons } from '@expo/vector-icons';
import Input from './../Components/Input';

function LocationHeader(props) {
    const [LocationSearch, setLocationSearch] = React.useState(null);
    return (
        <View style={{

            backgroundColor: 'transparent',
        }}>
            <StatusBar backgroundColor="#01395E" barStyle="light-content" />
            <View style={{
                marginTop:30
            }}>
                <Input onFocus={() => props.navigation.navigate('LocationSearch')} onChange={setLocationSearch} placeholder='Search' icon={() => (
                    <Ionicons name="search" size={24} color='#1C2348' />

                )} />
            </View>


        </View>
    );
}

export default LocationHeader