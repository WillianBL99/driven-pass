import { Router } from "express";
import * as authController from "../controllers/authController.js";
import { validateSchema } from "../middlewares/validateSchemaMiddleware.js";
import { signUp } from "../schemas/authSchema.js";

const authRoute = Router();

//authRoute.post("/sign-in", authController);
authRoute.post("/sign-up", validateSchema(signUp), authController.signUp);

export default authRoute;
