import * as uuid from "uuid";
import { read_file, write_file } from "../fs_api/fs_api.js";
let user = read_file("user.json");

const getUserList = (req, res) => {
  res.send(JSON.stringify(user));
};

const createUser = (req, res) => {
  const { name, age } = req.body;

  user.push({
    id: uuid.v4(),
    name,
    age,
  });

  write_file("user.json", user);
  res.status(200).send(
    JSON.stringify({
      msg: "Created!",
    })
  );
};

const deleteUser = (req, res) => {
  const { id } = req.params;

  let foundedCourse = user.find((c) => c.id === id);

  if (!foundedCourse) return res.status(400).send({ msg: "Course not found!" });

  user.forEach((a, idx) => {
    if (a.id === id) {
      user.splice(idx, 1);
    }
  });

  write_file("user.json", user);

  return res.send(
    JSON.stringify({
      msg: "Deleted!",
    })
  );
};

const updateUser = (req, res) => {
  const { course_id } = req.params;
  const { name, age } = req.body;
  let foundedCourse = cars.find((c) => c.id === course_id);

  if (!foundedCourse) return res.status(400).send({ msg: "Course not found!" });

  user.forEach((a, idx) => {
    if (a.id === course_id) {
      a.name = name ? name : a.name;
      a.age = age ? age : a.age;
    }
  });

  write_file("user.json", user);
  res.status(200).send(
    JSON.stringify({
      msg: "Updated!",
    })
  );
};

export { getUserList, createUser, deleteUser, updateUser };
