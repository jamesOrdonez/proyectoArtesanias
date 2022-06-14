const express = require('express');
const controladorPersonalizarArcilla=require('../controllers/controllerPersonalizarArcilla');
const rutaPersonalizarArcilla=express.Router();

rutaPersonalizarArcilla.get('/personalizarArcilla',controladorPersonalizarArcilla.personalizacionArcilla);
rutaPersonalizarArcilla.post('/volver',controladorPersonalizarArcilla.volver);

module.exports=rutaPersonalizarArcilla;