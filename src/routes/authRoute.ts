import { Router } from "express";
import * as authController from "../controllers/authController.js";

const authRoute = Router();

authRoute.post("/sign-in", authController);
authRoute.post("/sign-up", authController);

export default authRoute;
