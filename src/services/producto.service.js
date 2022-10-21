import  mysql  from 'mysql'
let datos;

    const conexion  =   mysql.createConnection( {
    /*host: 'localhost',    
    user: 'root',
    password: 'nitro2020',
    database:'data02'*/
  
    /*host: '208.115.213.75',
    user: 'agrouser',
    password: '@groUs3r_',
    database:'agrovado_qa'*/
   host: 'qvti2nukhfiig51b.cbetxkdyhwsb.us-east-1.rds.amazonaws.com',
   user: 'ddvj6ahcpzp1cuw1',
   password: 'fx0hhjemj5i7q3a5',
   database: 'sez5lgvewaidh34f'

  
  })
  conexion.connect (err  => {
      if (err) throw err
      console.log("Conectado a la db")
   } )

   export class ProductoService{
    

    

    //endpoint para cargar el front

    
    static async listaProducto(){
       conexion.query("select n_id, c_despro  from pro_productos where n_idfam = 16",function (err, result) {

          if (err){ 
          console.log(err.message); // <= mostramos el mensaje en consola        
        }
            datos = JSON.parse(JSON.stringify(result));
          });
          
        
        return  datos;
        

    }



 
}

