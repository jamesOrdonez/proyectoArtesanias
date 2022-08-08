const res=require("express/lib/response");
const conexion = require('../database/conexion');

const controlador={}

controlador.mostrarIngresoCatalogo=(req,res)=>{
     res.render('ingresar_catalogo.ejs'); 
}
controlador.ingresarCatalogo=(req,res)=>{
    let {nombre_catalogo}=req.body;
    let sql = `insert into catalogo (nombre_catalogo)
                values ('${nombre_catalogo}')`;
                conexion.query(sql,(err,rows)=>{
                  if(err) {
                      console.log(err);
                  }else{
                      res.redirect('/ingresa_catalogo');
                  }
          });  
    
}
controlador.devolverInicio=(req,res)=>{
    res.render('indexAd.ejs');
}
module.exports=controlador;