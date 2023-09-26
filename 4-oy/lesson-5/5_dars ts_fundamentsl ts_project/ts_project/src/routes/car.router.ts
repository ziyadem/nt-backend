import { Router } from "express";
const router = Router();

import {
  getCars,
  createCar,
  getCarById,
  updateCar,
  deleteCar,
} from "../controllers/car.controller";

import { tokenMdw } from "../Middleware/TokenMdw";

router.get("/", tokenMdw, getCars);
router.get("/:car_id", tokenMdw, getCarById);
router.post("/", tokenMdw, createCar);
router.put("/:car_id", tokenMdw, updateCar);
router.delete("/:car_id", tokenMdw, deleteCar);

export default router;
