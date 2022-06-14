const res=require("express/lib/response")

const controlador={}

controlador.mostrarRegistroProd=(req,res)=>{
    res.render('consultar_prod.ejs');
};
module.exports=controlador;