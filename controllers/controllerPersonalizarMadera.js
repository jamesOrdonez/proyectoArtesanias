const res=require("express/lib/response")

const controlador={}

controlador.personalizacionMadera=(req,res)=>{
    res.render('personalizacionMadera.ejs');
}
controlador.volver=(req,res)=>{
    res.render('consultarProdComprador.ejs');
}
module.exports=controlador;