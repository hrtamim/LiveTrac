import React from 'react';
import { View, Text, Dimensions, ScrollView, StyleSheet, Touchable, TouchableOpacity } from 'react-native';
import RecentOrders from '../Components/RecentOrders';
import {LineChart,} from "react-native-chart-kit";

const chartConfig = {
  backgroundGradientFrom: "#1E2923",
  backgroundGradientFromOpacity: 0,
  backgroundGradientTo: "#08130D",
  backgroundGradientToOpacity: 0.5,
  color: (opacity = 1) => `rgba(26, 255, 146, ${opacity})`,
  strokeWidth: 2, // optional, default 3
  barPercentage: 0.5,
  useShadowColorFromDataset: false // optional
};

function ServiceStatus(props) {

  return (
    <View style={{ marginHorizontal: 20, backgroundColor: '#e5e5e5', marginTop: 50,width:'100%' }}>
      <View>
  <Text>Bezier Line Chart</Text>
  <LineChart
    data={{
      labels: ["January", "February", "March", "April", "May", "June"],
      datasets: [
        {
          data: [
            Math.random() * 100,
            Math.random() * 100,
            Math.random() * 100,
            Math.random() * 100,
            Math.random() * 100,
            Math.random() * 100
          ]
        }
      ]
    }}
    width={Dimensions.get("window").width} // from react-native
    height={220}
    yAxisLabel="$"
    yAxisSuffix="k"
    yAxisInterval={1} // optional, defaults to 1
    chartConfig={{
      backgroundColor: "#e26a00",
      backgroundGradientFrom: "#fb8c00",
      backgroundGradientTo: "#ffa726",
      decimalPlaces: 2, // optional, defaults to 2dp
      color: (opacity = 1) => `rgba(255, 255, 255, ${opacity})`,
      labelColor: (opacity = 1) => `rgba(255, 255, 255, ${opacity})`,
      style: {
        borderRadius: 16
      },
      propsForDots: {
        r: "6",
        strokeWidth: "2",
        stroke: "#ffa726"
      }
    }}
    bezier
    style={{
      marginVertical: 8,
      borderRadius: 16
    }}
  />
</View>
      <Text style={style.headLIne}>
        Recent Orders
      </Text>
      <ScrollView horizontal={true} showsHorizontalScrollIndicator={false}>
        <RecentOrders />
        <RecentOrders />
        <RecentOrders />
      </ScrollView>
      <View style={{ marginTop: 20, flexDirection: 'row', justifyContent: 'space-between', width: '90%' }}>
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