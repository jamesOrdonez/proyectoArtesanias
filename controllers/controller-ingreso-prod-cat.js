const res=require("express/lib/response")

const controlador={}

controlador.consultaCatalogos=(req,res)=>{
    res.render('catalogo_productos.ejs');
}
controlador.ingresoProdMadera=(req,res)=>{
    res.render('ingresar_productos_madera.ejs');
}
controlador.ingresoProdArcilla=(req,res)=>{
    res.render('ingresar_productos_arcilla.ejs');
}
controlador.ingresoProdPiedra=(req,res)=>{
    res.render('ingresar_productos_piedra.ejs');
}
controlador.devolverInicio=(req,res)=>{
    res.render('indexAd.ejs');
}
module.exports=controlador;