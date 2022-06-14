const express = require('express');
const controladorActualizarUser=require('../controllers/controllerActualizarUser');
const rutaActualizarUser=express.Router();

rutaActualizarUser.get('/actualizar_user',controladorActualizarUser.mostrarActualizarUser);
rutaActualizarUser.post('/usuario_actualizado',controladorActualizarUser.devolverInicio);

module.exports=rutaActualizarUser;