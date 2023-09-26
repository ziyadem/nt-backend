import * as uuid from "uuid";
import { read_file, write_file } from "../fs_api/fs_api.js";
let animals = read_file("animals.json");

const getAnimalsList = (req, res) => {
  res.send(JSON.stringify(animals));
};

const createAnimals = (req, res) => {
  const { title,color } = req.body;

  animals.push({
    id: uuid.v4(),
    title,
    color,
  });

  write_file("animals.json", animals);
  res.status(200).send(
    JSON.stringify({
      msg: "Created!",
    })
  );
};

const deleteAnimals = (req, res) => {
  const { id } = req.params;

  let foundedCourse = animals.find((c) => c.id === id);

  if (!foundedCourse) return res.status(400).send({ msg: "Course not found!" });

  animals.forEach((a, idx) => {
    if (a.id === id) {
      animals.splice(idx, 1);
    }
  });

  write_file("animals.json", animals);

  return res.send(
    JSON.stringify({
      msg: "Deleted!",
    })
  );
};

const updateAnimals = (req, res) => {
  const { id } = req.params;
  const { title, color } = req.body;
  let foundedCourse = animals.find((c) => c.id === id);

  if (!foundedCourse) return res.status(400).send({ msg: "Course not found!" });

  animals.forEach((a, idx) => {
    if (a.id === id) {
      a.title = title ? title : a.title;
      a.color = color ? color : a.color;
    }
  });

  write_file("animals.json", animals);
  res.status(200).send(
    JSON.stringify({
      msg: "Updated!",
    })
  );
};

export { getAnimalsList, createAnimals, deleteAnimals, updateAnimals };
