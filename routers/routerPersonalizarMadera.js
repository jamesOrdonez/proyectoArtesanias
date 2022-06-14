const express = require('express');
const controladorPersonalizarMadera=require('../controllers/controllerPersonalizarMadera');
const rutaPersonalizarMadera=express.Router();

rutaPersonalizarMadera.get('/personalizarMadera',controladorPersonalizarMadera.personalizacionMadera);
rutaPersonalizarMadera.post('/volver',controladorPersonalizarMadera.volver);

module.exports=rutaPersonalizarMadera;