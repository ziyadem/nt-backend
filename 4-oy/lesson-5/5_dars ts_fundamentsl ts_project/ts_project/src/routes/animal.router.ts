import { Router } from "express";
const router = Router();

import {
  getAnimals,
  createAnimal,
  getAnimalById,
  updateAnimal,
  deleteAnimal,
} from "../controllers/animal.controller";

import { tokenMdw } from "../Middleware/TokenMdw";

router.get("/", tokenMdw, getAnimals);
router.get("/:animal_id", tokenMdw, getAnimalById);
router.post("/", tokenMdw, createAnimal);
router.put("/:animal_id", tokenMdw, updateAnimal);
router.delete("/:animal_id", tokenMdw, deleteAnimal);

export default router;
