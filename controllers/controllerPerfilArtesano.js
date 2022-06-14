const res=require("express/lib/response")

const controlador={}

controlador.mostrarPerfilArtesano=(req,res)=>{
    let info_artesano=[
        {identificacion:"108435647",
        nombre:"Marcos becerra",
        telefono:"3223564783",
        tipo_user:"artesano",
        direccion:"San agusín",
        contraseña:"marcos1234"},
    ]
    res.render('perfilartesano.ejs',{lista:info_artesano});
}
module.exports=controlador;