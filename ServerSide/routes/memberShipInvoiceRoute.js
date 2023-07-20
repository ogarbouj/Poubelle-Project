import express from "express";
import {
  GetAllAsync,
  GetAllByUserIdAsync,
  GetByIdAsync,
} from "../controllers/membershipInvoiceController.js";

const router = express.Router();

router.route("/").get(GetAllAsync);
router.route("/:id").get(GetByIdAsync);
router.route(`/ByUser/:userId`).get(GetAllByUserIdAsync); 

export default router;
