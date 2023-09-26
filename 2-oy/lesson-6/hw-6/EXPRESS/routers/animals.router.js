import express from "express";
import {
  getAnimalsList,
  createAnimals,
  deleteAnimals,
  updateAnimals,
  getAnimalsUser,
} from "../controller/animals.ctr.js";

const router = express.Router();

router.route("/animals").get(getAnimalsList).post(createAnimals);

router
  .route("/animals/:id")
  .delete(deleteAnimals)
  .put(updateAnimals)
  .get(getAnimalsUser);

export default router;
