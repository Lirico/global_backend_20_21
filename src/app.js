import app from "./server/server.js";
import dotenv from 'dotenv';
dotenv.config(); // process.env -> Archivo .env
import './db/config.js';

const PORT = process.env.PORT

app.listen(PORT, console.log(`😊 -> Servidor escuchando en el puerto ${PORT}`));
