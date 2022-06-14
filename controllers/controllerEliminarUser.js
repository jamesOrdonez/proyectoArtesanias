const res=require("express/lib/response")

const controlador={}

controlador.mostrarEliminarUser=(req,res)=>{
    res.render('eliminar_user.ejs');
}
controlador.comfirmaEliminarUser=(req,res)=>{
    res.render('indexAd.ejs');
}
controlador.devolverEliminarUser=(req,res)=>{
    res.render('indexAd.ejs');
}
module.exports=controlador;