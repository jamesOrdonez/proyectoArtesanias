const res=require("express/lib/response")

const controlador={}

controlador.mostrarEliminar=(req,res)=>{
    res.render('eliminarProducto.ejs');
}
controlador.preguntaEliminar=(req,res)=>{
    res.render('consultar_prod.ejs');
}
controlador.devolverInicio=(req,res)=>{
    res.render('consultar_prod.ejs');
}
module.exports=controlador;