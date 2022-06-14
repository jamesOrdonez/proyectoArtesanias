const express = require('express');
const controladorRegistroUser=require('../controllers/controllerRegistroUser');
const rutaRegistroUser=express.Router();

rutaRegistroUser.get('/ingresa_user',controladorRegistroUser.mostrarIngresoUser);
rutaRegistroUser.post('/ingreso_user',controladorRegistroUser.devolverInicio);

module.exports=rutaRegistroUser;