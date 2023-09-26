const router = require("express").Router();
const { teacherMdw, teacherUpdateMdw } = require("../middlewares/teacherMdw");
const { courseMdw, courseUpdateMdw } = require("../middlewares/courseMdw");
const { groupMdw, groupUpdateMdw } = require("../middlewares/groupMdw");
const {
  getAllTeachers,
  postCreateTeachers,
  putUpdateTeacher,
  deleteDeleteTeacher,
} = require("./teachers/teachers");

const {
  getAllCourse,
  postCreateCourse,
  putUpdateCourse,
  deleteDeletCourse,
} = require("./course/course");

const {
  getAllGroup,
  postCreateGroup,
  putUpdateGroup,
  deleteDeletGroup,
} = require("./course/course");

router.get("/teachers", getAllTeachers);
router.post("/teacher",teacherMdw, postCreateTeachers);
router.put("/teacher/:teacher_id",teacherUpdateMdw, putUpdateTeacher);
router.delete("/teacher/:teacher_id",deleteDeleteTeacher);


router.get("/course", getAllCourse);
router.post("/course", courseMdw, postCreateCourse);
router.delete("/course/:course_id", deleteDeletCourse);
router.put("/course/:course_id", courseUpdateMdw, putUpdateCourse);


router.get("/group", getAllGroup);
router.post("/group", groupMdw, postCreateGroup);
router.delete("/group/:group_id", deleteDeletGroup);
router.put("/group/:group_id", groupUpdateMdw, putUpdateGroup);


module.exports = router;
