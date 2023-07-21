import express from "express";
import { body } from "express-validator";

import {
  getAll,
  addOnce,
  getOnce,
  putOnce,
  deleteOnce,
} from "../controllers/offrePromotionelleController.js";

const router = express.Router();

router
  .route("/")
  .get(getAll)
  
  .post(
    body("title").isLength({ min: 5 }),
    body("type").isLength({ min: 5 }),
    body("price").isNumeric(),

    addOnce
  );

router
  .route("/:id")
  .get(getOnce)
  .delete(deleteOnce)
  .put(
    body("title").isLength({ min: 5 }),
    body("type").isLength({ min: 5 }),
    body("price").isNumeric(),

    putOnce
  );

export default router;
