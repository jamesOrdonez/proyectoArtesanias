const res = require("express/lib/response")

const controlador={}

controlador.mostrarInicio=(req,res)=>{
    res.render('home_page.ejs');
}
module.exports=controlador;