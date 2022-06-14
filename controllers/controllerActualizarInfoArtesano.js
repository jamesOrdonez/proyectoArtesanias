const res=require("express/lib/response")

const controlador={}

controlador.mostrarActualizacion=(req,res)=>{
    res.render('actualizarArtesano.ejs');
}
controlador.devolverInicio=(req,res)=>{
    res.render('indexAr.ejs');
}
module.exports=controlador;