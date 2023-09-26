import express from "express";
import {
  getCarsList,
  createCars,
  deleteCars,
  updateCars,
} from "../controller/cars.ctr.js";

const router = express.Router();
router.route("/cars").get(getCarsList).post(createCars);
router.route("/cars/:id").delete(deleteCars).put(updateCars);
export default router;
