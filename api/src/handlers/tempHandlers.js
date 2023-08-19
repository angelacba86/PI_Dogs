const {getTempCtrl} = require('../controllers/tempControllers');
//handlers:

const getTempHandler=async(req,res)=>{
    try {
       const response= await getTempCtrl()
        res.status(200).json(response);
    } catch (error) {
        res.status(400).send({error:error.message})
    }
};

module.exports={ getTempHandler};