const res=require("express/lib/response")

const controlador={}

controlador.mostrarConsultaCompra=(req,res)=>{
    let compras =[
        {fecha:"25/03/2022",
        valor:"350.000",
        forma_pago:"efectivo",
        abono:"300.000",
        pendiente:"50.000",
        fk_envio:"1873",
        fk_usuario:"Juan vasquez"}
    ]
    res.render('consultaCompras.ejs',{lista:compras});
}
module.exports=controlador;