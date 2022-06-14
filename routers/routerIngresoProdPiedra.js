const express = require('express');
const controladorRegistroProdPiedra=require('../controllers/controllerRegistroProdPiedra');
const rutaRegistroProdPiedra=express.Router();

rutaRegistroProdPiedra.get('/consulta_piedra',controladorRegistroProdPiedra.mostrarRegistroProdPiedra);

module.exports=rutaRegistroProdPiedra;