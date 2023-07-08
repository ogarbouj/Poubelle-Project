import express from "express";

import {
  PayAsync,
  InitPaymentAsync,
  GetAllAsync,
  GetByIdAsync,
} from "../controllers/memberShipPaymentController.js";

const router = express.Router();
router.route("/").post(PayAsync).get(GetAllAsync);
router.route("/:id").put(InitPaymentAsync).get(GetByIdAsync);

export default router;
