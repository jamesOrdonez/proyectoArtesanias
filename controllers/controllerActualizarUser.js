const res=require("express/lib/response")

const controlador={}

controlador.mostrarActualizarUser=(req,res)=>{
    res.render('actualizar_usuario.ejs');
}
controlador.devolverInicio=(req,res)=>{
    res.render('indexAd.ejs');
}
module.exports=controlador;