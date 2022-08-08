const express = require('express');
const controladorIngresoCat=require('../controllers/controllerIngresoCat');
const rutaIngresoCat=express.Router();

rutaIngresoCat.get('/ingresa_catalogo',controladorIngresoCat.mostrarIngresoCatalogo);
rutaIngresoCat.post('/ingreso_catalogo',controladorIngresoCat.ingresarCatalogo);

module.exports=rutaIngresoCat;