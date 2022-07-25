const res=require("express/lib/response")
const conexion = require('../database/conexion');

const controlador={}

controlador.mostrarDetalleCompra=(req,res)=>{
       let sql=`select * from detalle_compra`;

    conexion.query(sql,(err,rows)=>{
    if(!err){
      res.render('detalleCompra.ejs',{detalle_compra:rows});
    }else{
      console.log(err);
    }
    })};
module.exports=controlador;