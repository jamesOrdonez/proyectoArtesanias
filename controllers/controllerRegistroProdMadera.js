const res=require("express/lib/response")

const controlador={}

controlador.mostrarRegistroProdMadera=(req,res)=>{
    let productos_madera=[
        {nombre:"mesa",
        descripcion:"mesa de madera medidas 120x60",
        valor:"120000",
        stock:"10",
        estado:"disponible",
        proveedor:"Jose Perez"},

        {nombre:"Silla",
        descripcion:"silla de madera medidas 80x40",
        valor:"100000",
        stock:"9",
        estado:"disponible",
        proveedor:"Sergio Torres"}
    ]
    res.render('consulta_madera.ejs',{lista:productos_madera});
}
module.exports=controlador;