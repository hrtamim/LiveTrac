import { combineReducers ,createStore} from "redux";
import currentLocation from "./Redux/currentLocation";
import device_data from "./Redux/device_data"
import profile from "./Redux/profile";
import station_list from "./Redux/station_list"
import train_list from "./Redux/train_list"

const combine = combineReducers({
    device_data:device_data,
    profile:profile,
    station_list:station_list,
    train_list:train_list,
    currentLocation:currentLocation
  });
  const store = createStore(combine);
  export default store;