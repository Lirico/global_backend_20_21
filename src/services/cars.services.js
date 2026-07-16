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

const addCarService = async (car) => {
    try {
        // Convierto el objeto JS a Mongo
        const newCar = await Cars(car);

        // Guardo el objeto en la DB
        await newCar.save();

        // Le paso al controller la respuesta correspondiente al frontend
        return {message: "Auto agregado correctamente", status: 201}
    } catch (error) {
        return {message: "Error del servidor", status: 500}
    }
}

const updateCarService = async (car, id) => {
    try {
        const carToUpdate = await Cars.findById(id);

        if(!carToUpdate) return {message: "No se encontraron autos", status: 404}

        carToUpdate.brand = car.brand;
        carToUpdate.price = car.price;
        carToUpdate.year = car.year;
        carToUpdate.model = car.model;
        carToUpdate.isNewCar = car.hasOwnProperty("isNewCar") 
            ? car.isNewCar 
            : carToUpdate.isNewCar;

        await carToUpdate.save();

        return {message: "Auto actualizado correctamente", status: 200}
    } catch (error) {
        return {message: "Error del servidor", status: 500}
    }
}

export {
    getAllCarsService,
    getCarByIdService,
    addCarService,
    updateCarService
}




// Front -> middleware -> Back -> model -> DB

// Patova = validacion
// model = contrato / regla / recordatorio


