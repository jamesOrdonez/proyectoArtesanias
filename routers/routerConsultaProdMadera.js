const express = require('express');
const controladorRegistroProdMadera=require('../controllers/controllerRegistroProdMadera');
const rutaRegistroProdMadera=express.Router();

rutaRegistroProdMadera.get('/consulta_madera',controladorRegistroProdMadera.mostrarRegistroProdMadera);

module.exports=rutaRegistroProdMadera;