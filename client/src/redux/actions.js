import { ALL_DOGS, GET_BY_NAME, GET_DETAIL, PAGE_CLEANER } from "./action-type";
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

export const getByName = (name) => {
    const endpoint=`http://localhost:3001/dogs?name=${name}`
    return (dispatch =>{
        axios.get(endpoint).then(({data})=>{
            return dispatch ({
                type:GET_BY_NAME,
                payload:data
            })
        })
    })
}
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