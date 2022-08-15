const res=require("express/lib/response")
const conexion = require('../database/conexion');

const controlador={}

controlador.listarProducto=(req,res)=>{
  let sql=`select * from producto`;
  conexion.query(sql,(error,datos)=>{
    if(!error) res.json(datos);
    else console.log('Error al listar usuarios');
  })
  let sql2=`select pk_identificacion, nombre_user from usuario`;
  conexion.query(sql2,(error2,datos2)=>{
    if(!error2) {res.render('indexAd.ejs',{lista:datos2});}
    else {res.send("error al consultar usuarios" +error2);}
  })
}




/* ingreso de productos al catálogo */
controlador.ingresoProd=(req,res)=>{
    res.render('ingresar_productos.ejs');
}
controlador.registrarProducto=(req,res)=>{
  let {nombre_prod,desc_prod,valor_prod,stock_prod,proveedor_prod,catalogo_prod}=req.body;
  let sql = `insert into producto (nombre_pdto,desc_pdto,valor_pdto,stock,proveedor,fk_catalogo)
              values ('${nombre_prod}','${desc_prod}','${valor_prod}',${stock_prod},'${proveedor_prod}',${catalogo_prod})`;
              conexion.query(sql,(err,rows)=>{
                if(err) {
                    console.log(err);
                }else{
                    res.redirect('/ingresar_catalogo');
                }
        });  
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
  let sql=`select * from catalogo`;
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
    res.redirect('consultar_prod.ejs');
}
controlador.devolverInicio3=(req,res)=>{
    res.redirect('consultar_prod.ejs');
}
//separar producto
controlador.separarProducto=(req,res)=>{
    res.render('separar_prod.ejs')
}
module.exports=controlador;