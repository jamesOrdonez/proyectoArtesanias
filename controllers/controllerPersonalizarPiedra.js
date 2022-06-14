const res=require("express/lib/response")

const controlador={}

controlador.personalizacionPiedra=(req,res)=>{
    res.render('personalizacionPiedra.ejs');
}
controlador.volver=(req,res)=>{
    res.render('consultarProdComprador.ejs');
}
module.exports=controlador;