const express = require('express');
const controladorConsultaPiedraComprador=require('../controllers/controllerConsultaPiedraComprador');
const rutaConsultaPiedraComprador=express.Router();

rutaConsultaPiedraComprador.get('/consulta_piedra_comprador',controladorConsultaPiedraComprador.mostrarConsultaPiedraComprador);

module.exports=rutaConsultaPiedraComprador;