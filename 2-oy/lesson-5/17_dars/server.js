const express = require("express");
const dotenv = require("dotenv");
const courseRouter = require("./router/course.router");
const authRouter = require("./router/auth.router");


dotenv.config();

const port = process.env.PORT || 5000



const app = express();


app.use(express.json())


app.use(authRouter);
app.use(courseRouter);



app.listen(port, console.log(port))