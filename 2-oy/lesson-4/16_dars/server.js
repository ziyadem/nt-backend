const express = require("express");
const courseRouter = require("./router/course.router")


const app = express();



app.use( courseRouter)
app.get('/', (req, res) => {
    res.send("Ok");
});

app.get(/a/, (req, res) => {
    res.send('/a/')
  })
  
app.all('*', (req, res) => {
    res.status(404).send('Resource not founded');
})



app.listen(5050, console.log(5050))