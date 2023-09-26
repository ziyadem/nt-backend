import express from "express";
import {
  getAnimalsList,
  createAnimals,
  deleteAnimals,
  updateAnimals,
} from "../controller/animals.ctr.js";

const router = express.Router();

router.route("/animals").get(getAnimalsList).post(createAnimals);

router.route("/animals/:id").delete(deleteAnimals).put(updateAnimals);

export default router;
