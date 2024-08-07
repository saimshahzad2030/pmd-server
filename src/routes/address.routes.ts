
import { Router } from "express";

import jwtConfig from "../middleware/jwt"; 
import { addNewAddress, deleteAddress, updateAddress } from "../controllers/address.controller";
const router = Router() 

router.route("/address")
    .post(jwtConfig.verifyUser,addNewAddress)
    .delete(jwtConfig.verifyUser,deleteAddress)
    .patch(jwtConfig.verifyUser,updateAddress); 
 

export default router;
