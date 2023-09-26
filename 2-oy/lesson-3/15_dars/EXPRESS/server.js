import express from 'express'
import cors from 'cors'
import dotenv from 'dotenv'



//routes
import courseRouter from './routers/courses.router.js'


dotenv.config()

const port = process.env.PORT || 5001

const app = express()


app.use(cors())
app.use(express.json())

app.use('/courses', courseRouter)
app.use('/animals', animalsRouter)





app.listen(port, () => console.log(port))