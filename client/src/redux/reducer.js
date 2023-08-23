import { ALL_DOGS, GET_BY_NAME } from "./action-type";

let initialState= {getAllDogs:[], getAllDogsCopy:[]};

const reducer= (state=initialState, action)=>{
    switch(action.type){
        case ALL_DOGS:
            return {...state,getAllDogs:action.payload, getAllDogsCopy:action.payload};
        case GET_BY_NAME:
            return {...state,getAllDogsCopy:action.payload}
        default: 
           return { ...state}
            };
    }
export default reducer;