const bodyParser = require('body-parser');//importamos body-parser
const express=require('express');

const servidor= express();

//configurando parametros

servidor.use(bodyParser.json());//configurando para recibir datos json
servidor.use(bodyParser.urlencoded({extended:false}))//configurando para recibir datos del formulario
servidor.use(express.static(__dirname+('/public')));//configuracion para crear y tener acceso a la acrpeta publica

servidor.set('view engine','ejs');//importamos el modulo ejs
servidor.set('views',__dirname+'/views');//agregamos la ruta donde se van a almacenar las vistas

//definendo rutas

servidor.use(require("./routers/routerInicio"));
servidor.use(require("./routers/routerUsuario"));
servidor.use(require("./routers/routerProducto"));
servidor.use(require("./routers/routerIngresoCatalogos"));
servidor.use(require("./routers/routerConsultaCompra"));
servidor.use(require("./routers/routerDetalleCompra"));
servidor.use(require("./routers/routerConsultaEnvios"));
servidor.use(require("./routers/routerSalir"));

servidor.listen(4000,()=>{
    console.log("el servidor se esta ejecutando en el puerto 4000");
});