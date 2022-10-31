import React from 'react';
import { Text, View } from 'react-native';
import D from '../Components/D';
import Button from '../Components/Button'
function Location(props) {
    return (
        <View style={{
            height: '100%',
            alignItems: 'center',
            paddingHorizontal: 20,
            justifyContent:'center'

        }}>
            <View >
                <D style={{ width: '100%' }} placeholder='Train Type' DATA={['Intner City', 'Mail']} />
                <View style={{ flexDirection: 'row', justifyContent: 'space-between', marginVertical: 10 }}>
                    <D style={{ width: 150 }} placeholder='From' DATA={['Dhaka',
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
                    <D style={{ width: 150 }} placeholder='To' DATA={['Dhaka',
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
                </View>
                <D style={{ width: '100%' }} placeholder='Select Train' DATA={['Subarna Express',
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