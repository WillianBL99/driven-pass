import { Router } from "express";
import { tokenValidation } from "../middlewares/tokenValidationMiddleware.js";
import authRoute from "./authRoute.js";
import cardsRoute from "./cardsRoute.js";
import credentialsRoute from "./credentialRoute.js";
import secureNotesRoute from "./secureNotesRoute.js";
import testRoute from "./test.js";

const router = Router();

router.use(authRoute);

credentialsRoute.use(tokenValidation);

router.use(credentialsRoute);
router.use(secureNotesRoute);
router.use(cardsRoute);

//FIXME: Route for automatic tests
router.use(testRoute);

export default router;
