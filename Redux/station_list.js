const initialState=null;
const station_list=(state=initialState,action)=>{
    if(action.type=="SET_STATION_LIST"){
        return action.playload
    }
    return state
}
export default station_list

export const setStationList=(value)=>{
    return{
        type:"SET_STATION_LIST",
        playload:value
    }
}