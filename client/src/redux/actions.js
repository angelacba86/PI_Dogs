import { ALL_DOGS, GET_BY_NAME } from "./action-type";
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