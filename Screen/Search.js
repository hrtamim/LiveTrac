import React from 'react';
import { View, TouchableOpacity, Text, TextInput, StyleSheet, ScrollView, StatusBar } from 'react-native';
import { Ionicons } from '@expo/vector-icons';
import { Entypo } from '@expo/vector-icons';
import { useNavigation } from '@react-navigation/native';
import FoodCart from '../Components/FoodCart';
import FoodItem from '../Data/FoodItem.json'
import Dropdown from '../Components/Dropdown';

function Search(props) {

    const [Search, setSearch] = React.useState(null);
    const [Value, setValue] = React.useState(true);
    const navigation = useNavigation()

    return (
        <View style={{
marginTop:30

        }}>
        <StatusBar backgroundColor="#01395E" barStyle='light-content'/>
            <View>
                <View style={{
                    height: 60,
                    width: '100%',
                    backgroundColor:"#fbfbfb",
                    flexDirection: 'row',


                }}>
                    
                    <View style={{
                        height: 45,
                        alignItems: 'center',
                        marginLeft: 20,
                        width: '100%',
                        borderColor: '#808080',
                        borderWidth: 1,
                        borderRadius: 25,
                        flexDirection: 'row',
                        flex: 4,
                        marginTop: 10,
                    }}>
                        <Ionicons style={{
                            marginLeft: 10,
                          
                            flex: 1,
                            
                        }} name="search" size={24} color='#1C2348' />
                        <TextInput onFocus={() => setValue(false)} onChange={setSearch} placeholder='Search' style={{
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
                    <TouchableOpacity onPress={() => { navigation.goBack() }} style={{
                        marginTop: 20,
                        marginLeft: 10,
                        flex: 1,
                    }}>
                        <Text>
                            Cancel
                        </Text>
                    </TouchableOpacity>

                </View>
            </View>
            {
                Value ? (
                    <View style={{
                        marginTop: 10,

                        width: '100%',
                        marginLeft: 50,

                    }}>
                        <Text style={{
                            fontWeight: 'bold',
                        }}>
                            Recent Search
                        </Text>
                        <View style={{
                            flexDirection: 'row',
                        }}>
                            <Recent title='porota' />
                            <Recent title='tea' />
                            <Recent title='bread' />
                        </View>
                    </View>
                ) : (
                    
                    <ScrollView>
                    <Dropdown/>
                    
                        {
                            FoodItem && FoodItem.length > 0 ? (
                                FoodItem.map((data, i) => (
                                    <FoodCart key={i} data={data} />

                                ))
                            ) : (
                                <Text>no data</Text>
                            )

                        }
                        
                    </ScrollView>
                )
            }
            



            <StatusBar barStyle={'dark-content'} backgroundColor={'white'} />
        </View>

    );
}

export default Search;

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

