import express from "express";
import { getIntegralController, getFrancesController, getSaborizadoController } from "../controllers/pancitos.controller.js";

const pancitosRouter = express.Router();

pancitosRouter.get("/integral", getIntegralController)
pancitosRouter.get("/frances", getFrancesController)
pancitosRouter.get("/saborizado", getSaborizadoController)

export default pancitosRouter;