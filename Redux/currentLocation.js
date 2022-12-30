const initialState=null;
const currentLocation=(state=initialState,action)=>{
    if(action.type=="SET_CURRENT_LOCATION"){
        return action.playload
    }
    return state
}
export default currentLocation
export const setCurrentLocation=(value)=>{
    return{
        type:"SET_CURRENT_LOCATION",
        playload:value
    }
}