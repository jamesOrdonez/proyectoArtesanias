const res=require("express/lib/response")

const controlador={}

controlador.consultaCatalogos=(req,res)=>{
    res.render('catalogo_productos.ejs');
}
controlador.devolverInicio=(req,res)=>{
    res.render('indexAd.ejs');
}
module.exports=controlador;