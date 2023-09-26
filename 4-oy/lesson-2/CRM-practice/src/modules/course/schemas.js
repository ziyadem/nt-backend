const fetchData = require("../../utils/pg");

const ALLCOURSE = `select * from course`;
const ONECOURSE = `select * from course where id=$1`;
const POSTCOURSE = `insert into course (course_title) values($1) returning *`;
const DELETECOURSE = `delete from course where id=$1 returning *`;
const UPDCOURSE = `update course set 
course_title = COALESCE($1,course_title) where id = $2 returning *`;

const getCourse = () => fetchData(ALLCOURSE);
const postCourse = (...params) => fetchData(POSTCOURSE, params);
const deleteCourse = (...params) => fetchData(DELETECOURSE, params);
const updateCourse = (...params) => fetchData(UPDCOURSE, params);
const getOneCourse = (...params) => fetchData(ONECOURSE, params);

module.exports = {
  getCourse,
  postCourse,
  deleteCourse,
  updateCourse,
  getOneCourse,
};
