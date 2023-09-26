import * as uuid from "uuid";
import { read_file, write_file } from "../fs_api/fs_api.js"
let cars = read_file("cars.json");

const getCarsList = (req, res) => {
  res.send(JSON.stringify(cars));
};

const createCars = (req, res) => {
  const { title, color } = req.body;

  cars.push({
    id: uuid.v4(),
    title,
    color,
  });

  write_file("cars.json", cars);
  res.status(200).send(
    JSON.stringify({
      msg: "Created!",
    })
  );
};

const deleteCars = (req, res) => {
  const { id } = req.params;

  let foundedCourse = cars.find((c) => c.id === id);

  if (!foundedCourse) return res.status(400).send({ msg: "Course not found!" });

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

const updateCars = (req, res) => {
  const { id } = req.params;
  const { title, color } = req.body;
  let foundedCourse = cars.find((c) => c.id === id);

  if (!foundedCourse) return res.status(400).send({ msg: "Course not found!" });

  cars.forEach((a, idx) => {
    if (a.id === id) {
      a.title = title ? title : a.title;
      a.color = color ? color : a.color;
    }
  });

  write_file("cars.json", cars);
  res.status(200).send(
    JSON.stringify({
      msg: "Updated!",
    })
  );
};

export { getCarsList, createCars, deleteCars, updateCars };
