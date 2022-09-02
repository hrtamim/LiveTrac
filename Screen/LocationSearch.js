import React from 'react';
import { View, TouchableOpacity, Text, TextInput, StyleSheet, ScrollView, StatusBar } from 'react-native';
import { Ionicons } from '@expo/vector-icons';
import { Entypo } from '@expo/vector-icons';
import { useNavigation } from '@react-navigation/native';
import MapView from 'react-native-maps';


function LocationSearch(props) {

    const [LocationSearch, setLocationSearch] = React.useState(null);
    const [Value, setValue] = React.useState(true);
    const navigation = useNavigation()

    return (
        <View style={{


        }}>
            
            
            <View>
                <View style={{
                    height: 1,
                    width: '90%',
                    backgroundColor:"transparent",
                    flexDirection: 'row',
                    position:'absolute',
                    zIndex:150,
                    


                }}>
                    
                    <View style={{
                        height: 45,
                        alignItems: 'center',
                        marginLeft: 20,
                        width: 100,
                        borderColor: '#808080',
                        borderWidth: 1,
                        borderRadius: 25,
                        flexDirection: 'row',
                        backgroundColor:'white',
                        flex: 4,
                        marginTop: 10,
                    }}>
                        <Ionicons style={{
                            marginLeft: 10,
                          
                            flex: 1,
                            
                        }} name="search" size={24} color='#1C2348' />
                        <TextInput onFocus={() => setValue(false)} onChange={setLocationSearch} placeholder='Search' style={{
                            height: 50,
                            borderRadius: 25,
                            width: '70%',
                            flex: 4,
                            padding: 10,



                        }}>

                        </TextInput>
                        <TouchableOpacity style={{
                            flex: 1,
                            marginLeft: '10%'

                        }}>
                            <Entypo name="circle-with-cross" size={24} color='#1C2348' />
                        </TouchableOpacity>

                    </View>
                    
                    

                </View>
                
            </View>
             
            <MapView style={{
         height:'100%',
         width:'100%',
         }}>
            
         </MapView>



            <StatusBar barStyle={'dark-content'} backgroundColor={'white'} />
        </View>
        

    );
}

export default LocationSearch;

const styles = StyleSheet.create({
    box: {
        borderWidth: 1,
        borderColor: '#808080',
        marginLeft: 10,
        borderRadius: 25,

    }

})


function Recent(props) {
    return (
        <TouchableOpacity style={{

            flexDirection: 'row',
            margin: 5,
        }}>
            <View style={styles.box}>
                <Text style={{
                    padding: 5,
                    color: '#808080',
                }}>
                    {props.title}
                </Text>
            </View>

        </TouchableOpacity>
    );
}

