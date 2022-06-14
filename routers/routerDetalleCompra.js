const express = require('express');
const controladorDetalleCompra=require('../controllers/controllerDetalleCompra');
const rutaDetalleCompra=express.Router();

rutaDetalleCompra.get('/detalle_compra',controladorDetalleCompra.mostrarDetalleCompra);
module.exports=rutaDetalleCompra;