const userModule = require("./users")
const courseModule = require("./course")
const carModule = require("./cars")
const authModule = require("./auth")

const { makeExecutableSchema } = require("@graphql-tools/schema")

module.exports = makeExecutableSchema({
  typeDefs: [
        userModule.typeDefs, 
        courseModule.typeDefs, 
        carModule.typeDefs,
        authModule.typeDefs
      ],
       
  resolvers: [
   userModule.resolvers,
   courseModule.resolvers,
   carModule.resolvers,
   authModule.resolvers
  ],
});