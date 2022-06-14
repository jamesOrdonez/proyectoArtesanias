const express = require('express');
const controladorRegistroProdArcilla=require('../controllers/controllerRegistroProdArcilla');
const rutaRegistroProdArcilla=express.Router();

rutaRegistroProdArcilla.get('/consulta_arcilla',controladorRegistroProdArcilla.mostrarRegistroProdArcilla);

module.exports=rutaRegistroProdArcilla;