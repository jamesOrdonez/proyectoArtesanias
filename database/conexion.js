const mysql = require("mysql");
const conexion = mysql.createConnection(
    {
        host:"localhost",
        user:"root",
        password:"",
        database:"artesania"
    }
);

conexion.connect((error)=>{
    if(!error){
        console.log('conexion exitosa');
    }else{
        console.log('Error al conectar con base de datos '+error);
    }
});
module.exports=conexion;