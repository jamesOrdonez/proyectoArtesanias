const res=require("express/lib/response")

const controlador={}

controlador.mostrarRegistroProdArcilla=(req,res)=>{
    let productos_arcilla=[
        {nombre:"olla",
        descripcion:"olla de barro medidas 15x10",
        valor:"120000",
        stock:"10",
        estado:"disponible",
        proveedor:"Jose Perez"},

        {nombre:"vagilla",
        descripcion:"platos y posillos x2 unidades",
        valor:"130000",
        stock:"9",
        estado:"disponible",
        proveedor:"Sergio Torres"}
    ]
    res.render('consulta_arcilla.ejs',{lista:productos_arcilla});
};
module.exports=controlador;