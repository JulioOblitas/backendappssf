import  mysql  from 'mysql'
let datos;

    const conexion  =   mysql.createConnection( {
    /*host: 'localhost',    
    user: 'root',
    password: 'nitro2020',
    database:'data02'*/
  
    host: '208.115.213.75',
    user: 'agrouser',
    password: '@groUs3r_',
    database:'agrovado_qa'
  
  
  })
  conexion.connect (err  => {
      if (err) throw err
      console.log("Conectado a la db")
   } )

   export class ProductoService{
    

    

    //endpoint para cargar el front

    
    static async listaProducto(){
       conexion.query("select n_id, c_despro,n_stkact  from alm_inventario where n_idfam = 16",function (err, result) {

          if (err){ 
          console.log(err.message); // <= mostramos el mensaje en consola        
        }
            datos = JSON.parse(JSON.stringify(result));
          });
          
        
        return  datos;
        

    }



 
}

