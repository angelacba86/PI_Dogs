import { 
     ALL_DOGS,
     FILTERS_BY_TEMPERAMENTS,
     FILTERS_BY_ORIGIN,
     GET_BY_NAME,
     GET_TEMPERAMENTS,
     ORDER_BY,
     PAGE_CLEANER, 
     CLEAR_SEARCH} 
     from "./action-type";

let initialState= { 
    getAllDogs:[],
    getAllDogsCopy:[],
    filteredDogs:[],
    tempList:[],
    results:"",
    noInfo:""
};

const reducer= (state=initialState, action)=>{
    switch(action.type){
        case ALL_DOGS:
            return {...state,
                getAllDogs:action.payload,
                 getAllDogsCopy:action.payload}
        case GET_BY_NAME:
            return {...state,
                getAllDogs: action.payload ? action.payload : [],
                filteredDogs: [],
                results:action.payload.length>0 ?`${action.payload.length} results for "${action.searchingName}"`:"",
                noInfo:action.payload.length === 0 ? "No dogs found." : "",
            }
        case CLEAR_SEARCH:
            return{
                ...state,
                getAllDogs:state.getAllDogsCopy,
                noInfo:"",
            }    
        case PAGE_CLEANER:
            return {...state,
                results:action.payload}
        case GET_TEMPERAMENTS:
            const listOfTemp=action.payload;
                return {
                ...state,
                tempList: listOfTemp
                }
        case FILTERS_BY_TEMPERAMENTS:
            const tempValue = action.payload;
            const tempDogToShow=state.filteredDogs.length > 0 ? state.filteredDogs : state.getAllDogs;
            if(tempValue==="") return{
                ...state,
                filteredDogs:state.getAllDogs
            }
            else {
            const filteredDogs = tempDogToShow?.filter(dog => dog.temperament?.split(', ').some(temp => temp.toLowerCase() === tempValue.toLowerCase()) );
            return { ...state,
                      filteredDogs,
                      noInfo: filteredDogs === 0 ? "No dogs found with this temperament." : "" };
                    }
        case FILTERS_BY_ORIGIN:
            const originValue= action.payload
            const origindDogsToShow= state.filteredDogs.length > 0 ? state.filteredDogs : state.getAllDogs;
            if(originValue==="") return{
                ...state,
                filteredDogs:state.getAllDogs
            }
            else if (originValue === "Original") {
                const original = origindDogsToShow?.filter(dog => dog.origin==="API");
                return{
                    ...state,
                    filteredDogs:original,
                    noInfo:original.length===0 ? "No original dogs were found.":""
                }
            }else {
                const created= origindDogsToShow?.filter(dog=> dog.origin==="CREATED")
                return{
                    ...state,
                    filteredDogs:created,
                    noInfo:created.length===0 ? "No created dogs were found.":""
                }
            }
        case ORDER_BY:
            const orderName=action.payload;
            const dogsToOrder = state.filteredDogs.length > 0 ? state.filteredDogs : state.getAllDogs;
            if(orderName==="") return{
                ...state
            }
            else if(orderName==="az"){
                const orderAZ= [...dogsToOrder].sort((a,b)=>{
                    const nameA= a.name.toLowerCase()  
                    const nameB= b.name.toLowerCase()
                    return nameA < nameB ? -1 : 1
                })
                return{
                    ...state,
                    getAllDogs:orderAZ,
                    filteredDogs:orderAZ
                }
            }else if(orderName==="za") {
                const orderZA= [...dogsToOrder].sort((a,b)=>{
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
            else if(orderName==="Ascending"){
                const ascendent=[...dogsToOrder].sort((a,b)=>{
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
                const descendent=[...dogsToOrder].sort((a,b)=>{
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