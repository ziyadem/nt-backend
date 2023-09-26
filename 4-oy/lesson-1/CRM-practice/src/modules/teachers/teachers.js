const {
  allTeachSxm,
  postTeachSxm,
  delTeachSxm,
  oneTeachSxm,
  updTeachSxm,
} = require("./schemas");

const allTeachers = async (req, res) => {
  try {
      res.json(await allTeachSxm());
  } catch (err) {
    console.log(err);
  }
};

const postTeacher = async (req, res) => {
  try {
    const { teacher_name, teacher_surname, teacher_tell, teacher_img } =
      req.body;

    const response = await postTeachSxm(
      teacher_name,
      teacher_surname,
      teacher_tell,
      teacher_img
    );
    console.log(response);
    res.json({msg:"create"});
  } catch (err) {
    console.log(err);
  }
};

const deleteTeacher=async (req,res)=>{
  try {
    let { teach_id } = req.params;
    const response = await delTeachSxm(teach_id);
    console.log(response);
    res.json("ok");
  } catch (error) {
    console.log(error);   
  }
}

const updateTeacher=async (req,res)=>{
  try {
    let {teach_id}=req.params;
    let { teacher_name, teacher_surname, teacher_tell, teacher_img } = req.body;
    const response = await oneTeachSxm(teach_id);
    console.log(response);
    if(response.length !=1){return res.json({msg:"teachers note found"})}
    let {teacher_name:teachName, teacher_surname:teachSurname, teacher_tell:teachTell, teacher_img:teachImg}=response[0]
    teacher_name = teacher_name ? teacher_name : teachName;
    teacher_surname = teacher_surname ? teacher_surname : teachSurname;
    teacher_tell = teacher_tell ? teacher_tell : teachTell;
    teacher_img = teacher_img ? teacher_img : teachImg;
  console.log(teacher_name, teacher_surname, teacher_tell, teacher_img);
  const response2 = await updTeachSxm(
    teacher_name,
    teacher_surname,
    teacher_tell,
    teacher_img,
    teach_id
  );
  console.log(response2);
    res.json({msg:"update"})
    
  } catch (error) {
    
  }
}

module.exports = {
  allTeachers,
  postTeacher,
  deleteTeacher,
  updateTeacher
};
