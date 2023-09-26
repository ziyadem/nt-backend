

const createCourse = (req, res) => {
    res.send("CREATE")
}
const getCourses = (req, res) => {
    res.send("LIST")
}

const getCourse = (req, res) => {
    res.send("get one")
}

const deleteCourse = (req, res) => {
    res.send("delete one")
}

const updateCourse = (req, res) => {
    res.send("update one")
}


module.exports = {
    createCourse,
    getCourse,
    getCourses,
    deleteCourse,
    updateCourse
}