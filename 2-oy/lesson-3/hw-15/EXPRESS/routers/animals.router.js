import express from "express";
import {
  getAnimalsList,
  createAnimals,
  deleteAnimals,
  updateAnimals,
} from "../controller/animals.ctr.js";

const router = express.Router();

router.get("/animals/list", getAnimalsList);
router.post("/animals/create", createAnimals);
router.delete("/animals/delete/:id", deleteAnimals);
router.put("/animals/update/:course_id", updateAnimals);

export default router;
