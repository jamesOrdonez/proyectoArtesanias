const res=require("express/lib/response")

const controlador={}

controlador.mostrarConsultaArcillaComprador=(req,res)=>{
    let productos_arcilla=[
        {nombre:"olla",
/*         imagen:"url(../img/olla-barro.jpg)", */
        descripcion:"olla de barro medidas 15x10",
        valor:"120000",
        stock:"10",
        estado:"disponible",
        proveedor:"Jose Perez"},

        {nombre:"vagilla",
/*         imagen:"url(../img/vagilla-barro.jpg)", */
        descripcion:"platos y posillos x2 unidades",
        valor:"130000",
        stock:"9",
        estado:"disponible",
        proveedor:"Sergio Torres"}
    ]
    res.render('consulta_arcilla_comprador.ejs',{lista:productos_arcilla});
}

module.exports=controlador;