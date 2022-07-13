import { Router } from "express";
import * as secureNotesController from "../controllers/secureNotesController.js";

const secureNotesRoute = Router();

secureNotesRoute.post("/secure-note", secureNotesController);
secureNotesRoute.get("/secure-note/?id", secureNotesController);
secureNotesRoute.delete("/secure-note/:id", secureNotesController);

export default secureNotesRoute;
