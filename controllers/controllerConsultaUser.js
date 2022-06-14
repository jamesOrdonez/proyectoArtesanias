const res=require("express/lib/response")

const controlador={}

controlador.mostrarConsultaUser=(req,res)=>{
    let usuarios=[
        {tipo_user:"Administrador",
        cedula:"1084336775",
        nombre:"Santiago Ordoñez",
        numero:"3157654898",
        direccion:"San Agustin",
        email:"juan_perez@gmail.com",
        contraseña:"juan1234"},

        {tipo_user:"Artesano",
        cedula:"1084336745",
        nombre:"Valeria Torres",
        numero:"312367849",
        direccion:"San Agustin",
        email:"valeria2005@gmail.com",
        contraseña:"valeria1234"},
    ]
    res.render('consulta_usuarios.ejs',{lista:usuarios});
}
module.exports=controlador;