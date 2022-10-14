import  express , {json} from 'express'
import  cors  from "cors"
import morgan from 'morgan'
import {productoRouter} from "./routers/producto.Router.js"


 
const app = express() 
const PORT  = process.env.PORT  ?? 3050

//middlewares

app.use(morgan('dev'))
app.use(json())
app.use(cors())
app.use(productoRouter)


app.listen(PORT, () =>{
    console.log(`ACTIVADO SERVIDOR" ${PORT}`)
} )
