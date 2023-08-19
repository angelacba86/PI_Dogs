const { Router } = require('express');
const routerDogs = require('./routerDogs');
const routerTemp = require('./routerTemp');
// Importar todos los routers;
// Ejemplo: const authRouter = require('./auth.js');


const router = Router();

// Configurar los routers
// Ejemplo: router.use('/auth', authRouter);

router.use('/dogs',routerDogs);
router.use('/temperament',routerTemp);


module.exports = router;
