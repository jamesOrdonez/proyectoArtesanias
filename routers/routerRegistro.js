const express = require('express');
const controladorRegistro=require('../controllers/controllerRegistro');
const rutaRegistro=express.Router();

rutaRegistro.get('/registrarse',controladorRegistro.mostrarRegistro);
rutaRegistro.post('/registro',controladorRegistro.devolverInicio);

module.exports=rutaRegistro;