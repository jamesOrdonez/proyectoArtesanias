const res=require("express/lib/response")

const controlador={}

controlador.personalizacionArcilla=(req,res)=>{
    res.render('personalizacionArcilla.ejs');
}
controlador.volver=(req,res)=>{
    res.render('consultarProdComprador.ejs');
}
module.exports=controlador;