const express = require('express');
const controladorIngresoProdCat=require('../controllers/controller-ingreso-prod-cat');
const rutaIngresoProdCat=express.Router();

rutaIngresoProdCat.get('/ingresa_prod',controladorIngresoProdCat.consultaCatalogos);
rutaIngresoProdCat.get('/ingresar_catalogoMadera',controladorIngresoProdCat.ingresoProdMadera);
rutaIngresoProdCat.get('/ingresar_catalogoArcilla',controladorIngresoProdCat.ingresoProdArcilla);
rutaIngresoProdCat.get('/ingresar_catalogoPiedra',controladorIngresoProdCat.ingresoProdPiedra);

rutaIngresoProdCat.post('/ingreso_prod',controladorIngresoProdCat.devolverInicio);

module.exports=rutaIngresoProdCat;