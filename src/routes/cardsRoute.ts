import { Router } from "express";
import * as cardsController from "../controllers/cardsController.js";

const cardsRoute = Router();

cardsRoute.post("/card", cardsController);
cardsRoute.get("/card/?id", cardsController);
cardsRoute.delete("/card/:id", cardsController);

export default cardsRoute;
