const res=require("express/lib/response")

const controlador={}

controlador.salir=(req,res)=>{
    res.render('home_page.ejs');
}
module.exports=controlador;