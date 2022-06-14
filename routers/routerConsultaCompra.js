const express = require('express');
const controladorConsultaCompra=require('../controllers/controllerConsultaCompra');
const rutaConsultaCompra=express.Router();

rutaConsultaCompra.get('/consulta_compras',controladorConsultaCompra.mostrarConsultaCompra);

module.exports=rutaConsultaCompra;