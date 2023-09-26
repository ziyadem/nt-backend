
const {
  allTeachers,
  postTeacher,
  updateTeacher,
  deleteTeacher,
} = require("./schemas");

const getAllGroup = async (req, res) => {
  try {
    const dataTeachers = await allTeachers();
    if (dataTeachers.length == 0) {
      res.json("Topilmadi");
    }
    res.json({
      status: 200,
      message: "ok",
      data: dataTeachers,
    });
  } catch (err) {
    console.log(err);
  }
};

const postCreateGroup = async (req, res) => {
  try {
    const { teacher_name, teacher_surname, teacher_tell, teacher_img } =
      req.body;
    const response = await postTeacher(
      teacher_name,
      teacher_surname,
      teacher_tell,
      teacher_img
    );
    res.json({
      status: 200,
      message: "ok",
      data: response,
    });
  } catch (err) {
    console.log(err);
  }
};

const putUpdateGroup = async (req, res) => {
  try {
    const { teacher_id } = req.params;
    const { teacher_name, teacher_surname, teacher_tell, teacher_img } =
      req.body;
    const response = await updateTeacher(
      teacher_name,
      teacher_surname,
      teacher_tell,
      teacher_img,
      teacher_id
    );

    res.json({
      status: 200,
      message: "ok",
      data: response,
    });
  } catch (err) {
    console.log(err);
  }
};

const deleteDeletGroup = async (req, res) => {
  try {
    let { teacher_id } = req.params;
    let response = await deleteTeacher(teacher_id);
    if (response.length !== 1) {
      res.json({
        status: 400,
        msg: "not deleted",
      });
    }
    res.json({
      status: 200,
      msg: "deleted",
    });
  } catch (error) {
    console.log(error);
  }
};

module.exports= {
  getAllGroup,
  postCreateGroup,
  putUpdateGroup,
  deleteDeletGroup,
}