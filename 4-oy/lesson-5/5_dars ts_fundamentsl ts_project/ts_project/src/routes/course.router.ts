import { Router } from "express";
const router = Router();

import {
  getCourses,
  createCourse,
  getCourseById,
  updateCourse,
  deleteCourse,
} from "../controllers/course.controller";

import { tokenMdw } from "../Middleware/TokenMdw";

router.get("/", tokenMdw, getCourses);
router.get("/:course_id", tokenMdw, getCourseById);
router.post("/", tokenMdw, createCourse);
router.put("/:course_id", tokenMdw, updateCourse);
router.delete("/:course_id", tokenMdw, deleteCourse);

export default router;
