const express = require('express');
const controladorActualizarInfoArtesano=require('../controllers/controllerActualizarInfoArtesano');
const rutaActualizarInfoArtesano=express.Router();

rutaActualizarInfoArtesano.get('/actualizar_artesano',controladorActualizarInfoArtesano.mostrarActualizacion);
rutaActualizarInfoArtesano.post('/artesano_actualizado',controladorActualizarInfoArtesano.devolverInicio);

module.exports=rutaActualizarInfoArtesano;