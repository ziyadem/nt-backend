import * as uuid from "uuid";
import { read_file, write_file } from "../fs_api/fs_api.js"
import jwt from "jsonwebtoken"
let cars = read_file("cars.json");

const getCarsUser =async (req, res) => {
 let { id }=req.params
    let token = await jwt.verify(req.headers.token, process.env.SECRET_KEY);
    let tokenCourse = cars.filter((c) => c.userId === token.id);
    let foundedCourse = tokenCourse.find((c) => c.id === id);
    if (!foundedCourse) return res.status(400).send({ msg: "cars not found!" });
    res.send(JSON.stringify(foundedCourse))
};
const getCarsList =async (req, res) => {
  let token = await jwt.verify(req.headers.token, process.env.SECRET_KEY);
  let foundedCourse = cars.filter((c) => c.userId === token.id);
  if (!foundedCourse) return res.status(400).send({ msg: "cars not found!" });
  res.send(JSON.stringify(foundedCourse));
};

const createCars =async (req, res) => {
  const { title, price } = req.body
    let token = await jwt.verify(req.headers.token, process.env.SECRET_KEY);
    cars.push({
    id: uuid.v4(),
    userId:token.id,
    title,
    price
    })
  write_file("cars.json", cars);
  res.status(200).send(
    JSON.stringify({
      msg: "Created!",
    })
  );
};

const deleteCars =async (req, res) => {
  const { id } = req.params;
  let token = await jwt.verify(req.headers.token, process.env.SECRET_KEY);
  let tokenCourse = cars.filter((c) => c.userId=== token.id);
  let foundedCourse = tokenCourse.find((c) => c.id === id);
  if (!foundedCourse) return res.status(400).send({ msg: "cars not found!" });

  cars.forEach((a, idx) => {
    if (a.id === id) {
      cars.splice(idx, 1);
    }
  });

  write_file("cars.json", cars);

  return res.send(
    JSON.stringify({
      msg: "Deleted!",
    })
  );
};

const updateCars =async (req, res) => {
  const { id } = req.params;
  const { title, price } = req.body;
    let token = await jwt.verify(req.headers.token, process.env.SECRET_KEY);
    let tokenCourse = cars.filter((c) => c.userId=== token.id);
    let foundedCourse = tokenCourse.find((c) => c.id === id);
    if(!foundedCourse) return res.status(400).send({ msg: 'cars not found!' })
   
  cars.forEach((a, idx) => {
    if (a.id === id) {
      a.title = title ? title : a.title;
      a.price = price ? price : a.price;
    }
  });

  write_file("cars.json", cars);
  res.status(200).send(
    JSON.stringify({
      msg: "Updated!",
      status:200
    })
  );
};

export { getCarsList, createCars, deleteCars, updateCars ,getCarsUser};
