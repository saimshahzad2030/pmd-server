import { Router } from "express";
import jwtConfig from "../middleware/jwt";
import { exchangePublicToken, createLinkToken, exchangeIdVerificationToken } from "../controllers/plaid.controller";

const router = Router()

router.route("/exchange-public-token")
    .post(jwtConfig.verifyUser, exchangePublicToken);

router.route("/exchange-id-verification-token")
    .post(exchangeIdVerificationToken);

router.route("/create-link-token")
    .post(jwtConfig.verifyUser, createLinkToken)


export default router;
