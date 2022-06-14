const express = require('express');
const controladorPersonalizarPiedra=require('../controllers/controllerPersonalizarPiedra');
const rutaPersonalizarPiedra=express.Router();

rutaPersonalizarPiedra.get('/personalizarPiedra',controladorPersonalizarPiedra.personalizacionPiedra);
rutaPersonalizarPiedra.post('/volver',controladorPersonalizarPiedra.volver);

module.exports=rutaPersonalizarPiedra;