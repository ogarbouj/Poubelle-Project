import express from "express";
import {
  GetAllAsync,
  GetByIdAsync,
} from "../controllers/membershipInvoiceController.js";

const router = express.Router();

router.route("/").get(GetAllAsync);
router.route("/:id").get(GetByIdAsync);

export default router;
