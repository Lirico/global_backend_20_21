import { model, Schema } from 'mongoose';

// Schema es una clase. Queremos instanciar esta clase.
// model es un metodo.

// El schema nos permite crear una plantilla/template del objeto de la coleccion.

const CarSchema = Schema({
    brand: {
        type: String,
        require: true
    },
    price: {
        type: Number,
        require: true
    },
    model: {
        type: String,
        require: true
    },
    year: {
        type: Number,
        require: true
    },
    isNewCar: {
        type: Boolean,
        default: false
    }
})

const Cars = model("Car", CarSchema);


export default Cars;

/* 
    Argumentos del metodo "model" de mongoose.

    1er Argumento:
        - Define el nombre de cada objeto de tal coleccion. El nombre siempre va en singular con 
        la primera letra en mayuscula. Una vez definido el nombre, mongo sabe que debe conectarse
        con una coleccion cuyo nombre es el plural en minuscula del nombre del objeto definido.
    2do Argumento:
        - Le pasamos el Schema del modelo que representa cada objeto de la coleccion.
*/

// "Car" -> cars
// "Product" -> products
// "Tuvieja" -> tuviejas


/* 
    Cars.find()
    Cars.findOne()
    Cars.insertMany()
    Cars.insertOne()
    Cars.findOneAndUpdate()
    Cars.findOneAndDelete()
*/