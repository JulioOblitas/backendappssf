import { Router } from "express";
import {listaTipoProducto} from "../controllers/tipoProducto.controller.js";
export  const  tipoProductoRouter = Router()

tipoProductoRouter.route("/tipoproducto").get(listaTipoProducto);
/*tipoProductoRouter.route("/tipoproducto/:id").delete(eliminarTipoProducto);
tipoProductoRouter.route("/tipoproducto/:id").get(listaTipoProductoId);
tipoProductoRouter.route("/tipoproducto/:id").put(actualizarTipoProducto);
tipoProductoRouter.route("/tipoproductobuscar").get(listaTipoProductoNombre);*/


