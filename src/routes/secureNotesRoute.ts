import { Router } from "express";
import * as secureNotesController from "../controllers/secureNotesController.js";
import { validateSchema } from "../middlewares/validateSchemaMiddleware.js";
import { secureNoteSchema } from "../schemas/secureNoteSchema.js";

const secureNotesRoute = Router();

secureNotesRoute.post(
  "/secure-note",
  validateSchema(secureNoteSchema),
  secureNotesController.create
);
secureNotesRoute.get("/secure-note", secureNotesController.get);
secureNotesRoute.delete("/secure-note/:id", secureNotesController.remove);

export default secureNotesRoute;
