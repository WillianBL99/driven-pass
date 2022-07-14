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
// credentialsRoute.get("/credential/?id", credentialsController);
// credentialsRoute.delete("/credential/:id", credentialsController);

export default credentialsRoute;
