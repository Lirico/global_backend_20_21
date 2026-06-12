import express from "express";
const app = express();
import pancitosRouter from "../routers/pancitos.routes.js";
import tortasRouter from "../routers/tortas.routes.js";
// import {fileURLToPath} from 'url';
// import path, {dirname} from "path";

// Para ES Modules
// const __filename = fileURLToPath(import.meta.url);
// const __dirname = dirname(__filename);

app.get("/", (_, response) => {
  response.send("Bienvenidos a mi primer servidor. ¿Queres un pancito con quesito? 🥖🧀");
})

app.get("/pancitos", (_, response) => {
    response.json([{
        id: 1,
        tipo: "Frances",
        precio: 100
    },{
        id: 2,
        tipo: "Viena",
        precio: 80
    },{
        id: 3,
        tipo: "Integral",
        precio: 120
    }])
})

// Por convencion siempre se pone el api antes de las rutas de los routers
// Ej: /api/pancitos
app.use("/pancitos", pancitosRouter)

app.use("/tortas", tortasRouter)



// app.get("/api", (_, response)=> {
//     response.sendFile(path.join(__dirname, '../..', 'public', 'index.html'))
// })


export default app;

// router 1
// "pancitos/jorge"

// router 2
// "tortas/jorge"