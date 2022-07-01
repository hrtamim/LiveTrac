import React from 'react';
import { View, Image,Dimensions,TextInput, Text, TouchableOpacity,ScrollView } from 'react-native';
import Icon from 'react-native-vector-icons/FontAwesome';
import RadioButtonRN from 'radio-buttons-react-native';
import Button from '../Components/Button';
import { useNavigation } from '@react-navigation/native';

function FoodDetails(props) {
    const window = Dimensions.get('window')
    const navigation = useNavigation()
    
    const data = [
        {
          label: 'Fast delivery'
         },
         {
          label: 'Late delivery'
         }
        ];
        
    return (
        <ScrollView>
            <View style={{
                height: 200,
                margin: 10,

                shadowOffset: {
                    height: 1,
                    width: 1,
                },
                shadowColor: "black",
                shadowRadius: 10,
                elevation: 10,
                shadowOpacity: .5,
                borderRadius: 10,
                padding: 10,
                backgroundColor: 'white',
                justifyContent: 'center',
                alignItems: 'center',

            }}>
                <Image style={{
                    height: 150,
                    width: 150,


                }} source={{ uri: "https://i.ibb.co/6428JLJ/Food.png" }} />

            </View>
            <View style={{
                margin: 10,
            }}>

                <Text style={{
                    fontWeight: 'bold',

                }}> Multiple fast food item</Text>
                <Text style={{
                    fontWeight: '300',
                    marginTop: 2,
                }}> The useLocation hook returns the location object that represents the current URL. You can think about it like a useState that returns a new location whenever the URL changes.</Text>

                <TouchableOpacity>
                    <Text style={{
                        fontWeight: 'bold',
                        color: 'red',
                        marginTop: 2,
                    }}> Read More</Text>
                </TouchableOpacity>
                <Text style={{
                    fontWeight: 'bold',
                    marginTop: 5,
                }}>price: 380 tk
                </Text>
                <View style={{
                   
            
                }}>

                    <RadioButtonRN boxStyle={{
                       width:window.width/2-20,
                       borderColor:'#808080',
                       margin:5
                    }} style={{
                      
                        flexDirection:'row',
                        
                    }}
                        data={data}
                        selectedBtn={(e) => console.log(e)}
                        icon={
                            <Icon
                                name="check-circle"
                                size={25}
                                color='#808080'
                            />
                        }
                    />
                </View>
                <Text style={{
                    fontWeight:'300',
                    color:'#808080',
                    margin:5,
                   
                }}>
                    Product Quantity
                </Text>
                <TextInput style={{
                    height:40,
                    borderColor:'#808080',
                    
                    borderWidth:1,
                    borderRadius:20,
                    padding:10,

                }}>

                </TextInput>
                <Text style={{
                    fontWeight:'300',
                    color:'#808080',
                    margin:5,
                   
                }}>
                    Cabin Number
                </Text>
                <TextInput style={{
                    height:40,
                    borderColor:'#808080',
                    
                    borderWidth:1,
                    borderRadius:20,
                    padding:10,

                }}>

                </TextInput>
                <Text style={{
                    fontWeight:'300',
                    color:'#808080',
                    margin:5,
                   
                }}>
                    Seat Number
                </Text>
                <TextInput style={{
                    height:40,
                    borderColor:'#808080',
                    
                    borderWidth:1,
                    borderRadius:20,
                    padding:10,

                }}>

                </TextInput>
                <Button onPress={() => { navigation.navigate('Order Confirmation') }} buttonName='Order Now'  ></Button>
            </View>

        </ScrollView>
    );
}

export default FoodDetails;