const res=require("express/lib/response")

const controlador={}

controlador.mostrarRegistroProdPiedra=(req,res)=>{
    let productos_piedra=[
        {nombre:"escultura",
        descripcion:"escultura de marmol medidas 90x40",
        valor:"520000",
        stock:"5",
        estado:"disponible",
        proveedor:"Jose Perez"},
    
        {nombre:"Mesa",
        descripcion:"mesa de marmol medidas 120x70",
        valor:"130000",
        stock:"9",
        estado:"disponible",
        proveedor:"Sergio Torres"}
        ]
        res.render('consulta_piedra.ejs',{lista:productos_piedra});
};
module.exports=controlador;