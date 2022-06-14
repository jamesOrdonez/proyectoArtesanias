const express = require('express');
const controladorConsultaArcillaComprador=require('../controllers/controllerConsultaArcillaComprador');
const rutaConsultaArcillaComprador=express.Router();

rutaConsultaArcillaComprador.get('/consulta_arcilla_comprador',controladorConsultaArcillaComprador.mostrarConsultaArcillaComprador);

module.exports=rutaConsultaArcillaComprador;