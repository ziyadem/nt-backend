import express from "express";
import {
  getCarsList,
  createCars,
  deleteCars,
  updateCars,
} from "../controller/cars.ctr.js";

const router = express.Router();

router.get("/cars/list", getCarsList);
router.post("/cars/create", createCars);
router.delete("/cars/delete/:id", deleteCars);
router.put("/cars/update/:course_id", updateCars);

export default router;
