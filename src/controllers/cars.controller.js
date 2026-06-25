import { getAllCarsService, getCarByIdService } from "../services/cars.services.js";



const getAllCarsController = async (request, response) => {

    const cars = await getAllCarsService();

    response.json(cars);
}
const getCarByIdController = async (request, response) => {

    const car = await getCarByIdService(request.params.id);

    response.json(car);
}


export {
    getAllCarsController,
    getCarByIdController
}


const request = {
    header: {},
    body: {},
    params: {
        id: "668asdajhsdhaksda76382"
    }
}

// request.params.id