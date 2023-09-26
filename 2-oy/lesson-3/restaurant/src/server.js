require("dotenv").config()
const express = require("express")

const {router} = require("./routers/router.restaurant")
const app = express()

const PORT = process.env.PORT || 9900



app.use("/api", router)

app.listen(PORT, () => console.log(PORT + " is runnig"))