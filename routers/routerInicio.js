const express = require ('express');
const controladorInicio = require('../controllers/controllerInicio');
const rutaInicio=express.Router();

rutaInicio.get('/',controladorInicio.mostrarInicio);

module.exports=rutaInicio;