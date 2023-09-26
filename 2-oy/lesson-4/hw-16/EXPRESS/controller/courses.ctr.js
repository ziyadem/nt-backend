import * as uuid from 'uuid'
import { read_file, write_file } from '../fs_api/fs_api.js'



const getCourseList =  (req, res) => {
    let courses = read_file("courses.json")
    res.send(JSON.stringify(courses))
}

const createCourse =  (req, res) => {
    const { title, price } = req.body
    let courses = read_file("courses.json")
    courses.push({
        id: uuid.v4(),
        title,
        price
    })

    write_file("courses.json", courses)
    res.status(200).send(JSON.stringify({
        msg: 'Created!'
    }))
}

const deleteCourse =  (req, res) => {
    const { id } = req.params

    let courses = read_file("courses.json")

    let foundedCourse = courses.find(c => c.id === id)

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

const updateCourse =  (req, res) => {
    const { id } = req.params
    const { title, price } = req.body
    let courses = read_file("courses.json")

    let foundedCourse = courses.find(c => c.id === id)

    if(!foundedCourse) return res.status(400).send({ msg: 'Course not found!' })


    courses.forEach((course, idx) => {
        if(course.id === id){
            course.title = title ? title : course.title
            course.price = price ? price : course.price
        }
    })

    write_file("courses.json", courses)
    res.status(200).send(JSON.stringify({
        msg: "Updated!"
    }))
}





export {
    getCourseList,
    createCourse,
    deleteCourse,
    updateCourse,
}