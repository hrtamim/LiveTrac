const initialState=null;
const train_list=(state=initialState,action)=>{
    if(action.type=="SET_TRAIN_LIST"){
        return action.playload;
    }
    return state
}
export default train_list

export const setTrainList=(value)=>{
    return{
        type:"SET_TRAIN_LIST",
        playload:value
    }
}