const express = require('express');
const controladorConsultaEnvios=require('../controllers/controllerConsultaEnvios');
const rutaConsultaEnvios=express.Router();

rutaConsultaEnvios.get('/consulta_envios',controladorConsultaEnvios.mostrarEnvios);

module.exports=rutaConsultaEnvios;