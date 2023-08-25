import { ALL_DOGS, FILTER_BY_TEMPERAMENTS, GET_BY_NAME, GET_DETAIL, GET_TEMPERAMENTS, PAGE_CLEANER } from "./action-type";

let initialState= {getAllDogs:[], getAllDogsCopy:[], detailDog:[], tempList:[], tempFilter:[]};

const reducer= (state=initialState, action)=>{
    switch(action.type){
        case ALL_DOGS:
            return {...state,getAllDogs:action.payload, getAllDogsCopy:action.payload};
        case GET_BY_NAME:
            return {...state,getAllDogs:action.payload}
        case GET_DETAIL:
            return {...state,detailDog:action.payload}
        case PAGE_CLEANER:
            return {...state,detailDog:action.payload}
        case GET_TEMPERAMENTS:
            return{...state,tempList:action.payload}
        case FILTER_BY_TEMPERAMENTS:
            return {...state,filter:action.payload}
        default: 
           return { ...state}
            };
    }
export default reducer;