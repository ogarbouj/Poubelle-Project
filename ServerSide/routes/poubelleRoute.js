import express from "express";
import {
  createPoubelle,
  getPoubelleById,
  updatePoubelle,
  deletePoubelle,
  getAllPoubelles,
  getPoubellesByType,
  getPoubellesByZone,
  sortPoubellesByTaille,
  searchPoubelles,
} from "../controllers/poubelleController.js";

const router = express.Router();

router.post("/", createPoubelle);
router.get("/", getAllPoubelles);
router.get("/search", searchPoubelles);
router.get("/sort", sortPoubellesByTaille);
router.get("/:id", getPoubelleById);

router.put("/:id", updatePoubelle);
router.delete("/:id", deletePoubelle);
router.get("/type/:typeId", getPoubellesByType);
router.get("/zone/:zoneId", getPoubellesByZone);

export default router;
