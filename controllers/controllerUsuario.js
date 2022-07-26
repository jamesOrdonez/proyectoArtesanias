const conexion = require('../database/conexion');
const res=require("express/lib/response")

const controlador={}

/* ingreso usuarios*/
controlador.mostrarIngresoUser=(req,res)=>{
    res.render('ingresar_user.ejs');
}
controlador.devolverIndex=(req,res)=>{
    res.render('indexAd.ejs');
}
controlador.devolverAdmin=(req,res)=>{
    res.render('indexAd.ejs');
}
/* registro por primera vez */
controlador.mostrarRegistro=(req,res)=>{
    res.render('registrarse.ejs');
}
controlador.devolverInicio=(req,res)=>{
    res.render('home_page.ejs');
}
/* ingreso a la pagina principal despues de registrarse */
controlador.mostrarIngreso=(req,res)=>{
    res.render('ingresar.ejs');
}
controlador.concederIngreso=(req,res)=>{
    let {txttype, txtc, txtpass}=req.body;
    if(txttype == "comprador"){
        res.render('consultarProdComprador.ejs');
    }
    if(txttype == "artesano"){
        res.render('indexAr.ejs');
    }
    if(txttype == "administrador"){
        res.render('indexAd.ejs');
    }
}
/* consulta de usuarios */
controlador.mostrarConsultaUser=(req,res)=>{
    let sql=`select * from usuario`;

conexion.query(sql,(err,rows)=>{
if(!err){
  res.render('consulta_usuarios.ejs',{usuario:rows});
}else{
  console.log(err);
}
})};
/* actualizar */
controlador.mostrarActualizarUser=(req,res)=>{
    res.render('actualizar_usuario.ejs');
}
controlador.devolverActualizacion=(req,res)=>{
    res.render('indexAd.ejs');
}
/* eliminar */
controlador.mostrarEliminarUser=(req,res)=>{
    res.render('eliminar_user.ejs');
}
controlador.comfirmaEliminarUser=(req,res)=>{
    res.render('indexAd.ejs');
}
controlador.devolverEliminarUser=(req,res)=>{
    res.render('indexAd.ejs');
}
/* consulta de perfil desde artesano */
controlador.mostrarPerfilArtesano=(req,res)=>{
    let sql=`select * from usuario where tipo_usuario="artesano" && pk_identificacion = 2147483647 `;

conexion.query(sql,(err,rows)=>{
if(!err){
  res.render('perfilArtesano.ejs',{artesano:rows});
}else{
  console.log(err);
}
})};
/* actualizacion info perfil artesano */
controlador.mostrarActualizacion=(req,res)=>{
    res.render('actualizarArtesano.ejs');
}
controlador.devolverActualizacionArtesano=(req,res)=>{
    res.render('indexAr.ejs');
}
module.exports=controlador;