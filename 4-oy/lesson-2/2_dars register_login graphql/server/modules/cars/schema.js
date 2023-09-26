const { gql } = require("apollo-server-express")



module.exports = gql`
   type Car{
    id: ID,
    title: String!,
    price: String
   }

   type Message {
    msg: String!
   }
   type Query {
       cars: [ Car! ]
   }

   type Mutation {
    getCar(carId: String!): Car   
   }
`

