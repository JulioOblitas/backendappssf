
import { TipoProductoService   } from "../services/tipoProducto.service.js"

export async function listaTipoProducto(req, res) {

  try {
    const resultado = await TipoProductoService.listaTipoProducto  ({      
    });
    
    return res.json(resultado);
  } catch (error) {
    console.log( error);
  }
}






