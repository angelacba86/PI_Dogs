const { Router } = require('express');
const routerTemp=Router();
const {getTempHandler}=require('../handlers/tempHandlers');

//Routes:

routerTemp.get('/', getTempHandler);


module.exports=routerTemp;