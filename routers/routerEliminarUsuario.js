const express = require('express');
const controladorEliminarUser=require('../controllers/controllerEliminarUser');
const rutaEliminarUser=express.Router();

rutaEliminarUser.get('/eliminar_user',controladorEliminarUser.mostrarEliminarUser);
rutaEliminarUser.get('/confirmaEliminarUser',controladorEliminarUser.comfirmaEliminarUser);
rutaEliminarUser.get('/devolverUser',controladorEliminarUser.devolverEliminarUser);


module.exports=rutaEliminarUser;