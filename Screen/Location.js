import React from 'react';
import { Dimensions, Text, View } from 'react-native';
import D from '../Components/D';
import Button from '../Components/Button'
import { useState } from 'react';
import { useEffect } from 'react';
import ActivityLoader from '../Components/ActivityLoader';
const {width,height}=Dimensions.get("window")
import { getDatabase, ref, onValue } from "firebase/database";
import { database } from '../firebase';

function Location({navigation}) {
    const [loader,setLoader]=useState(false)
    const starCountRef = ref(database, 'train/');
    const [station,setStation]=useState()
    const [train,setTrain]=useState()
    
    
    useEffect(()=>{
        onValue(starCountRef, (snapshot) => {
            const data = snapshot.val();
            
          })
    },[])
    if(loader){
        return <ActivityLoader/>
    }
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
                <D style={{ width: width-100,
                marginVertical:5 }} placeholder='Select Your station' DATA={['Dhaka',
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
            <Button onPress={()=>{
                navigation?.navigate("LocationSearch")
            }} buttonName='NEXT' />
        </View>
    );
}

export default Location;