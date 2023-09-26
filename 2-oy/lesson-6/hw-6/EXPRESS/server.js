import express from 'express'
import cors from 'cors'
import dotenv from 'dotenv'

//routes
import animalsRouter from "./routers/animals.router.js";
import courseRouter from './routers/courses.router.js'
import carsRouter from './routers/cars.router.js'
import fruitRouter from './routers/fruit.router.js'
import  userRouter from './routers/user.router.js'

dotenv.config()
const port = process.env.PORT || 5001
const app = express()
app.use(
  cors({
    origin: ["http://localhost:5173"],
  })
);
app.use(express.json())

app.use( courseRouter)
app.use( animalsRouter)
app.use( carsRouter)
app.use( userRouter)
app.use( fruitRouter)

app.all("*", (req, res) => {
  res.status(404).send("Resource not founded");
});

//    router.all("*", (req, res) => {
//      res.send(`<h1>Not found</h1>`);
//    });





app.listen(port, () => console.log(port))