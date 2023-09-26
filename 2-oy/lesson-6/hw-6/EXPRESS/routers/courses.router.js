import express from "express"
import { getCourseList, createCourse, deleteCourse, updateCourse,getCourseUser } from '../controller/courses.ctr.js'

const router = express.Router()

router.route("/courses").get(getCourseList).post(createCourse);

router
  .route("/courses/:id")
  .delete(deleteCourse)
  .put(updateCourse)
  .get(getCourseUser)

export default router