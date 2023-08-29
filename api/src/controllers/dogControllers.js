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

    let dogs=[];

    apiDogs?.forEach((dog)=>{
        dogs.push({
            id:dog.id,
            name:dog.name,
            image:dog.image?.url,
            minHeight: parseInt(dog.height.metric.split("-")[0]),
            maxHeight: parseInt(dog.height.metric.split("-")[1]),
            minWeight: parseInt(dog.weight.metric.split("-")[0]),
            maxWeight: parseInt(dog.weight.metric.split("-")[1]),
            minLifeSpan: parseInt(dog.life_span.split("-")[0]),
            maxLifeSpan: parseInt(dog.life_span.split("-")[1]),
            temperaments: dog.temperament,
            origin: "API"
        }); 
    });

    const createdDogs= await Dog.findAll({
        includes:{
            model:Temperament,
            attributes:['name']
        }
    });
    let allDogs=[...dogs,...createdDogs]
    return allDogs;
};

///---- Get a Dog by Name ----///

const getNameCtrl=async(name)=>{
    
    let apiDogFinal=[]
    const gettingApiDogName=(await axios.get(`${URL_NAME}${name}`));
    const apiDogName=gettingApiDogName.data; 

        apiDogName.map((dog)=>{ apiDogFinal.push({
            id:dog.id,
            name:dog.name,
            image:`${URL_IMAGE}${dog.reference_image_id}.jpg`,
            minHeight: parseInt(dog.height.metric.split("-")[0]),
            maxHeight: parseInt(dog.height.metric.split("-")[1]),
            minWeight: parseInt(dog.weight.metric.split("-")[0]),
            maxWeight: parseInt(dog.weight.metric.split("-")[1]),
            minLifeSpan: parseInt(dog.life_span.split("-")[0]),
            maxLifeSpan: parseInt(dog.life_span.split("-")[1]),
            temperaments: dog.temperament,
            origin: "API"})
        })
   
    const dbDog= await Dog.findAll({
        includes:{
            model:Temperament,
            attributes:['name']},
        where:{
            name: {[Op.iLike]: `%${name}%`}
        }});
    
    const finalDog= [...apiDogFinal,...dbDog]

    return finalDog;
    
};
///----Create a New dog-----///

const createDogCtrl = async (name, image, minHeight, maxHeight, minWeight, maxWeight, minLifeSpan, maxLifeSpan, temperamentString) => {
    try {
        const allDogs = await getDogsCtrl();
        const dogName = await allDogs.find(dog => dog.name.toLowerCase() === name.toLowerCase().trim());
        let temperaments = [];
        if (temperamentString.indexOf(",") !== -1) {
            // Si hay varias palabras separadas por una coma
            let words = temperamentString.split(", ");
            for (let word of words) {
                let temperament = await Temperament.findOne({ where: { name: word } });
                if (!temperament) {
                    // Si la palabra no existe en la tabla Temperament
                    throw new Error(`Error: The word ${word} doesn't exist in Temperament's table.`);
                }
                temperaments.push(temperament);
            }
        } else {
            // Si solo hay una palabra
            let temperament = await Temperament.findOne({ where: { name: temperamentString } });
            if (!temperament) {
                // Si la palabra no existe en la tabla Temperament
                throw new Error(`Temperament ${temperamentString} doesn't exist in Temperament's table..`);
            }
            temperaments.push(temperament);
        }

        if (dogName) {
            console.log("el nombre es: " + name)
            throw new Error(`Dog ${name} already exists in the API or in the Database`);
        }
        else if (!name || !minHeight || !maxHeight || !minWeight || !maxWeight || !minLifeSpan || !maxLifeSpan) {
       
            throw new Error("You must fill in all the required information");
        }
        else if (minHeight <= 0 || maxHeight <= 0 || minWeight <= 0 || maxWeight <= 0 || minLifeSpan <= 0 || maxLifeSpan <= 0) {
            throw new Error("The height, weight ow life span value cannot be negative");

        }
        else if (minHeight >= maxHeight) {
            throw new Error("The minimum height is greater than or equal to the maximum height, please validate data");
        }
        else if (minWeight >= maxWeight) {
            throw new Error("The minimum weight is greater than or equal to the maximum weight, please validate data");
        }
        else if (minLifeSpan >= maxLifeSpan) {
         
            throw new Error("The minimum life span is greater than or equal to the maximum weight, please validate data");
        }

        const newDog = await Dog.create({
            name,
            image,
            minHeight,
            maxHeight,
            minWeight,
            maxWeight,
            minLifeSpan,
            maxLifeSpan,
            origin: "DataBase"
        })

        await newDog.addTemperaments(temperaments)
        const finalDog = await Dog.findOne({
            where: { id: newDog.id },
            include: Temperament
        });

        const transformDog = {
            id: finalDog.id,
            name: finalDog.name,
            image: finalDog.image,
            minHeight: finalDog.minHeight,
            maxHeight: finalDog.maxHeight,
            minWeight: finalDog.minWeight,
            maxWeight: finalDog.maxWeight,
            minLifeSpan: finalDog.minLifeSpan,
            maxLifeSpan: finalDog.maxLifeSpan,
            temperaments: finalDog.Temperaments.map(t => t.name).join(', '),
            origin: finalDog.origin
        }

        return transformDog
    } catch (error) {
        throw new Error(error);
    }
}

///---- Get Dogs Details ---///

const getDetailCtrl=async(idRaza)=>{
    console.log('Entrando en getDetailCtrl');
 const idVerification= isNaN(idRaza);
 let getId=[];
    if(!idVerification){
        console.log('Buscando en la API');
        const gettingDogs = await axios.get(`${URL}?api_key=${API_KEY}`);
        const apiDogs = gettingDogs.data;

            apiDogs.find((dog) => {
            
            if(dog.id === parseInt(idRaza)){
                getId.push({
                name:dog.name,
                image:`${URL_IMAGE}${dog.reference_image_id}.jpg`,
                minHeight: parseInt(dog.height.metric.split("-")[0]),
                maxHeight: parseInt(dog.height.metric.split("-")[1]),
                minWeight: parseInt(dog.weight.metric.split("-")[0]),
                maxWeight: parseInt(dog.weight.metric.split("-")[1]),
                minLifeSpan: parseInt(dog.life_span.split("-")[0]),
                maxLifeSpan: parseInt(dog.life_span.split("-")[1]),
                temperaments: dog.temperaments,
                origin: "API"})
            }
        });
    }
    else {
  
        getId= await Dog.findOne({
            include:{
                model:Temperament,
                attributes:['name']},
                where: {
                    id: idRaza
                }
        })
       
    } 

   if(getId.length===0) return 'No se encontro informacion sobre este perro';
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
    temperaments: getId.Temperaments.map(t => t.name).join(', '),
    origin: getId.origin
}
   return transformDogId;
}

module.exports={
    getDogsCtrl,
    getNameCtrl,
    createDogCtrl,
    getDetailCtrl
}