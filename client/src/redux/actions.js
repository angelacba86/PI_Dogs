import { ALL_DOGS, GET_BY_NAME, GET_DETAIL, PAGE_CLEANER, GET_TEMPERAMENTS,FILTER_BY_TEMPERAMENTS } from "./action-type";
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

export const FilterByTemperaments=(tempSelect)=>{
    const endpoint='http://localhost:3001/dogs'
        axios.get(endpoint).then(({data})=>{
            const tempFilter=()=>{
                return data.filter(obj => obj.temperament
                    .split(', ').some(temp=> temp.toLowerCase().include(tempSelect.toLowerCase())))
            }
          return(dispatch=>{
            return dispatch({
                type:FILTER_BY_TEMPERAMENTS,
                payload:tempFilter()
            })
        })    })

}
