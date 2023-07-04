import express from "express"; 



import { createType, getAllTypes, getTypeById, updateType, deleteType } from "../controllers/Type.js";

const router = express.Router(); 
router.post('/', createType);
router.get('/', getAllTypes);
router.get('/:id', getTypeById);
router.put('/:id', updateType);
router.delete('/:id', deleteType);
export default router;