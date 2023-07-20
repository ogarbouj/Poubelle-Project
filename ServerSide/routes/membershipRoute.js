import express from "express";
import { PostAsync, GetAllAsync, GetByIdAsync, GetAllByUserIdAsync } from "../controllers/memberShipController.js";

const router = express.Router();

router.route("/").post(PostAsync).get(GetAllAsync);
router.route("/:id").get(GetByIdAsync);

router.route(`/ByUser/:userId`).get(GetAllByUserIdAsync); 

export default router;
