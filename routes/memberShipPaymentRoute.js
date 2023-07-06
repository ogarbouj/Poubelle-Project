import express from "express";

import { PayAsync, InitPaymentAsync } from "../controllers/memberShipPaymentController.js";

const router = express.Router();
router.route("/").post(PayAsync); 
router.route("/:id").put(InitPaymentAsync); 


export default router;
