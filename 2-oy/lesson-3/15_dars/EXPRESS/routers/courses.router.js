import express from "express"
import { getCourseList, createCourse, deleteCourse, updateCourse } from '../controller/courses.ctr.js'

const router = express.Router()


router.get("/list", getCourseList)
router.post("/create", createCourse)
router.delete("/delete/:id", deleteCourse)
router.put("/update/:course_id", updateCourse)





export default router