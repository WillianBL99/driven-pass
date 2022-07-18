import { Router } from "express";
import * as cardsController from "../controllers/cardsController.js";
import { validateSchema } from "../middlewares/validateSchemaMiddleware.js";
import { cardSchemas } from "../schemas/cardSchema.js";

const cardsRoute = Router();

cardsRoute.post("/card", validateSchema(cardSchemas), cardsController.create);
// cardsRoute.get("/card/?id", cardsController);
// cardsRoute.delete("/card/:id", cardsController);

export default cardsRoute;
