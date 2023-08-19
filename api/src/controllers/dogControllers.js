const {Dog, Temperament}=require('../db');
const axios = require('axios');
const { Op } = require('sequelize');

const { API_KEY } = process.env;

const URL='https://api.thedogapi.com/v1/breeds';
const URL_NAME='https://api.thedogapi.com/v1/breeds/search?q=';
const URL_IMAGE='https://cdn2.thedogapi.com/images/';


const getDogsCtrl= async()=>{
 
    const gettingDogs=await axios.get(`${URL}?api_key=${API_KEY}`);
    const apiDogs=gettingDogs.data;

    let dogs=[];
  console.log('por recorrer el apiDog para pushear los dogs')
    apiDogs?.forEach((dog)=>{
        dogs.push({
            name:dog.name,
            image:dog.image?.url,
            weight:dog.weight?.metric,
            height:dog.height?.metric,
            life_span:dog.life_span,
            temperament:dog.temperament
        }); 
    });

    const createdDogs= await Dog.findAll({
        attributes:['name','image','weight','height','life_span'],
        includes:{
            model:Temperament,
            attributes:['name']
        }
    });
    let allDogs=[...dogs,...createdDogs]
    return allDogs;
};

const getNameCtrl=async(name)=>{
    
    let apiDogFinal=[]
    const gettingApiDogName=(await axios.get(`${URL_NAME}${name}`));
    const apiDogName=gettingApiDogName.data; 

        apiDogName.map((dog)=>{ apiDogFinal.push({
            name:dog.name,
            image:`${URL_IMAGE}${dog.reference_image_id}.jpg`,
            weight:dog.weight?.metric,
            height:dog.height?.metric,
            life_span:dog.life_span,
            temperament:dog.temperament})
        })
   
    const dbDog= await Dog.findAll({
        attributes:['name','image','weight','height','life_span'],
        includes:{
            model:Temperament,
            attributes:['name']},
        where:{
            name: {[Op.iLike]: `%${name}%`}
        }});
    
    const finalDog= [...apiDogFinal,...dbDog]

    if(finalDog.length===0) return ("No se encontro perro con esa raza");
    return finalDog;
    
};

const createDogCtrl = async(image,name,height,weight,life_span,temperamentName)=>{
console.log(temperamentName)
    let temperament = await Temperament.findOne({
        where:{ name: temperamentName}
    });
    if(!temperament) temperament= await Temperament.create({name:temperamentName});
     
    let newDog= await Dog.findOne({
        where:{ name:name}
    })
    if(!newDog) { 
        newDog = await Dog.create({image,name,height,weight,life_span})
        await newDog.addTemperament(temperament)
        return {
            id: newDog.id,
            image: newDog.image,
            name: newDog.name,
            height: newDog.height,
            weight: newDog.weight,
            life_span: `${newDog.life_span} years`,
            temperament: temperament.name 
        };
    } else { return "Este perro ya existe"};
     
};

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
                weight:dog.weight?.metric,
                height:dog.height?.metric,
                life_span:dog.life_span,
                temperament:dog.temperament})
            }
        });
    }
    else {
  
        getId= await Dog.findOne({
            attributes:['name','image','weight','height','life_span'],
            includes:{
                model:Temperament,
                attributes:['name']},
                where: {
                    id: idRaza
                }
        })
       
    } 
    console.log('Resultado:', getId);
   if(getId.length===0) return 'No se encontro informacion sobre este perro';
   return getId;;
}

module.exports={
    getDogsCtrl,
    getNameCtrl,
    createDogCtrl,
    getDetailCtrl
}