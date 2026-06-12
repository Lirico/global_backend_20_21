import express from "express";

const pancitosRouter = express.Router();

pancitosRouter.get("/integral", (_, response) => {
        response.json({
        id: 3,
        tipo: "Integral",
        precio: 120
    })
})
pancitosRouter.get("/frances", (_, response) => {
        response.json({
        id: 1,
        tipo: "Frances",
        precio: 100
    })
})
pancitosRouter.get("/saborizado", (_, response) => {
        response.json({
        id: 1,
        tipo: "Saborizado",
        precio: 100
    })
})

export default pancitosRouter;