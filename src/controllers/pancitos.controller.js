
import { getIntegralService } from "../services/pancitos.services.js"

const getIntegralController = async (_, response) => {

        const integral = getIntegralService()

        response.json(integral)
}

const getFrancesController = (_, response) => {
        response.json({
        id: 1,
        tipo: "Frances",
        precio: 100
    })
}

const getSaborizadoController = (_, response) => {
        response.json({
        id: 1,
        tipo: "Saborizado",
        precio: 100
    })
}

export {
    getIntegralController,
    getFrancesController,
    getSaborizadoController
}