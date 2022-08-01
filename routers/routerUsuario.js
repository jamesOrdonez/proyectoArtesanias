const express = require('express');
const controladorUsuario=require('../controllers/controllerUsuario');
const rutaUser=express.Router();

/* registro por primera vez */
rutaUser.get('/registrarse',controladorUsuario.mostrarRegistro);
rutaUser.post('/registro',controladorUsuario.registroUsuario);
/* ingreso usuarios*/
rutaUser.get('/ingresa_user',controladorUsuario.mostrarIngresoUser);
rutaUser.post('/ingresar_user',controladorUsuario.registroUser);
/* ingreso a la pagina principal despues de registrarse */
rutaUser.get('/ingresar',controladorUsuario.mostrarIngreso);
rutaUser.post('/ingreso',controladorUsuario.concederIngreso);
/* consulta de usuarios */
rutaUser.get('/consulta_user',controladorUsuario.mostrarConsultaUser);
/* actualizar */
rutaUser.get('/actualizar_user',controladorUsuario.mostrarActualizarUser);
rutaUser.post('/usuario_actualizado',controladorUsuario.devolverActualizacion);
/* eliminar */
rutaUser.get('/eliminar_user',controladorUsuario.mostrarEliminarUser);
rutaUser.get('/confirmaEliminarUser',controladorUsuario.comfirmaEliminarUser);
rutaUser.get('/devolverUser',controladorUsuario.devolverEliminarUser);
/* consulta de perfil desde artesano */
rutaUser.get('/perfil_artesano',controladorUsuario.mostrarPerfilArtesano);
/* actualizacion info perfil artesano */
rutaUser.get('/actualizar_artesano',controladorUsuario.mostrarActualizacion);
rutaUser.post('/artesano_actualizado',controladorUsuario.devolverActualizacionArtesano);
module.exports=rutaUser;