const { Router } = require('express');
const routerDogs=Router();
const {getDogHandler,getDetailHandler,postNewDogHandler}=require('../handlers/dogsHandlers.js');


//Routes:
    routerDogs.get('/',getDogHandler);

    routerDogs.get('/:id',getDetailHandler);
    
    routerDogs.post('/',postNewDogHandler);


    module.exports=routerDogs;