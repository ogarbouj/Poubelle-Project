import express from "express";
import { PostAsync, GetAllAsync, GetByIdAsync } from "../controllers/memberShipController.js";

const router = express.Router();

router.route("/").post(PostAsync).get(GetAllAsync);
router.route("/:id").post(PostAsync).get(GetByIdAsync);

export default router;
