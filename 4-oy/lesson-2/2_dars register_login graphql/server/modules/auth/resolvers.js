const {  login, register } = require("./model")
module.exports = {
    Query: {
        cars: async () => await getCars()
    },
    Mutation: {
        register: async(_, args) => register(args),
        login: async(_, args) => login(args),
       
    }
}