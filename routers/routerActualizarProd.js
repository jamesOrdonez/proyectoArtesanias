
const express = require('express');
const controladorActualizacionProd=require('../controllers/controllerActualizacionProd');
const rutaActualizacionProd=express.Router();

rutaActualizacionProd.get('/actualizarProducto',controladorActualizacionProd.mostrarActualizacionProd);
rutaActualizacionProd.post('/actualizacion_madera',controladorActualizacionProd.devolverInicio);

module.exports=rutaActualizacionProd;