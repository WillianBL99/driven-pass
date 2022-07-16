import { Router } from "express";
import * as credentialsController from "../controllers/credentialsController.js";
import { validateSchema } from "../middlewares/validateSchemaMiddleware.js";
import { credentialSchema } from "../schemas/credentialSchema.js";

const credentialsRoute = Router();

credentialsRoute.post(
  "/credential",
  validateSchema(credentialSchema),
  credentialsController.create
);
credentialsRoute.get("/credential", credentialsController.get);
credentialsRoute.delete("/credential/:id", credentialsController.remove);

export default credentialsRoute;
