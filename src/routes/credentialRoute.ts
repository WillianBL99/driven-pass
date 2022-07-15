import { Router } from "express";
import * as credentialsController from "../controllers/credentialsController.js";
import { tokenValidation } from "../middlewares/tokenValidationMiddleware.js";
import { validateSchema } from "../middlewares/validateSchemaMiddleware.js";
import { credentialSchema } from "../schemas/credentialSchema.js";

const credentialsRoute = Router();

credentialsRoute.use(tokenValidation);

credentialsRoute.post(
  "/credential",
  validateSchema(credentialSchema),
  credentialsController.create
);
// credentialsRoute.get("/credential/?id", credentialsController);
// credentialsRoute.delete("/credential/:id", credentialsController);

export default credentialsRoute;
