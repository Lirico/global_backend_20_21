import dotenv from "dotenv";
dotenv.config();

import { connect } from "mongoose";

const MONGODB_URI = process.env.MONGODB_URI;

// IIFE -> Immediately Invoked Function Expression
// Funcion anonima autoejecutable
(
    async () => {
        try {
            await connect(MONGODB_URI);
            console.log("Base de datos conectada 😊");
        } catch (error) {
            console.log(error);
        }
    }
)();
