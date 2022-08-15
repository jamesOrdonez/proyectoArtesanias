const conexion = require('../database/conexion');
const res=require("express/lib/response")

const controlador={}

/* registro por primera vez */
controlador.frmRegistroUser=(req,res)=>{
    res.render('registrarse.ejs');
}
controlador.registrarUser=(req,res)=>{
    let {identificacion_user,nombre_user,telefono_user,direccion_user,password_user}=req.body;
    let sql = `insert into usuario (pk_identificacion ,nombre_user,telefono_user,tipo_usuario,direccion_user,password)
                values ('${identificacion_user}','${nombre_user}','${telefono_user}','comprador','${direccion_user}','${password_user}')`;
                conexion.query(sql,(err,datos)=>{
                  if(!err) res.send('Se registró con éxito el usuario');
                  else res.send("No se registro "+error);
          });  
}
/* ingreso usuarios*/
controlador.mostrarIngresoUser=(req,res)=>{
    res.render('ingresar_user.ejs');
}
controlador.registroUser=(req,res)=>{
    let {tipo_user,identificacion_user,nombre_user,telefono_user,direccion_user,password_user}=req.body;
    let sql = `insert into usuario (pk_identificacion ,nombre_user,telefono_user,tipo_usuario,direccion_user,password)
                values ('${identificacion_user}','${nombre_user}','${telefono_user}','${tipo_user}','${direccion_user}','${password_user}')`;
                conexion.query(sql,(err,rows)=>{
                  if(err) {
                      console.log(err);
                  }else{
                      res.redirect('/ingresa_user');
                  }
          });  
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