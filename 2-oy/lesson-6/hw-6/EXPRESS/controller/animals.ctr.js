import * as uuid from "uuid";
import { read_file, write_file } from "../fs_api/fs_api.js";
import jwt from "jsonwebtoken"
let animals = read_file("animals.json");

const getAnimalsUser =async (req, res) => {
    let { id }=req.params
    let token = await jwt.verify(req.headers.token, process.env.SECRET_KEY);
    let tkAnimals = animals.filter((c) => c.userId === token.id);
    let foundedAnimals = tkAnimals.find((c) => c.id === id);
    res.send(JSON.stringify(foundedAnimals))
};
const getAnimalsList = async(req, res) => {
  let token = await jwt.verify(req.headers.token, process.env.SECRET_KEY);
  let foundedCourse = animals.filter((c) => c.userId === token.id);
  if (!foundedCourse) return res.status(400).send({ msg: "Course not found!" });

  res.send(JSON.stringify(foundedCourse));
};

const createAnimals = async(req, res) => {
  const { title,color } = req.body;
    let token = await jwt.verify(req.headers.token, process.env.SECRET_KEY);
    animals.push({
    id: uuid.v4(),
    userId:token.id,
    title,
    color
    })

  write_file("animals.json", animals);
  res.status(200).send(
    JSON.stringify({
      msg: "Created!",
    })
  );
};

const deleteAnimals = async(req, res) => {
  const { id } = req.params;
  let token = await jwt.verify(req.headers.token, process.env.SECRET_KEY);
  let tokenCourse = animals.filter((c) => c.userId === token.id);
  let foundedCourse = tokenCourse.find((c) => c.id === id);
  if (!foundedCourse) return res.status(400).send({ msg: "animals not found!" });

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

const updateAnimals = async(req, res) => {
  const { id } = req.params;
  const { title, color } = req.body;
  let token = await jwt.verify(req.headers.token, process.env.SECRET_KEY);
  let tokenCourse = animals.filter((c) => c.userId=== token.id);
  let foundedCourse = tokenCourse.find((c) => c.id === id);
  if (!foundedCourse) return res.status(400).send({ msg: "animals not found!" });

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
      status:200
    })
  );
};

export {
  getAnimalsList,
  createAnimals,
  deleteAnimals,
  updateAnimals,
  getAnimalsUser,
};
