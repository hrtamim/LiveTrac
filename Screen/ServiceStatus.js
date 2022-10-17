import React from 'react';
import { View, Text, Dimensions, ScrollView, StyleSheet, Touchable, TouchableOpacity } from 'react-native';
import RecentOrders from '../Components/RecentOrders';


function ServiceStatus(props) {

  return (
    <View style={{ marginHorizontal: 20, backgroundColor: '#e5e5e5', marginTop: 50 }}>
      <Text style={style.headLIne}>
        Recent Orders
      </Text>
      <ScrollView horizontal={true} showsHorizontalScrollIndicator={false}>
        <RecentOrders />
        <RecentOrders />
        <RecentOrders />
      </ScrollView>
      <View style={{ marginTop: 20, flexDirection: 'row', justifyContent: 'space-between', width: '100%' }}>
        <Text style={style.headLIne}>
          Your Products
        </Text>
        <TouchableOpacity><Text>Add +</Text></TouchableOpacity>
      </View>

    </View>
  );
}

export default ServiceStatus;
const style = StyleSheet.create({
  headLIne: {
    fontSize: 18,
    fontWeight: '500',
    color: '#808080',
    

  }
})