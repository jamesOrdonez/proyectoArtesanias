const express = require('express');
const controladorConsultaMaderaComprador=require('../controllers/controllerConsultaMaderaComprador');
const rutaConsultaMaderaComprador=express.Router();

rutaConsultaMaderaComprador.get('/consulta_madera_comprador',controladorConsultaMaderaComprador.mostrarConsultaMaderaComprador);

module.exports=rutaConsultaMaderaComprador;