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
servidor.use(require("./routers/routerRegistro"));
servidor.use(require("./routers/routerIngreso"));
servidor.use(require("./routers/router-ingreso-prod-catalogo"));
servidor.use(require("./routers/routerIngresoUsuarios"));
servidor.use(require("./routers/routerIngresoCatalogos"));
servidor.use(require("./routers/routerConsultaProd"));
servidor.use(require("./routers/routerConsultaProdMadera"));
servidor.use(require("./routers/routerIngresoProdArcilla"));
servidor.use(require("./routers/routerIngresoProdPiedra"));
servidor.use(require("./routers/routerActualizarProd"));
servidor.use(require("./routers/routerEliminarProd"));
servidor.use(require("./routers/routerConsultaUser"));
servidor.use(require("./routers/routerActualizarUser"));
servidor.use(require("./routers/routerEliminarUsuario"));
servidor.use(require("./routers/routerConsultaCompra"));
servidor.use(require("./routers/routerDetalleCompra"));
servidor.use(require("./routers/routerConsultaEnvios"));
servidor.use(require("./routers/routerPerfilArtesano"));
servidor.use(require("./routers/routerActualizarInfoArtesano"));
servidor.use(require("./routers/routerConsultaArcillaComprador"));
servidor.use(require("./routers/routerConsultaMaderaComprador"));
servidor.use(require("./routers/routerConsultaPiedraComprador"));
servidor.use(require("./routers/routerSalir"));
servidor.use(require("./routers/routerPersonalizarArcilla"));
servidor.use(require("./routers/routerPersonalizarMadera"));
servidor.use(require("./routers/routerPersonalizarPiedra"));

servidor.listen(3000,()=>{
    console.log("el servidor se esta ejecutando en el puerto 3000");
});