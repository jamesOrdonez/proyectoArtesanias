const express = require('express');
const controladorIngresoCat=require('../controllers/controllerIngresoCat');
const rutaIngresoCat=express.Router();

rutaIngresoCat.get('/ingresa_catalogo',controladorIngresoCat.mostrarRegistroCat);
rutaIngresoCat.post('/ingreso_catalogo',controladorIngresoCat.devolverInicio);

module.exports=rutaIngresoCat;