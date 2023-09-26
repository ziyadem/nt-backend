const fetchData = require("../../utils/pg");

const ALLCOURSE = `select * from grupa`;
const ONECOURSE = `select * from grupa where id=$1`;
const POSTCOURSE = `insert into grupa (group_title,) values($1) returning *`;
const DELETECOURSE = `delete from course where id=$1 returning *`;
const UPDCOURSE = `update course set 
course_title = COALESCE($1,course_title) where id = $2 returning *`;

const getGroup = () => fetchData(ALLCOURSE);
const postGroup = (...params) => fetchData(POSTCOURSE, params);
const deleteGroup = (...params) => fetchData(DELETECOURSE, params);
const updateGroup = (...params) => fetchData(UPDCOURSE, params);
const getOneGroup = (...params) => fetchData(ONECOURSE, params);

module.exports = {
  getGroup,
  postGroup,
  deleteGroup,
  updateGroup,
  getOneGroup,
};
