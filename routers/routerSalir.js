const express = require('express');
const controladorSalir=require('../controllers/controllerSalir');
const rutaSalir=express.Router();

rutaSalir.get('/salir',controladorSalir.salir);

module.exports=rutaSalir;