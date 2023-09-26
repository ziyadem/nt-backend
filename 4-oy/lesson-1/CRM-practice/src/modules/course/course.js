const {
  allCourseSxm,
  postCourseSxm,
  delCourseSxm,
  oneCourseSxm,
} = require("./schemas");

const allCourses = async (req, res) => {
  try {
    let response = await allCourseSxm();
    res.json(response);
  } catch (err) {
    res.json({ msg: err.severity });
    console.log(err);
  }
};

const postCourse = async (req, res) => {
  try {
    const { course_title } =req.body;
    const response = await postCourseSxm(course_title);
    console.log(response);
    res.json({ msg: "create" });
  } catch (err) {
    res.json({msg:err.detail});
    console.log(err);
  }
};

const deleteCourse = async (req, res) => {
  try {
    let { course_id } = req.params;
    const response = await  oneCourseSxm(course_id);
    console.log(response);
    if(!response){res.json({msg:"course not found"})}
    console.log(123);
    const response2 = await delCourseSxm(course_id);
    console.log(response2);
    res.json({msg:"deleted"});
  } catch (error) {
    console.log(error);
  }
};

// const updateTeacher = async (req, res) => {
//   try {
//     let { teach_id } = req.params;
//     let { teacher_name, teacher_surname, teacher_tell, teacher_img } = req.body;
//     const response = await oneTeachSxm(teach_id);
//     console.log(response);
//     if (response.length != 1) {
//       return res.json({ msg: "teachers note found" });
//     }
//     let {
//       teacher_name: teachName,
//       teacher_surname: teachSurname,
//       teacher_tell: teachTell,
//       teacher_img: teachImg,
//     } = response[0];
//     teacher_name = teacher_name ? teacher_name : teachName;
//     teacher_surname = teacher_surname ? teacher_surname : teachSurname;
//     teacher_tell = teacher_tell ? teacher_tell : teachTell;
//     teacher_img = teacher_img ? teacher_img : teachImg;
//     console.log(teacher_name, teacher_surname, teacher_tell, teacher_img);
//     const response2 = await updTeachSxm(
//       teacher_name,
//       teacher_surname,
//       teacher_tell,
//       teacher_img,
//       teach_id
//     );
//     console.log(response2);
//     res.json({ msg: "update" });
//   } catch (error) {}
// };

module.exports = {
  allCourses,
  postCourse,
  deleteCourse,
};
