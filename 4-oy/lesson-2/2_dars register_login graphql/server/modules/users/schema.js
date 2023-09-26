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
    msg: String!
   }
   type Query {
       users: [ User! ]
   }

   type Mutation {
    getUser(userId: String!): User,
    createUser( username: String!, user_surname: String!, password: String!, email: String!,  age: Int!, user_role: String!): Message,
    deleteUser( id: ID! ): Message,
    updateUser( id: ID!, username: String, user_surname: String, password: String, email: String,  age: Int, user_role: String): Message,
   }
`

