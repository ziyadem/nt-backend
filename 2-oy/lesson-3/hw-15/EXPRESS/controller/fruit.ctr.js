import * as uuid from "uuid";
import { read_file, write_file } from "../fs_api/fs_api.js";
let fruit = read_file("Fruit.json");

const getFruitList = (req, res) => {
  res.send(JSON.stringify(fruit));
};

const createFruit = (req, res) => {
  const { title, color } = req.body;

  fruit.push({
    id: uuid.v4(),
    title,
    color,
  });

  write_file("fruit.json", fruit);
  res.status(200).send(
    JSON.stringify({
      msg: "Created!",
    })
  );
};

const deleteFruit = (req, res) => {
  const { id } = req.params;

  let foundedCourse = fruit.find((c) => c.id === id);

  if (!foundedCourse) return res.status(400).send({ msg: "Course not found!" });

  fruit.forEach((a, idx) => {
    if (a.id === id) {
      fruit.splice(idx, 1);
    }
  });

  write_file("fruit.json", fruit);

  return res.send(
    JSON.stringify({
      msg: "Deleted!",
    })
  );
};

const updateFruit = (req, res) => {
  const { course_id } = req.params;
  const { title, color } = req.body;
  let foundedCourse = fruit.find((c) => c.id === course_id);

  if (!foundedCourse) return res.status(400).send({ msg: "Course not found!" });

  fruit.forEach((a, idx) => {
    if (a.id === course_id) {
      a.title = title ? title : a.title;
      a.color = color ? color : a.color;
    }
  });

  write_file("fruit.json", fruit);
  res.status(200).send(
    JSON.stringify({
      msg: "Updated!",
    })
  );
};

export { getFruitList, createFruit, deleteFruit, updateFruit };
