const express = require("express");
const path = require("path");
const ejs = require("ejs");
const dotenv=require("dotenv")

const port=process.env.PORT || 5555
const app = express();
dotenv.config();
app.set("view engine", "ejs");
app.use(express.json());
app.use(express.static(path.join(process.cwd(), "public")));
app.get("/",(req,res)=>{
    res.render("index"),{
        title:"index"
    }
})
app.get("/register",(req,res)=>{
    res.render("register"),{
        title:"register"
    }
})
// app.use(require("../router/user.routes"));
// app.get("/index", (req, res) =>
//   res.render("index", {
//     title: "index",
//     datas: require("../database/users.json"),
//   })
// );
// app.get("/register", (req, res) =>
//   res.render("register", {
//     title: "Register",
//   })
// );
app.use("*", (req, res) => {
  res.send({ data: "Bad Request" });
});

app.listen(port);
console.log("Running ... " + port);