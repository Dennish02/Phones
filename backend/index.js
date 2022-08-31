import express from 'express'
import brandsRoutes from './routes/brandsRoutes.js'
import cors from "cors";
const app = express();
 app.use(express.json());

//cors
app.use(cors());
app.use((req, res, next) => {
  res.header("Access-Control-Allow-Origin", "*"); // update to match the domain you will make the request from
  res.header(
    "Access-Control-Allow-Headers",
    "Origin, X-Requested-With, Content-Type, Accept"
  );
  res.header("Access-Control-Allow-Methods", "GET, POST, OPTIONS, PUT, DELETE");
  next();
});

// rutas
app.use('/brands',brandsRoutes )



 let PORT = 3001;

 let server = app.listen(PORT, ()=>{
    console.log(`app running to port ${PORT}`)
 })

 export {app, server}