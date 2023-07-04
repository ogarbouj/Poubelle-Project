import express from "express";

import {
  createZone,
  getAllZones,
  getZoneById,
  updateZone,
  deleteZone,
  findZonesNearby,
} from "../controllers/zoneController.js";

const router = express.Router();

router.post("/", createZone);
router.get("/", getAllZones);
router.get("/nearby", findZonesNearby);
router.get("/:id", getZoneById);
router.put("/:id", updateZone);
router.delete("/:id", deleteZone);
//router.post('/byAddress', getZonesByAddress);
//router.post('/coordinates', addZoneWithCoordinates);

export default router;
