import * as uuid from 'uuid'
import jwt from "jsonwebtoken";
import { read_file, write_file } from '../fs_api/fs_api.js'
let courses = read_file("courses.json")



const getCourseUser = async (req, res) => {
    let { id }=req.params
    let token = await jwt.verify(req.headers.token, process.env.SECRET_KEY);
    let tokenCourse = courses.filter((c) => c.userId === token.id);
    let foundedCourse = tokenCourse.find((c) => c.id === id);
    if (!foundedCourse) return res.status(400).send({ msg: "Course not found!" });
    res.send(JSON.stringify(foundedCourse))
}
const getCourseList = async (req, res) => {
  let token = await jwt.verify(req.headers.token, process.env.SECRET_KEY);
  let foundedCourse = courses.filter((c) => c.userId === token.id);
  if (!foundedCourse) return res.status(400).send({ msg: "Course not found!" });

  res.send(JSON.stringify(foundedCourse));
};
const createCourse = async (req, res) => {
    const { title, price } = req.body
    let token = await jwt.verify(req.headers.token, process.env.SECRET_KEY); 
    courses.push({
    id: uuid.v4(),
    userId:token.id,
    title,
    price
    })

    write_file("courses.json", courses)
    res.status(200).send(JSON.stringify({
        msg: 'Created!',
        status:200,
    }))
}

const deleteCourse = async (req, res) => {
    const { id } = req.params
    let token = await jwt.verify(req.headers.token, process.env.SECRET_KEY);
    let tokenCourse = courses.filter((c) => c.userId=== token.id);
    let foundedCourse = tokenCourse.find((c) => c.id === id);

    if(!foundedCourse) return res.status(400).send({ msg: 'Course not found!' })

    courses.forEach((course, idx) => {
        if(course.id === id){
            courses.splice(idx, 1)
        }
    })

    write_file("courses.json", courses)
    
   return res.send(JSON.stringify({
        msg: 'Deleted!'
    }))
}

const updateCourse =async  (req, res) => {
    const { id } = req.params
    const { title, price } = req.body
    if(!title && !price){return res.status(400).send({msg:"title and price not found"})}
    let token = await jwt.verify(req.headers.token, process.env.SECRET_KEY);
    let tokenCourse = courses.filter((c) => c.userId=== token.id);
    let foundedCourse = tokenCourse.find((c) => c.id === id);
    if(!foundedCourse) return res.status(400).send({ msg: 'Course not found!' })
    courses.forEach((course, idx) => {
        if(course.id === id){
            course.title = title ? title : course.title
            course.price = price ? price : course.price
        }
    })
    write_file("courses.json", courses)
    res.status(200).send(JSON.stringify({
        msg: "Updated!",
        status:200
    }))
}





export {
  getCourseList,
  createCourse,
  deleteCourse,
  updateCourse,
  getCourseUser,
};