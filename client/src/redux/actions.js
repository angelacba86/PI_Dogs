import { ALL_DOGS,
         GET_BY_NAME,
         GET_DETAIL,
         PAGE_CLEANER,
         GET_TEMPERAMENTS,
         FILTER_BY_TEMPERAMENTS,
         FILTER_BY_ORIGIN,
         AZ_ORDER,
         WEIGHT_ORDER } from "./action-type";

import axios from 'axios';

export const allDogs = ()=>{
    const endpoint='http://localhost:3001/dogs'
    return (dispatch)=>{
        axios.get(endpoint).then(({data})=>{
            return dispatch({
                type:ALL_DOGS,
                payload:data
            });
        });
    };
};

export const getByName = (name) => async dispatch => {
  try {
    const endpoint = await axios.get(`http://localhost:3001/dogs?name=${name}`);
    const response = endpoint.data;
        dispatch({
            type: GET_BY_NAME,
            payload: response
          });

  } catch (error) {
    console.error("An error occurred:", error);
  }
};
export const getDetail = (id) => {
    const endpoint=`http://localhost:3001/dogs/${id}`
    return (dispatch =>{
        axios.get(endpoint).then(({data})=>{
            return dispatch ({
                type:GET_DETAIL,
                payload:data})
        })
    })
}

export const pageCleaner=()=>{
    return ({
        type:PAGE_CLEANER,
        payload:null}
    )
}

export const getTemperaments=()=>{
    const endpoint=`http://localhost:3001/temperament`
    return (dispatch=>{
        axios.get(endpoint).then(({data})=>{
            return dispatch({
                type:GET_TEMPERAMENTS,
                payload:data
            })
        })
        .catch(error => {
            console.error("Axios error:", error);
          });
    })
}
export const filterByTemperaments=(targetValue)=>{
        return ({
            type:FILTER_BY_TEMPERAMENTS,
            payload:targetValue
            })
 }
 export const filterByOrigin=(opValue)=>{
    return({
        type:FILTER_BY_ORIGIN,
        payload:opValue
    })
 }
 export const orderAz=(order)=>{
    return({
        type:AZ_ORDER,
        payload:order
    })
 }
export const orderWeight=(weigth)=>{
    return({
        type:WEIGHT_ORDER,
        payload:weigth
    })
}
