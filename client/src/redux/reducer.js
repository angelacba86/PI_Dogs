import { 
     ALL_DOGS,
     FILTER_BY_TEMPERAMENTS,
     GET_BY_NAME,
     GET_DETAIL,
     GET_TEMPERAMENTS,
     PAGE_CLEANER } 
     from "./action-type";

let initialState= { 
    getAllDogs:[],
    getAllDogsCopy:[],
    filteredDogs:[],
    tempList:[],
    noInfo:""
};

const reducer= (state=initialState, action)=>{
    switch(action.type){
        case ALL_DOGS:
            return {...state,getAllDogs:action.payload, getAllDogsCopy:action.payload}
        case GET_BY_NAME:
            console.log("GET_BY_NAME action received:", action.payload);
            return {...state,
                getAllDogs: Array.isArray(action.payload) ? action.payload : [],
                noInfo:action.payload.length === 0 ? "No dogs found." : "",
            }
        case GET_DETAIL:
            return {...state,detailDog:action.payload}
        case PAGE_CLEANER:
            return {...state,detailDog:action.payload}
        case GET_TEMPERAMENTS:
            return{...state,tempList:action.payload}
        case FILTER_BY_TEMPERAMENTS:
            const targetValue = action.payload;
            const filteredDogs = state.getAllDogs?.filter(dog =>
              dog.temperament?.split(', ').some(temp => temp.toLowerCase() === targetValue.toLowerCase())
              );
            return { ...state, filteredDogs };
        default: 
           return { ...state}
            };
    }
export default reducer;