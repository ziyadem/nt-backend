const fetchData = require("../../utils/pg");

const ALLCOURSE = `select * from course`;
const ONECOURSE = `select * from course where id=$1`;
const POSTCOURSE = `insert into course (course_title) values($1) returning *`;
const DELETECOURSE = `delete from course where id=$1 returning *`;
const UPDCOURSE = `UPDATE teachers SET teacher_name=$1, teacher_surname=$2, teacher_tell=$3, teacher_img=$4 WHERE id=$5  returning *`;
const allCourseSxm = () => fetchData(ALLCOURSE);
const postCourseSxm = (course_title) => fetchData(POSTCOURSE, course_title);

const delCourseSxm = (course_id) => fetchData(DELETECOURSE, course_id);
const updTeachSxm = (
  teacher_name,
  teacher_surname,
  teacher_tell,
  teacher_img,
  teach_id
) =>
  fetchData(
    UPDATETEACHER,
    teacher_name,
    teacher_surname,
    teacher_tell,
    teacher_img,
    teach_id
  );
const oneCourseSxm = (course_id) => fetchData(ONECOURSE, course_id);

module.exports = {
  allCourseSxm,
  postCourseSxm,
  delCourseSxm,
  updTeachSxm,
  oneCourseSxm,
};
