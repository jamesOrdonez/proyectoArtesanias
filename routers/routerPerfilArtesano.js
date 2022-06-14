const express = require('express');
const controladorPerfilArtesano=require('../controllers/controllerPerfilArtesano');
const rutaPerfilArtesano=express.Router();

rutaPerfilArtesano.get('/perfil_artesano',controladorPerfilArtesano.mostrarPerfilArtesano);

module.exports=rutaPerfilArtesano;