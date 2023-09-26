const {
  getCourse,
  postCourse,
  deleteCourse,
  updateCourse,
  getOneCourse,
} = require("./schemas");

const getAllCourse = async (req, res) => {
  try {
    let response = await getCourse();
    res.json(response);
  } catch (err) {
    res.json({ msg: err.severity });
    console.log(err);
  }
};

const postCreateCourse = async (req, res) => {
  try {
    const { course_title } = req.body;
    const response = await postCourse(course_title);
    console.log(response);
    res.json({ msg: "create" });
  } catch (err) {
    res.json({ msg: err.detail });
    console.log(err);
  }
};

const deleteDeletCourse = async (req, res) => {
  try {
    let { course_id } = req.params;
    const response = await deleteCourse(course_id);
    if(response.length==0){return res.json({msg:"course not found"})};
    res.json({ msg: "deleted" });
  } catch (error) {
    console.log(error);
  }
};

const putUpdateCourse = async (req, res) => {
  try {
    let { course_id } = req.params;
    let { course_title } = req.body;
    console.log(course_id,course_title);
    const response= await updateCourse(
      course_title,
      course_id,
    );
    console.log(123);
    console.log(response);
    res.json({ msg: "update" });
  } catch (error) {
    console.log("er",error);
  }
};

module.exports = {
  getAllCourse,
  postCreateCourse,
  putUpdateCourse,
  deleteDeletCourse,
};
