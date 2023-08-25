const {Dog, Temperament}=require('../db');
const axios = require('axios');
const { Op } = require('sequelize');
const { API_KEY } = process.env;

const URL='https://api.thedogapi.com/v1/breeds';

let cachedTemperaments = null;
const getTempCtrl= async ()=>{

    if (cachedTemperaments !== null) {
        // Si los datos ya están en caché, retornarlos directamente
        return cachedTemperaments;
    }

    const gettingTemps= await axios.get(`${URL}?api_key=${API_KEY}`);
    const apiTemps=gettingTemps.data;

    let dogTemper=[]

    await apiTemps.forEach((temp)=>{
        if (temp.temperament) {
            dogTemper.push(
                temp.temperament.split(', ')
            )};
    });

    let allDogsTemp= [].concat(...dogTemper).filter((temperament, index, self) => index === self.findIndex((t) => t === temperament));

    const dbTemperament= await Temperament.bulkCreate(
        allDogsTemp.map((temp)=>({name:temp})), 
        { ignoreDuplicates: true }
    ) ;

    cachedTemperaments = dbTemperament;

    return dbTemperament
}

module.exports={getTempCtrl};