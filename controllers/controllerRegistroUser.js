const res=require("express/lib/response")

const controlador={}

controlador.mostrarIngresoUser=(req,res)=>{
    res.render('ingresar_user.ejs');
}
controlador.devolverInicio=(req,res)=>{
    res.render('indexAd.ejs');
}
module.exports=controlador;