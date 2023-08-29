import { 
     ALL_DOGS,
     FILTER_BY_ORIGIN,
     FILTER_BY_TEMPERAMENTS,
     GET_BY_NAME,
     GET_TEMPERAMENTS,
     AZ_ORDER,
     WEIGHT_ORDER,
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
            return {...state,
                getAllDogs: action.payload ? action.payload : [],
                filteredDogs: [],
                noInfo:action.payload.length === 0 ? "No dogs found." : "",
            }
        case PAGE_CLEANER:
            return {...state,detailDog:action.payload}
        case GET_TEMPERAMENTS:
            return{...state,tempList:action.payload}
        case FILTER_BY_TEMPERAMENTS:
            const targetValue = action.payload;
            if(targetValue)
            {const filteredDogs = state.getAllDogs?.filter(dog =>
              dog.temperaments?.split(', ').some(temp => temp.toLowerCase() === targetValue.toLowerCase())
              );
            return { ...state,
                 filteredDogs,
                 noInfo: filteredDogs.length === 0 ? "No dogs found with this temperament." : "" };}
            else {
                return{
                    ...state,
                }
            }
        case FILTER_BY_ORIGIN:
            const opValue= action.payload
            if(opValue==="") return{
                ...state
            }
            else if (opValue === "Original") {
                const original = state.getAllDogs?.filter(dog => !isNaN(Number(dog.id)));
                return{
                    ...state,
                    filteredDogs:original,
                    noInfo:original.length===0 ? "No original dogs were found.":""
                }
            }else {
                const created= state.filteredDogs?.filter(dog=> isNaN(Number(dog.id)))
                return{
                    ...state,
                    filteredDogs:created,
                    noInfo:created.length===0 ? "No created dogs were found.":""
                }
            }
        case AZ_ORDER:
            const order=action.payload;
            const orderByName = state.filteredDogs.length > 0 ? state.filteredDogs : state.getAllDogs;
            if(order==="") return{
                ...state
            }
            else if(order==="az"){
                const orderAZ= [...orderByName].sort((a,b)=>{
                    const nameA= a.name.toLowerCase()  
                    const nameB= b.name.toLowerCase()
                    return nameA < nameB ? -1 : 1
                })
                return{
                    ...state,
                    getAllDogs:orderAZ,
                    filteredDogs:orderAZ
                }
            }else {
                const orderZA= [...orderByName].sort((a,b)=>{
                    const nameA= a.name.toLowerCase()  
                    const nameB= b.name.toLowerCase()
                    return nameA > nameB ? -1 : 1
                })
                return{
                    ...state,
                    getAllDogs:orderZA,
                    filteredDogs:orderZA
                }
            }
        case WEIGHT_ORDER:
            const weigth= action.payload;
            const orderByWeight= state.filteredDogs.length > 0 ? state.filteredDogs : state.getAllDogs;
            if(weigth==="")return{
                ...state
            }
            else if(weigth==="Ascending"){
                const ascendent=[...orderByWeight].sort((a,b)=>{
                    const weightA= Number(a.maxWeight)
                    const weightB=Number(b.maxWeight)
                    return weightA < weightB ? -1 : 1
                })
                return{
                    ...state,
                    getAllDogs:ascendent,
                    filteredDogs:ascendent

                }
            }else{
                const descendent=[...orderByWeight].sort((a,b)=>{
                    const weightA= Number(a.maxWeight)
                    const weightB=Number(b.maxWeight)
                    return weightA > weightB ? -1 : 1
                })
                return{
                    ...state,
                    getAllDogs:descendent,
                    filteredDogs:descendent
                }

            }


        default: 
           return { ...state}
            };
    }
export default reducer;