const express = require('express');
const controladorConsultaUser=require('../controllers/controllerConsultaUser');
const rutaConsultaUser=express.Router();

rutaConsultaUser.get('/consulta_user',controladorConsultaUser.mostrarConsultaUser);

module.exports=rutaConsultaUser;