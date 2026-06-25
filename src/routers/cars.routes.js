import express from "express";
import { getAllCarsController, getCarByIdController } from "../controllers/cars.controller.js";


const carsRouter = express.Router();


carsRouter.get('/', getAllCarsController)

carsRouter.get('/:id', getCarByIdController)


export default carsRouter;


// cars/66ecbbeda989ca36834374f3 -> BMW
// cars/69cb0b9f3c69b7dfcb782a00 -> Tesla

// cars/id se convierta en un parametro se le agregan dos puntitos.


