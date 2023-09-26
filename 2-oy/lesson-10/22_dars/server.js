const express = require('express')
const swaggerJsDoc = require('swagger-jsdoc')
const swaggerUI = require('swagger-ui-express')
const cors = require("cors")


const userRouter = require("./routes/user.router")
const animalRouter = require("./routes/animal.router")

const options = {
    definition: {
     openapi:"3.0.0",
     info: {
         title: "My project",
         version: "1.0.0",
         description: 'My Project API Information'
        },
        servers: [
            {
                url: "http://localhost:3030"
            },
        ],
    },
    apis: ["./routes/*.js"]
 }
 
 const swaggerDocs = swaggerJsDoc(options);
const app = express()
app.use("/api-docs", swaggerUI.serve, swaggerUI.setup(swaggerDocs));
app.use(cors())

app.use(express.json())
app.use(userRouter)
app.use(animalRouter)


app.listen(3030, ()=> {
    console.log(3030);
})