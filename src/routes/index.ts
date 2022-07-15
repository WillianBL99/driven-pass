import { Router } from "express";
import authRoute from "./authRoute.js";
import credentialsRoute from "./credentialRoute.js";
import testRoute from "./test.js";

const router = Router();

router.use(authRoute);
router.use(credentialsRoute);

//FIXME: Route for automatic tests
router.use(testRoute);

export default router;
