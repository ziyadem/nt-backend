import { Router } from "express";
const router = Router();

import {
  getFruits,
  createFruit,
  getFruitById,
  updateFruit,
  deleteFruit,
} from "../controllers/fruit.controller";

import { tokenMdw } from '../Middleware/TokenMdw';

router.get("/", tokenMdw, getFruits);
router.get("/:fruit_id",tokenMdw, getFruitById);
router.post("/",tokenMdw, createFruit);
router.put("/:fruit_id",tokenMdw, updateFruit);
router.delete("/:fruit_id",tokenMdw, deleteFruit);

export default router;
