const initialState=null;
const device_data=(state=initialState,action)=>{
    if(action.type=="SET_DEVICE_DATA"){
        return action.playload
    }
    return state
}
export default device_data

export const setDeviceData=(value)=>{
    return{
        type:"SET_DEVICE_DATA",
        playload:value
    }
}