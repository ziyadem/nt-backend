import * as uuid from "uuid";
import { read_file, write_file } from "../fs_api/fs_api.js";
import jwt from "jsonwebtoken";
let fruit = read_file("Fruit.json");

const getFruitUser = async(req, res) => {
  let { id }=req.params
    let token = await jwt.verify(req.headers.token, process.env.SECRET_KEY);
    let tokenCourse = fruit.filter((c) => c.userId === token.id);
    let foundedCourse = tokenCourse.find((c) => c.id === id);
    if (!foundedCourse) return res.status(400).send({ msg: "fruit not found!" });
    res.send(JSON.stringify(foundedCourse))
}
const getFruitList = async(req, res) => {
  let token = await jwt.verify(req.headers.token, process.env.SECRET_KEY);
  let foundedCourse = fruit.filter((c) => c.userId === token.id);
  if (!foundedCourse) return res.status(400).send({ msg: "fruit not found!" });

  res.send(JSON.stringify(foundedCourse));
};

const createFruit = async(req, res) => {
  const { title, color } = req.body;
   let token = await jwt.verify(req.headers.token, process.env.SECRET_KEY); 
    fruit.push({
    id: uuid.v4(),
    userId:token.id,
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

const deleteFruit =async (req, res) => {
  const { id } = req.params;
 let token = await jwt.verify(req.headers.token, process.env.SECRET_KEY);
    let tokenCourse = fruit.filter((c) => c.userId=== token.id);
    let foundedCourse = tokenCourse.find((c) => c.id === id);

    if(!foundedCourse) return res.status(400).send({ msg: 'fruit not found!' })

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

const updateFruit =async (req, res) => {
  const { id } = req.params;
  const { title, color } = req.body;
 let token = await jwt.verify(req.headers.token, process.env.SECRET_KEY);
    let tokenCourse = fruit.filter((c) => c.userId=== token.id);
    let foundedCourse = tokenCourse.find((c) => c.id === id);
    if(!foundedCourse) return res.status(400).send({ msg: 'fruit not found!' })
   
  fruit.forEach((a, idx) => {
    if (a.id === id) {
      a.title = title ? title : a.title;
      a.color = color ? color : a.color;
    }
  });

  write_file("fruit.json", fruit);
  res.status(200).send(
    JSON.stringify({
      msg: "Updated!",
      status:200
    })
  );
};

export { getFruitList, createFruit, deleteFruit, updateFruit,getFruitUser };
