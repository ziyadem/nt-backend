const { gql } = require("apollo-server-express")



module.exports = gql`
   type User{
    id: ID,
    user_name: String!,
    user_surname: String,
    user_password: String,
    user_email: String,
    user_role: String,
    user_age: Int
   }

   type Message {
    msg: String!,
    token: String
   }
   type Query {
       users: [ User! ]
   }

   type Mutation {
    register(user_name: String, user_surname: String, user_password: String, user_email: String, user_role: String, user_age: Int ): Message,
    login( user_email: String, user_password: String ): Message,
}
`
