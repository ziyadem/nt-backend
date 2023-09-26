import express from "express"
import { getCourseList, createCourse, deleteCourse, updateCourse } from '../controller/courses.ctr.js'

const router = express.Router()


router.get("/courses/list", getCourseList)
router.post("/courses/create", createCourse)
router.delete("/courses/delete/:id", deleteCourse)
router.put("/courses/update/:course_id", updateCourse)





export default router