
const express = require("express");
const path = require("path");
const ejs = require("ejs");
const app = express();
const PORT = 5000;

app.set("view engine", "ejs");
app.use(express.json());

app.use(express.static(path.join(process.cwd(), "public")));

app.use(require("../router/user.routes"));

app.get("/index", (req, res) =>
  res.render("index", {
    title: "index",
    datas: require("../database/users.json"),
  })
);
app.get("/register", (req, res) =>
  res.render("register", {
    title: "Register",
  })
);

app.use("*", (req, res) => {
  res.send({ data: "Bad Request" });
});

app.listen(PORT);
console.log("Running ... " + PORT);
