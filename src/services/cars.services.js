import Cars from "../models/car.model.js"


const getAllCarsService = async () => {
    try {
        const allCars = await Cars.find();

        if(!allCars) return {message: "No se encontraron autos", status: 404}

        return allCars;

    } catch (error) {
        return {message: "Error del servidor", status: 500}
    }
}

const getCarByIdService = async (id) => {
    try {
        const car = await Cars.findById(id);

        if(!car) return {message: "No se encontraron autos", status: 404}

        return car;

    } catch (error) {
        return {message: "Error del servidor", status: 500}
    }
}

export {
    getAllCarsService,
    getCarByIdService
}




// Front -> middleware -> Back -> model -> DB

// Patova = validacion
// model = contrato / regla / recordatorio