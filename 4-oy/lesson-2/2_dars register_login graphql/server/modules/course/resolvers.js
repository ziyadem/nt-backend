const {  getCourses, getCourse, createCourse } = require("./model")
module.exports = {
    Query: {
        courses: async () => await getCourses()
    },
    Mutation: {
        getCourse: async (_, args, req) => await getCourse(_, args, req),
        createCourse: async (_, args, context) => await createCourse(args, context)
    }
}