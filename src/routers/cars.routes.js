import express from "express";
import { getAllCarsController, getCarByIdController, addCarController, updateCarController } from "../controllers/cars.controller.js";


const carsRouter = express.Router();


carsRouter.get('/', getAllCarsController)

carsRouter.get('/:id', getCarByIdController)

carsRouter.post('/', addCarController)

carsRouter.put('/:id', updateCarController)

carsRouter.delete('/:id', deleteCarController)


export default carsRouter;


// cars/66ecbbeda989ca36834374f3 -> BMW
// cars/69cb0b9f3c69b7dfcb782a00 -> Tesla

// cars/id se convierta en un parametro se le agregan dos puntitos.




/* 
    POST -> '/' -> Insertan un objeto 
         -> body -> {marca: "BMW", modelo: "X5", año: 2023, color: "Negro"}

    GET -> '/' -> Trae todos los objetos

    POST -> '/' -> Traiga los objetos de la pagina 2
         -> body -> {page: 2, limit: 10}

    const getCarsFromPageService = async (page, limit) => {
        const cars = await Cars.find().skip((page - 1) * limit).limit(limit);
    }
*/

