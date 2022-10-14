import {Router} from "express"
import {  listaProducto} from "../controllers/producto.controller.js"
export const productoRouter = Router()
productoRouter.route("/producto").get(listaProducto);
