
import  mysql  from 'mysql'

    const conexion  =   mysql.createConnection( {
    host: 'localhost',    
    user: 'root',
    password: 'nitro2020',
    database:'data02'
  
  })
   conexion.connect (err  => {
      if (err) throw err
      console.log("Conectado a la db")
   } )
  
  
export class TipoProductoService{
    
    static async listaTipoProducto(){
        const lista = conexion.query("select n_id, cpro,n_stkact  from alm_inventario where n_idfam = 2",function (err, result) {

            if (err) throw err;
            console.log("es" + result);
          });
        console.log(JSON.stringify(lista[0].c_des));   
        return lista;

    }

          
    
}

