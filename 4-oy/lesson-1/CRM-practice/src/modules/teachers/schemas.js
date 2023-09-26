const fetchData = require("../../utils/pg");

const ALLTEACHERS = `select * from teachers`;
const ONETEACHERS = `select * from teachers where id=$1`;
const POSTTEACHER = `insert into teachers (teacher_name, teacher_surname, teacher_tell, teacher_img) values($1, $2,$3, $4) returning *`;
const DELETETEACHER = `delete from teachers where id=$1 returning *`;
const UPDATETEACHER = `UPDATE teachers SET teacher_name=$1, teacher_surname=$2, teacher_tell=$3, teacher_img=$4 WHERE id=$5  returning *`;
const allTeachSxm = () => fetchData(ALLTEACHERS);
const postTeachSxm = (
  teacher_name,
  teacher_surname,
  teacher_tell,
  teacher_img
) =>
  fetchData(
    POSTTEACHER,
    teacher_name,
    teacher_surname,
    teacher_tell,
    teacher_img
  );

const delTeachSxm = (teach_id) => fetchData(DELETETEACHER, teach_id);
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
const oneTeachSxm = (teach_id) => fetchData(ONETEACHERS, teach_id);

module.exports = {
  allTeachSxm,
  postTeachSxm,
  delTeachSxm,
  updTeachSxm,
  oneTeachSxm
};
