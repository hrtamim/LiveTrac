import React from 'react';
import { View,Text , StatusBar} from 'react-native';
import MapView from 'react-native-maps';
import BottomSheet, { BottomSheetScrollView } from "@gorhom/bottom-sheet";

function HomeScreen(props) {
    const [Search, setSearch] = React.useState(null);
    const [Data, setData] = React.useState(null);

    React.useEffect(()=>{
        

    },[Data])
    return (
        <View style={{
            height:'100%',
            
        }}>
        <MapView style={{
         height:'100%',
         width:'100%',
         }}/>
        </View>
    );
}

export default HomeScreen;