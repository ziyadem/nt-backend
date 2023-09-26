import * as uuid from "uuid";
import { read_file, write_file } from "../fs_api/fs_api.js";
import jwt from "jsonwebtoken";
import bcrypt from "bcryptjs";
let user = read_file("users.json");

const register = async (req, res) => {
  const { username, email, password,fname } = req.body;

  let foundedUser = user.find((e) => e.email === email || e.username===username);

  if (foundedUser)
    return res.status(400).send(
      JSON.stringify({
        status:400,
        msg: "User already exists!!",
      })
    );
  let userId = uuid.v4();
  const hashPsw =await bcrypt.hash(password, 12) ;
  let token = await jwt.sign({ id: userId }, process.env.SECRET_KEY, {
    expiresIn: "1d",
  });

  let use = {
    id: userId,
    username,
    email,
    fname,
    password: hashPsw,
  };

  console.log(use);
  user.push(use);

  write_file("users.json", user);

  return res.status(201).send({
    status:201,
    msg: "User registrated!",
    token,
  });
};

const login = async (req, res) => {
  const { suppername, password } = req.body;
  console.log(suppername,password);
  console.log(req.body);
  let foundedUser = user.find(
    (e) => e.email ==suppername || e.username == suppername
  );
  console.log(foundedUser);
  if (!foundedUser) return res.status(404).send({ msg: "User not found!", status :404});

  let checkPsw = await bcrypt.compare(password, foundedUser.password);
  console.log(checkPsw);
  if (checkPsw) {
    let token = await jwt.sign({ id: foundedUser.id }, process.env.SECRET_KEY, {
      expiresIn: "1d",
    });
    return res.status(200).send({status:200,msg:"loged!!!", token });
  }

  return res.status(404).send({ msg: "Password invated!" });
};


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
  const { id } = req.params;
  const { name, age } = req.body;
  let foundedCourse = user.find((c) => c.id === id);

  if (!foundedCourse) return res.status(400).send({ msg: "Course not found!" });

  user.forEach((a, idx) => {
    if (a.id === id) {
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

export { getUserList, createUser, deleteUser, updateUser,register,login };
