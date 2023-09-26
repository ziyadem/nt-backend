const http= require("http")
const uuid = require("uuid")
const dotenv = require("dotenv")
const bcrypt = require("bcryptjs")
const { read_file, write_file } = require("./fs_api/fs_api")


dotenv.config()




let app = http.createServer((req, res) => {
    res.writeHead(200, { "Content-Type": "application/json", "Access-Control-Allow-Origin": "*" })

    const course_id = req.url.split('/')[2];
    if(req.method === 'GET'){
       if(req.url === '/list'){
        let loggedUserId = req.headers.headers;

        // console.log(loggedUserId);
        console.log(req.headers.headers);
        

        let courses =  read_file("courses.json").filter(course => course.userId === loggedUserId)
     
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

        if(req.url === '/register'){
            req.on("data", async chunk => {
                let { username, email, password } = JSON.parse(chunk)

               let users =  read_file("users.json")
               let foundedUser = users.find(u => u.email === email)

               if(foundedUser) return res.end(JSON.stringify({
                   msg: 'Email already exists!!!'
               }))

              let hashedPsw = await bcrypt.hash(password, 12)

               users.push({
                id: uuid.v4(),
                username,
                email,
                password: hashedPsw
               })

               write_file("users.json", users)
               res.end(JSON.stringify({
                msg: 'Registrated!'
               }))
            })
        }

        if(req.url === '/login'){
            req.on("data", async chunk => {
                const { suppername, password } = JSON.parse(chunk)

                let users = read_file("users.json")

               let foundedUser = users.find(user => user.username === suppername || user.email === suppername)

               if(!foundedUser) return res.end(JSON.stringify({
                msg: "User not found!"
               }))

             let isLogged = await bcrypt.compare(password, foundedUser.password)

             if(!isLogged) return res.end(JSON.stringify({ msg: "Password xato!" }))

             delete foundedUser.password
             res.end(JSON.stringify({
                msg: "Logged",
                data: foundedUser
             }))

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


const port = process.env.PORT || 8080


app.listen(port, () => {
    console.log(`Server is running on the ${port} port`);
})