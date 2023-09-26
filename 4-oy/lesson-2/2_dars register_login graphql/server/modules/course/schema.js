const { gql } = require("apollo-server-express")



module.exports = gql`
   type Course{
    id: ID,
    course_title: String!,
    course_price: String,
    course_teacher_id: String,
    course_description: String,
    created_by_user_id: String
   }

   type Message {
    msg: String!
   }
   type Query {
       courses: [ Course! ]
   }

   type Mutation {
    getCourse(courseId: String!): Course,
    createCourse(
          course_title: String, 
          course_price: String, 
          course_teacher_id: String, 
          course_description: String
        ): Message   
   }
`

