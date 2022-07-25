const res=require("express/lib/response")

const controlador={}

controlador.mostrarEnvios=(req,res)=>{
    let envios=[

        {codigo:"1873",
        estado:"enviado",
        fecha:"25/03/2022",
        destinatario:"Juan Vasquez",
        destino:"San agustín",
        observacion:"Producto enviado sin novedades."},
                
        {codigo:"1873",
        estado:"enviado",
        fecha:"25/03/2022",
        destinatario:"Juan Vasquez",
        destino:"San agustín",
        observacion:"Producto enviado sin novedades."},
        
        {codigo:"1873",
        estado:"enviado",
        fecha:"25/03/2022",
        destinatario:"Juan Vasquez",
        destino:"San agustín",
        observacion:"Producto enviado sin novedades."},
        
        {codigo:"1873",
        estado:"enviado",
        fecha:"25/03/2022",
        destinatario:"Juan Vasquez",
        destino:"San agustín",
        observacion:"Producto enviado sin novedades."},
        
        {codigo:"1873",
        estado:"enviado",
        fecha:"25/03/2022",
        destinatario:"Juan Vasquez",
        destino:"San agustín",
        observacion:"Producto enviado sin novedades."},
        
        {codigo:"1873",
        estado:"enviado",
        fecha:"25/03/2022",
        destinatario:"Juan Vasquez",
        destino:"San agustín",
        observacion:"Producto enviado sin novedades."},
        
        {codigo:"1873",
        estado:"enviado",
        fecha:"25/03/2022",
        destinatario:"Juan Vasquez",
        destino:"San agustín",
        observacion:"Producto enviado sin novedades."},
        
        {codigo:"1873",
        estado:"enviado",
        fecha:"25/03/2022",
        destinatario:"Juan Vasquez",
        destino:"San agustín",
        observacion:"Producto enviado sin novedades."},
        
        {codigo:"1873",
        estado:"enviado",
        fecha:"25/03/2022",
        destinatario:"Juan Vasquez",
        destino:"San agustín",
        observacion:"Producto enviado sin novedades."},
        
        {codigo:"1873",
        estado:"enviado",
        fecha:"25/03/2022",
        destinatario:"Juan Vasquez",
        destino:"San agustín",
        observacion:"Producto enviado sin novedades."},
        
        {codigo:"1873",
        estado:"enviado",
        fecha:"25/03/2022",
        destinatario:"Juan Vasquez",
        destino:"San agustín",
        observacion:"Producto enviado sin novedades."},
        
        {codigo:"1873",
        estado:"enviado",
        fecha:"25/03/2022",
        destinatario:"Juan Vasquez",
        destino:"San agustín",
        observacion:"Producto enviado sin novedades."},
        
        {codigo:"1873",
        estado:"enviado",
        fecha:"25/03/2022",
        destinatario:"Juan Vasquez",
        destino:"San agustín",
        observacion:"Producto enviado sin novedades."},
        
        {codigo:"1873",
        estado:"enviado",
        fecha:"25/03/2022",
        destinatario:"Juan Vasquez",
        destino:"San agustín",
        observacion:"Producto enviado sin novedades."},
        
        {codigo:"1873",
        estado:"enviado",
        fecha:"25/03/2022",
        destinatario:"Juan Vasquez",
        destino:"San agustín",
        observacion:"Producto enviado sin novedades."},
        
        {codigo:"1873",
        estado:"enviado",
        fecha:"25/03/2022",
        destinatario:"Juan Vasquez",
        destino:"San agustín",
        observacion:"Producto enviado sin novedades."},
        
        {codigo:"1873",
        estado:"enviado",
        fecha:"25/03/2022",
        destinatario:"Juan Vasquez",
        destino:"San agustín",
        observacion:"Producto enviado sin novedades."},
        
        {codigo:"1873",
        estado:"enviado",
        fecha:"25/03/2022",
        destinatario:"Juan Vasquez",
        destino:"San agustín",
        observacion:"Producto enviado sin novedades."},
        
        {codigo:"1873",
        estado:"enviado",
        fecha:"25/03/2022",
        destinatario:"Juan Vasquez",
        destino:"San agustín",
        observacion:"Producto enviado sin novedades."},
        
        {codigo:"1873",
        estado:"enviado",
        fecha:"25/03/2022",
        destinatario:"Juan Vasquez",
        destino:"San agustín",
        observacion:"Producto enviado sin novedades."},
        
        {codigo:"1873",
        estado:"enviado",
        fecha:"25/03/2022",
        destinatario:"Juan Vasquez",
        destino:"San agustín",
        observacion:"Producto enviado sin novedades."},
        
        {codigo:"3543564",
        estado:"enviado",
        fecha:"25/03/2022",
        destinatario:"Juan Vasquez",
        destino:"San agustín",
        observacion:"Producto enviado sin novedades."},

    ]
    res.render('consultaEnvios.ejs',{lista:envios});
}
module.exports=controlador;