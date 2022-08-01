const res=require("express/lib/response");
const conexion = require('../database/conexion');

const controlador={}

controlador.mostrarEnvios=(req,res)=>{
    let sql=`select * from envio`;

    conexion.query(sql,(err,rows)=>{
    if(!err){
      res.render('consultaEnvios.ejs',{envio:rows});
    }else{
      console.log(err);
    }
    })};
module.exports=controlador;