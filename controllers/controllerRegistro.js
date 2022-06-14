const res=require("express/lib/response")

const controlador={}

controlador.mostrarRegistro=(req,res)=>{
    res.render('registrarse.ejs');
}
controlador.devolverInicio=(req,res)=>{
    res.render('home_page.ejs');
}
module.exports=controlador;