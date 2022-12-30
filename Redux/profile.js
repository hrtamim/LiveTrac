const initialState=null;
const profile=(state=initialState,action)=>{
    if(action.type=="SET_USER_INFO"){
        return action.playload;
    }
    return state
}
export default profile;

export const setUserProfile=(value)=>{
    return{
        type:"SET_USER_INFO",
        playload:value
    }
}