import { Router } from "express";
import * as credentialsController from "../controllers/credentialsController.js";

const credentialsRoute = Router();

credentialsRoute.post("/credential", credentialsController);
credentialsRoute.get("/credential/?id", credentialsController);
credentialsRoute.delete("/credential/:id", credentialsController);

export default credentialsRoute;
