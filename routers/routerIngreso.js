const express = require('express');
const controladorIngreso=require('../controllers/controllerIngreso');
const rutaIngreso=express.Router();

rutaIngreso.get('/ingresar',controladorIngreso.mostrarIngreso);
rutaIngreso.post('/ingreso',controladorIngreso.concederIngreso);

module.exports=rutaIngreso;