const res=require("express/lib/response")
const conexion = require('../database/conexion');

const controlador={}

/* ingreso de productos al catálogo */
controlador.consultaCatalogos=(req,res)=>{
    res.render('catalogo_productos.ejs');
}
controlador.ingresoProdMadera=(req,res)=>{
    res.render('ingresar_productos_madera.ejs');
}
controlador.ingresoProdArcilla=(req,res)=>{
    res.render('ingresar_productos_arcilla.ejs');
}
controlador.ingresoProdPiedra=(req,res)=>{
    res.render('ingresar_productos_piedra.ejs');
}
controlador.devolverInicio=(req,res)=>{
    res.render('indexAd.ejs');
}
/* consulta de catalogos con productos registrados */
controlador.mostrarRegistroProd=(req,res)=>{
    res.render('consultar_prod.ejs');
};

                    //madera
/* consulta */
controlador.mostrarRegistroProdMadera=(req,res)=>{
    let sql=`select * from producto where fk_catalogo=2`;

    conexion.query(sql,(err,rows)=>{
    if(!err){
      res.render('consulta_madera.ejs',{producto:rows});
    }else{
      console.log(err);
    }
    })};
//consulta desde comprador
controlador.mostrarConsultaMaderaComprador=(req,res)=>{
    let sql=`select * from producto where fk_catalogo=2 `;

    conexion.query(sql,(err,rows)=>{
    if(!err){
      res.render('consulta_madera_comprador.ejs',{producto:rows});
    }else{
      console.log(err);
    }
    })};
/* personalizacion */
controlador.personalizacionMadera=(req,res)=>{
    res.render('personalizacionMadera.ejs');
}
controlador.volver=(req,res)=>{
    res.render('consultarProdComprador.ejs');
}
                        
                        //arcilla
/* consulta */
controlador.mostrarRegistroProdArcilla=(req,res)=>{
    let sql=`select * from producto where fk_catalogo=1`;

    conexion.query(sql,(err,rows)=>{
    if(!err){
      res.render('consulta_arcilla.ejs',{producto:rows});
    }else{
      console.log(err);
    }
    })};
//consulta comprador
controlador.mostrarConsultaArcillaComprador=(req,res)=>{
    let sql=`select * from producto where fk_catalogo=1`;

    conexion.query(sql,(err,rows)=>{
    if(!err){
      res.render('consulta_arcilla_comprador.ejs',{producto:rows});
    }else{
      console.log(err);
    }
    })};
//personalizacion 
controlador.personalizacionArcilla=(req,res)=>{
    res.render('personalizacionArcilla.ejs');
}
controlador.volver=(req,res)=>{
    res.render('consultarProdComprador.ejs');
}

                //piedra
/* consulta */
controlador.mostrarRegistroProdPiedra=(req,res)=>{
    let sql=`select * from producto where fk_catalogo=3`;

    conexion.query(sql,(err,rows)=>{
    if(!err){
      res.render('consulta_piedra.ejs',{producto:rows});
    }else{
      console.log(err);
    }
    })};
//consulta desde comprador
controlador.mostrarConsultaPiedraComprador=(req,res)=>{
    let sql=`select * from producto where fk_catalogo=3`;

    conexion.query(sql,(err,rows)=>{
    if(!err){
      res.render('consulta_piedra_comprador.ejs',{producto:rows});
    }else{
      console.log(err);
    }
    })};
//personalizacion
controlador.personalizacionPiedra=(req,res)=>{
    res.render('personalizacionPiedra.ejs');
}
controlador.volver=(req,res)=>{
    res.render('consultarProdComprador.ejs');
}
//actualizar
controlador.mostrarActualizacionProd=(req,res)=>{
    res.render('actualizarproducto.ejs');
}
controlador.devolverInicio2=(req,res)=>{
    res.render('consultar_prod.ejs');
}
//eliminar
controlador.mostrarEliminar=(req,res)=>{
    res.render('eliminarProducto.ejs');
}
controlador.preguntaEliminar=(req,res)=>{
    res.render('consultar_prod.ejs');
}
controlador.devolverInicio3=(req,res)=>{
    res.render('consultar_prod.ejs');
}
controlador.separarProducto=(req,res)=>{
    res.render('separar_prod.ejs')
}
module.exports=controlador;