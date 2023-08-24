import { ALL_DOGS, GET_BY_NAME, GET_DETAIL } from "./action-type";

let initialState= {getAllDogs:[], getAllDogsCopy:[], detailDog:[]};

const reducer= (state=initialState, action)=>{
    switch(action.type){
        case ALL_DOGS:
            return {...state,getAllDogs:action.payload, getAllDogsCopy:action.payload};
        case GET_BY_NAME:
            return {...state,getAllDogs:action.payload}
        case GET_DETAIL:
            return {...state,detailDog:action.payload}
        default: 
           return { ...state}
            };
    }
export default reducer;