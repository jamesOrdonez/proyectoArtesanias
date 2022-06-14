const express = require('express');
const controladorRegistroProd=require('../controllers/controllerRegistroProd');
const rutaRegistroProd=express.Router();

rutaRegistroProd.get('/consulta_prod',controladorRegistroProd.mostrarRegistroProd);

module.exports=rutaRegistroProd;