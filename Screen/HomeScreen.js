import React from "react";
import { View, Text, StatusBar } from "react-native";
import MapView,{Marker} from "react-native-maps";
import BottomSheet, { BottomSheetScrollView } from "@gorhom/bottom-sheet";
import ActivityLoader from "../Components/ActivityLoader";
import { useSelector } from "react-redux";

function HomeScreen(props) {
  const [Search, setSearch] = React.useState(null);
  const [Data, setData] = React.useState(null);
  const currentLocation = useSelector((state) => state.currentLocation);

  React.useEffect(() => {
    console.log(currentLocation);
  }, [Data]);
  if (!currentLocation) {
    return <ActivityLoader />;
  }
  return (
    <View
      style={{
        height: "100%",
      }}
    >
      <MapView
        region={currentLocation.coords}
        style={{
          height: "100%",
          width: "100%",
        }}
      >
        <Marker
          coordinate={{ latitude: currentLocation.coords.latitude, longitude: currentLocation.coords.longitude }}
          
        />
      </MapView>
    </View>
  );
}

export default HomeScreen;
