const res=require("express/lib/response")
const conexion = require('../database/conexion');

const controlador={}

controlador.mostrarConsultaCompra=(req,res)=>{
    let sql=`select * from compra`;

    conexion.query(sql,(err,rows)=>{
    if(!err){
      res.render('consultaCompras.ejs',{compra:rows});
    }else{
      console.log(err);
    }
    })};
module.exports=controlador;