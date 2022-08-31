import express from 'express'
import brandsRoutes from './routes/brandsRoutes.js'

const app = express();
 app.use(express.json());

// rutas
app.use('/brands',brandsRoutes )



 let PORT = 3001;

 let server = app.listen(PORT, ()=>{
    console.log(`app running to port ${PORT}`)
 })

 export {app, server}