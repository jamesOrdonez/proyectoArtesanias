const express = require('express');
const controladorProducto=require('../controllers/controllerProducto');
const rutaProducto=express.Router();

/* ingreso de productos al catálogo */
rutaProducto.get('/ingresar_catalogo',controladorProducto.ingresoProd);
rutaProducto.post('/registrarProducto',controladorProducto.registrarProducto);
rutaProducto.post('/ingreso_prod',controladorProducto.devolverInicio);
/* consulta de catalogos con productos registrados */
rutaProducto.get('/consulta_prod',controladorProducto.mostrarRegistroProd);
                                    //madera
/* consulta */
rutaProducto.get('/consulta_madera',controladorProducto.mostrarRegistroProdMadera);
//consulta desde comprador
rutaProducto.get('/consulta_madera_comprador',controladorProducto.mostrarConsultaMaderaComprador);
/* personalizacion */
rutaProducto.get('/personalizarMadera',controladorProducto.personalizacionMadera);
rutaProducto.post('/volver',controladorProducto.volver);
                                    //arcilla
/* consulta */
rutaProducto.get('/consulta_arcilla',controladorProducto.mostrarRegistroProdArcilla);
//consulta desde comprador
rutaProducto.get('/consulta_arcilla_comprador',controladorProducto.mostrarConsultaArcillaComprador);
//personalizacion 
rutaProducto.get('/personalizarArcilla',controladorProducto.personalizacionArcilla);
rutaProducto.post('/volver',controladorProducto.volver);
                                    //piedra
/* consulta piedra */
rutaProducto.get('/consulta_piedra',controladorProducto.mostrarRegistroProdPiedra);
//consulta desde comprador
rutaProducto.get('/consulta_piedra_comprador',controladorProducto.mostrarConsultaPiedraComprador);
//personalizacion piedra
rutaProducto.get('/personalizarPiedra',controladorProducto.personalizacionPiedra);
rutaProducto.post('/volver',controladorProducto.volver);
//actualizar
rutaProducto.get('/actualizarProducto',controladorProducto.mostrarActualizacionProd);
rutaProducto.post('/actualizacion_madera',controladorProducto.devolverInicio2);
//eliminar
rutaProducto.get('/eliminarProducto',controladorProducto.mostrarEliminar);
rutaProducto.get('/confirmaEliminarProducto',controladorProducto.preguntaEliminar);
rutaProducto.get('/devolverProd',controladorProducto.devolverInicio3);
//separar producto
rutaProducto.get('/separarProducto',controladorProducto.separarProducto);
module.exports=rutaProducto;