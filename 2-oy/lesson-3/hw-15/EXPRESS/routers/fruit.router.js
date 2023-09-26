import express from "express";
import {
  getFruitList,
  createFruit,
  deleteFruit,
  updateFruit,
} from "../controller/fruit.ctr.js";

const router = express.Router();

router.get("/fruit/list", getFruitList);
router.post("/fruit/create", createFruit);
router.delete("/fruit/delete/:id", deleteFruit);
router.put("/fruit/update/:course_id", updateFruit);

export default router;
