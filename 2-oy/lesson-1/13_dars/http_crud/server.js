const http= require("http")
const uuid = require("uuid")
const { read_file, write_file } = require("./fs_api/fs_api")




let app = http.createServer((req, res) => {
    res.writeHead(200, { "Content-Type": "application/json", "Access-Control-Allow-Origin": "*" })

    const course_id = req.url.split('/')[2];
    if(req.method === 'GET'){
       if(req.url === '/list'){
        let courses =  read_file("courses.json")
     
       res.end(JSON.stringify(courses))
       }

       if(req.url === `/list/${course_id}`){
        let oneCourse = read_file("courses.json").find((course) => course.id === course_id)

        if(!oneCourse) return res.end("Course not found!")

        res.end(JSON.stringify(oneCourse))
       }

       
    }

    if(req.method === 'POST'){
        if(req.url === '/create'){
            req.on("data", chunk => {
                let courses = read_file("courses.json")
                let new_course = JSON.parse(chunk)

                courses.push({
                    id: uuid.v4(),
                    ...new_course
                })

                write_file('courses.json', courses)

                res.end(JSON.stringify("OK"))
            })
        }
    }


    if(req.method === 'DELETE'){
        if(req.url === `/courses/${course_id}`){
            let courses = read_file("courses.json")

            let getOne = courses.find(c => c.id === course_id)

            if(!getOne) return res.end("course not found!")

            courses.forEach((course, idx) => {
                if(course.id === course_id){
                    courses.splice(idx, 1)
                }
            })

            write_file("courses.json", courses)
            res.end("Deleted Course!")
        }
    }

    if(req.method === 'PUT'){
        if(req.url === `/courses/${course_id}`){
            req.on("data", chunk => {
                let updatedCourse = JSON.parse(chunk)

                let courses = read_file("courses.json")

               let getOne =  courses.find(course => course.id === course_id)

               if(!getOne) return res.end("Course not found!")


                courses.forEach((course, idx) => {
                    if(course.id === course_id){
                        course.title = updatedCourse.title
                        course.price = updatedCourse.price
                        course.author = updatedCourse.author
                    }
                })

                write_file('courses.json', courses)

                res.end("Updated course!")
            })
        }
    }

})


app.listen(4000, () => {
    console.log(`Server is running on the 8080 port`);
})