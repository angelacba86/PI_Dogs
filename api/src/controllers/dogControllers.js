const {Dog, Temperament}=require('../db');
const axios = require('axios');
const { Op } = require('sequelize');

const { API_KEY } = process.env;

const URL='https://api.thedogapi.com/v1/breeds';
const URL_NAME='https://api.thedogapi.com/v1/breeds/search?q=';
const URL_IMAGE='https://cdn2.thedogapi.com/images/';

///----Get all Dogs----///

const getDogsCtrl= async()=>{
 
    const gettingDogs=await axios.get(`${URL}?api_key=${API_KEY}`);
    const apiDogs=gettingDogs.data;

    const dogsApi=apiDogs?.map(dog=>({
            id:dog.id,
            name:dog.name,
            image:dog.image?.url,
            minHeight: parseInt(dog.height.metric.split(" - ")[0]),
            maxHeight: parseInt(dog.height.metric.split(" - ")[1]),
            minWeight: parseInt(dog.weight.metric.split(" - ")[0]),
            maxWeight: parseInt(dog.weight.metric.split(" - ")[1]),
            minLifeSpan: dog.life_span.split("-")[0],
            maxLifeSpan: dog.life_span.split("-")[1],
            temperament: dog.temperament,
            origin: "API" 
    }));

    const createdDogs= await Dog.findAll({
        include:{
            model:Temperament,
            attributes:['name']
        }
    });
    let allDogs=[...dogsApi,...createdDogs]
    return allDogs;
};

///---- Get a Dog by Name ----///

const getNameCtrl=async(name)=>{
    const gettingApiDogName=(await axios.get(`${URL_NAME}${name}`));
    const apiDogName=gettingApiDogName.data; 
        const dogApi=apiDogName.map((dog)=>({
            id:dog.id,
            name:dog.name,
            image:`${URL_IMAGE}${dog.reference_image_id}.jpg`,
            minHeight: parseInt(dog.height.metric.split("-")[0]),
            maxHeight: parseInt(dog.height.metric.split("-")[1]),
            minWeight: parseInt(dog.weight.metric.split("-")[0]),
            maxWeight: parseInt(dog.weight.metric.split("-")[1]),
            minLifeSpan: dog.life_span.includes("-") ? dog.life_span.split("-")[0] : dog.life_span,
            maxLifeSpan: dog.life_span.includes("-") ? dog.life_span.split("-")[1] : null ,
            temperament: dog.temperament,
            origin: "API"})
        )
    const dbDog= await Dog.findAll({
        include:{
            model:Temperament,
            attributes:['name']},
        where:{
            name: {[Op.iLike]: `%${name}%`}
        }});
    const finalDog= [...dogApi,...dbDog]
    return finalDog;
};
///----Create a New dog-----///

const createDogCtrl = async (name, image, minHeight, maxHeight, minWeight, maxWeight, minLifeSpan, maxLifeSpan, temperament) => {
    try {
    
        
  


    } catch (error) {
        throw error
    }
}

///---- Get Dogs Details ---///

const getDetailCtrl = async (id) => {
    const idVerification = isNaN(id);
    let getId = [];
    if (!idVerification) {
      const gettingDogs = await axios.get(`${URL}?api_key=${API_KEY}`);
      const apiDogs = gettingDogs.data;
  
      const foundDogs = apiDogs.find((dog) => dog.id === parseInt(id));
      if (foundDogs) {
        const transformDogId = {
          id: foundDogs.id,
          name: foundDogs.name,
          image: `${URL_IMAGE}${foundDogs.reference_image_id}.jpg`,
          minHeight: parseInt(foundDogs.height.metric.split("-")[0]),
          maxHeight: parseInt(foundDogs.height.metric.split("-")[1]),
          minWeight: foundDogs.weight.metric.split("-")[0],
          maxWeight: foundDogs.weight.metric.split("-")[1],
          minLifeSpan: foundDogs.life_span.includes("-") ? foundDogs.life_span.split("-")[0] : foundDogs.life_span,
          maxLifeSpan: foundDogs.life_span.includes("-") ? foundDogs.life_span.split("-")[1] : null ,
          temperament: foundDogs.temperament,
          origin: "API"
        };
        return transformDogId;
      }
    } else {
      getId = await Dog.findOne({
        include: {
          model: Temperament,
          attributes: ['name']
        },
        where: {
          id: id
        }
      });
      
      console.log("este es getId " + getId);
      
      if (getId.length === 0) {
        throw new Error('No se encontró información sobre este perro');
      }
      
      const transformDogId = {
        id: getId.id,
        name: getId.name,
        image: getId.image,
        minHeight: getId.minHeight,
        maxHeight: getId.maxHeight,
        minWeight: getId.minWeight,
        maxWeight: getId.maxWeight,
        minLifeSpan: getId.minLifeSpan,
        maxLifeSpan: getId.maxLifeSpan,
        temperaments: getId.Temperaments?.map(t => t.name).join(', '),
        origin: getId.origin
      };
      return transformDogId;
    }
  };

module.exports={
    getDogsCtrl,
    getNameCtrl,
    createDogCtrl,
    getDetailCtrl
}