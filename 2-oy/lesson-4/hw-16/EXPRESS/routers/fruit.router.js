import express from "express";
import {
  getFruitList,
  createFruit,
  deleteFruit,
  updateFruit,
} from "../controller/fruit.ctr.js";

const router = express.Router();
router.route("/fruit").get(getFruitList).post(createFruit)
router.route("/fruit/:id").delete(deleteFruit).put(updateFruit)
export default router;
