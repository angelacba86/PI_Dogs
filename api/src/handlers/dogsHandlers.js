const { createDogCtrl, getDogsCtrl, getNameCtrl,getDetailCtrl } = require("../controllers/dogControllers");

//Handlers:
const getDogHandler=async(req,res)=>{
    const{name}=req.query;
    try {
        const response=  name ? await getNameCtrl(name): await getDogsCtrl()
        res.status(200).json(response)
    } catch (error) {
        res.status(400).json({error:error.message})
    }};

const getDetailHandler=async(req,res)=>{
    const {idRaza} = req.params;
    try {
        const response= await getDetailCtrl(idRaza);
        res.status(200).json(response)
    } catch (error) {
        res.status(400).json({error:error.message});
    }};
    
const postNewDogHandler=async(req,res)=>{
    const {image,name,height,weight,life_span,temperament}=req.body;
    try {
        const response= await createDogCtrl(image,name,height,weight,life_span,temperament)
        res.status(200).json(response)
    } catch (error) {
        res.status(400).json({error:error.message})
    }};

module.exports={ 
    getDogHandler,
    getDetailHandler,
    postNewDogHandler
}