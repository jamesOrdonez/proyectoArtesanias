const res=require("express/lib/response")

const controlador={}

controlador.mostrarActualizacionProd=(req,res)=>{
    res.render('actualizarproducto.ejs');
}
controlador.devolverInicio=(req,res)=>{
    res.render('consultar_prod.ejs');
}
module.exports=controlador;