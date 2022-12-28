import React from 'react';
import { Dimensions, Text, View } from 'react-native';
import D from '../Components/D';
import Button from '../Components/Button'
const {width,height}=Dimensions.get("window")
function Location(props) {
    return (
        <View style={{
            height: '100%',
            alignItems: 'center',
            paddingHorizontal: 20,
            justifyContent:'center'

        }}>
            <View>
                <D style={{ width: width-100,
                marginVertical:5 }} placeholder='Train Type' DATA={['Intner City', 'Mail']} />
                <D style={{ width: width-100,
                marginVertical:5 }} placeholder='Select Station' DATA={['Dhaka',
                        'Chittagong',
                        'Dinajpur',
                        'Dewangong',
                        'Sylhet',
                        'Noakhali',
                        'Kisoregonj',
                        'BB_East',
                        'Lalmonirhat',
                        'Santahar',
                        'Rangpur',
                        'Ishurdi',
                        'Mohangonj',
                        'Khulna',
                        'Rajshahi',
                        'Saidpur',
                        'Chilahati',
                        'Goalonda hat',
                        'Dhaka Cantt',
                        'Kolkata'



                    ]} />
                <D style={{ width: width-100,
                marginVertical:5 }} placeholder='Select Train' DATA={[
                    'Subarna Express',
                    'Mohanagar Goduli',
                    'Mohanagar Provati',
                    'Ekota Express',
                    'Tista Express',
                    'Parabat  Express',
                    'Upukol Express',
                    'Joyantika Express',
                    'Paharia Express',
                    'Mohanagar Provati',
                    'Mohanagar Goduli',
                    'Uddayan Express',
                    'Megna Express',
                    'Agnibina Express',
                    'Egarosindhur Provati',
                    'Upaban Express',
                    'Turna Express',
                    'Bharamaputra',
                    'Jamuna Express',
                    'Egarosindhur Goduli',
                ]} />

            </View>
            <Button buttonName='NEXT' />
        </View>
    );
}

export default Location;