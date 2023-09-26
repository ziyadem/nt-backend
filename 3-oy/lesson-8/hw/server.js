const express = require("express");
const cors = require("cors");


//routes
const userRouter = require("./routes/user.router.js");

// const coursesRouter = require("./routes/course.router.js");

const app = express();
app.use(cors());
app.use(express.json());

app.use(userRouter);
// app.use(coursesRouter);
app.all("*", (req, res) => {
  res.status(404).send("Resource not founded");
});

app.listen(1700, console.log("port " + 1700));
