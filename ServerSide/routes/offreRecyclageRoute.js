import express from "express";
import { body } from "express-validator";

import {
  getAll,
  addOnce,
  getOnce,
  putOnce,
  deleteOnce,
  rechercherMot2,
  assignOffre
} from "../controllers/offreRecyclageController.js";
import { addOnceMail } from "../controllers/offreRecyclageController.js";

const router = express.Router();

router
  .route("/")
  .get(getAll)
 
  /*.post(
   
    body("title").isLength({ min: 5 }),
    body("type").isLength({ min: 5 }),
    body("price").isNumeric(),
   
    addOnce
  );*/

  .post(addOnceMail);

router.route("/rechercher/:mot").get(rechercherMot2);
router.route("/user-get-offrecycle").post(assignOffre);

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
