const express = require('express');
const controladorEliminarProd=require('../controllers/controllerEliminarProd');
const rutaEliminarProd=express.Router();

rutaEliminarProd.get('/eliminarProducto',controladorEliminarProd.mostrarEliminar);
rutaEliminarProd.get('/confirmaEliminarProducto',controladorEliminarProd.preguntaEliminar);
rutaEliminarProd.get('/devolverProd',controladorEliminarProd.devolverInicio);

module.exports=rutaEliminarProd;