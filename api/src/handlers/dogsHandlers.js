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
        const { id } = req.params;
        try {
            const response = await getDetailCtrl(id);
            res.status(200).json(response);
        } catch (error) {
            res.status(400).json({ error: error.message });
        }
    };
    
const postNewDogHandler=async(req,res)=>{
    const {name, image, minHeight, maxHeight, minWeight, maxWeight, minLifeSpan, maxLifeSpan,temperament}=req.body;
    try {
        const response= await createDogCtrl(name, image, minHeight, maxHeight, minWeight, maxWeight, minLifeSpan, maxLifeSpan,temperament)
        res.status(200).json(response)
    } catch (error) {
        res.status(400).json({error:error.message})
    }};

module.exports={ 
    getDogHandler,
    getDetailHandler,
    postNewDogHandler
}