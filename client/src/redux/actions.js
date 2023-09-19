import { ALL_DOGS,
         GET_BY_NAME,
         PAGE_CLEANER,
         GET_TEMPERAMENTS,
         FILTERS_BY_TEMPERAMENTS,
         FILTERS_BY_ORIGIN,
         ORDER_BY,
         CLEAR_SEARCH,
        } from "./action-type";

import axios from 'axios';

export const allDogs = ()=> async dispatch=>{
    try {
            const endpoint = await axios.get(`http://localhost:3001/dogs`);
            const response= endpoint.data;
                 dispatch({
                    type:ALL_DOGS,
                    payload:response
                });
    } catch (error) {
        throw new Error("An error occurred: " , error.message);
      }

};

export const getByName = (name) => async dispatch => {
  try {
    const endpoint = await axios.get(`http://localhost:3001/dogs?name=${name}`);
    const response = endpoint.data;
        dispatch({
            type: GET_BY_NAME,
            payload: response,
            searchingName:name
          });

  } catch (error) {
    throw new Error("An error occurred:", error);
  }
};
export const pageCleaner=()=>{
    return ({
        type:PAGE_CLEANER,
        payload:""
    })
}
export const clearSearch=()=>{
    return({
        type:CLEAR_SEARCH,
    })
}
export const getTemperaments= () => async dispatch => {
    try {
        const endpoint=await axios.get(`http://localhost:3001/temperament`)
        const response= endpoint.data;
        dispatch({
            type:GET_TEMPERAMENTS,
            payload:response,

        })     
    } catch (error) {
        throw new Error("An error occurred: " , error.message);
    };
};
export const filtersByTemperaments=(filterName)=>{
        return ({
            type:FILTERS_BY_TEMPERAMENTS,
            payload:filterName
            })
 }
 export const filtersByOrigin=(filterName)=>{
    return ({
        type:FILTERS_BY_ORIGIN,
        payload:filterName
        })
}
 export const orderBy=(orderName)=>{
    return({
        type:ORDER_BY,
        payload:orderName
    })
 }

