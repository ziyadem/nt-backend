const router = require("express").Router();
const {
  allTeachers,
  postTeacher,
  deleteTeacher,
  updateTeacher,
} = require("./teachers/teachers");
const { allCourses, postCourse, deleteCourse } = require("./course/course");

//teachers
router.get("/teachers", allTeachers);
router.post("/teachers/create", postTeacher);
router.delete("/teachers/:teach_id", deleteTeacher);
router.put("/teachers/:teach_id", updateTeacher);
router.get("/courses", allCourses);
router.post("/courses/create", postCourse);
router.delete("/courses/:course_id", deleteCourse);

module.exports = router;
