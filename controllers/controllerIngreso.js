const res=require("express/lib/response")

const controlador={}

controlador.mostrarIngreso=(req,res)=>{
    res.render('ingresar.ejs');
}
controlador.concederIngreso=(req,res)=>{
    let {txttype, txtc, txtpass}=req.body;
    if(txttype == "comprador"){
        res.render('consultarProdComprador.ejs');
    }
    if(txttype == "artesano"){
        res.render('indexAr.ejs');
    }
    if(txttype == "administrador"){
        res.render('indexAd.ejs');
    }
}
module.exports=controlador;