import { Router } from "express";
import * as wiFiController from "../controllers/wiFiController.js";
import { validateSchema } from "../middlewares/validateSchemaMiddleware.js";
import { wiFiSchema } from "../schemas/wiFiSchema.js";

const wiFiRoute = Router();

wiFiRoute.post("/wi-fi", validateSchema(wiFiSchema), wiFiController.create);
wiFiRoute.get("/wi-fi", wiFiController.get);
// wiFiRoute.delete("/wi-fi/:id", wiFiController);

export default wiFiRoute;
