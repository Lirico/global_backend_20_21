import { getAllCarsService, getCarByIdService, addCarService, updateCarService } from "../services/cars.services.js";



const getAllCarsController = async (request, response) => {

    const cars = await getAllCarsService();

    response.json(cars);
}
const getCarByIdController = async (request, response) => {

    const car = await getCarByIdService(request.params.id);

    response.json(car);
}

const addCarController = async (request, response) => {
     const resultMessage = await addCarService(request.body);

     response.json(resultMessage);
}

const updateCarController = async (request, response) => {
    const resultMessage = await updateCarService(request.body, request.params.id);

    response.json(resultMessage);
}

export {
    getAllCarsController,
    getCarByIdController,
    addCarController,
    updateCarController
}


