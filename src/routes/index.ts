import { Router } from "express";
import { tokenValidation } from "../middlewares/tokenValidationMiddleware.js";
import authRoute from "./authRoute.js";
import cardsRoute from "./cardsRoute.js";
import credentialsRoute from "./credentialRoute.js";
import secureNotesRoute from "./secureNotesRoute.js";
import testRoute from "./test.js";
import wiFiRoute from "./wiFiRoute.js";

const router = Router();

router.use(authRoute);

router.use(tokenValidation);

router.use(credentialsRoute);
router.use(secureNotesRoute);
router.use(cardsRoute);
router.use(wiFiRoute);

//FIXME: Route for automatic tests
router.use(testRoute);

export default router;
