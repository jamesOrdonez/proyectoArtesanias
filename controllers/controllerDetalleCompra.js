const res=require("express/lib/response")

const controlador={}

controlador.mostrarDetalleCompra=(req,res)=>{
    let detalle_compra=[
        {cantidad:"25",
        precio_unitario:"12000",
        total:"300000",
        fk_prod:"Manillas",
        fk_envio:"1873"},

        {cantidad:"10",
        precio_unitario:"5000",
        total:"50000",
        fk_prod:"aretes",
        fk_envio:"1873"},
        
    ]
    res.render('detalleCompra.ejs',{lista:detalle_compra});
}
module.exports=controlador;