const res=require("express/lib/response")

const controlador={}

controlador.mostrarRegistroCat=(req,res)=>{
    res.render('ingresar_catalogo.ejs');
}
controlador.devolverInicio=(req,res)=>{
    res.render('indexAd.ejs');
}
module.exports=controlador;