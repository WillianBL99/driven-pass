import { Router } from "express";
import * as wiFiController from "../controllers/wiFiController.js";

const wiFiRoute = Router();

wiFiRoute.post("/wi-fi", wiFiController);
wiFiRoute.get("/wi-fi/?id", wiFiController);
wiFiRoute.delete("/wi-fi/:id", wiFiController);

export default wiFiRoute;
